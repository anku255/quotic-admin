import React, { useCallback, useEffect, useRef, useState } from "react";
import { useApolloClient, ApolloClient } from "@apollo/client";
import { FormProvider, useForm, useFieldArray } from "react-hook-form";

import { Input } from "components/Form/Input";
import { RichTextArea, getHtmlMarkdownConverter } from "components/Form/RichTextArea";
import { AsyncSelectField, SelectField } from "components/Form/Select";
import { SEARCH_CHARACTERS_QUERY } from "./gql/characters.gql";
import { GET_QUOTES_FROM_WIKI_QUOTES_QUERY } from "./gql/admin.gql";
import { useQuoteCreateManyMutation } from "generated/apolloHooks";
import { stringifyQueryParams, parseQueryParams } from "utils/commonHelpers";
import { useHistory } from "react-router";

const markdownConverter = getHtmlMarkdownConverter({
  openLinksInNewWindow: false,
});

interface IGenericOption {
  label: string;
  value: string;
}

interface FetchQuotesFormValues {
  wikiQuotesUrl: string;
  type: IGenericOption;
  skip: string;
  limit: string;
  showId: string;
}

interface WikiQuote {
  raw: string;
  markup: string;
  season?: string;
  episode?: string;
  mainCharacter: IGenericOption;
  characters: Array<IGenericOption>;
}

interface QuoteValuesDB {
  raw: string;
  markup: string;
  season?: number;
  episode?: number;
  show: string;
  mainCharacter: string;
  characters: string[];
}

interface ICharacterOption extends IGenericOption {
  coverPicture?: string;
}

async function fetchCharacters(client: ApolloClient<Record<string, unknown>>, query: string): Promise<ICharacterOption[]> {
  const res = await client.query({
    query: SEARCH_CHARACTERS_QUERY,
    variables: { characterName: query, limit: 10 },
  });
  const characters = res.data?.searchCharacters ?? [];
  return characters.map((c) => ({
    label: c.characterName,
    value: c._id,
    coverPicture: c.coverPicture,
  }));
}

const modifyQuoteBeforeSave = (quote: WikiQuote, showId: string): QuoteValuesDB => ({
  ...quote,
  season: quote.season ? parseInt(quote.season, 10) : undefined,
  episode: quote.episode ? parseInt(quote.episode, 10) : undefined,
  characters: quote.characters.map(({ value }) => value),
  mainCharacter: quote.mainCharacter.value,
  show: showId,
  markup: markdownConverter.makeHtml(quote.raw),
});

export const AddQuotesFromWikiQuotes = ({ color = "light", match, history }) => {
  const client = useApolloClient();
  const [quotesFromWikiQuotes, setQuotesFromWikiQuotes] = useState();
  const showIdRef = useRef<string>();
  const [createManyQuotes, { loading: creatingQuotes }] = useQuoteCreateManyMutation();

  const fetchQuotesFromWiki = async (values: FetchQuotesFormValues) => {
    history.replace(`${match.path}${stringifyQueryParams(values as any)}`);
    const res = await client.query({
      query: GET_QUOTES_FROM_WIKI_QUOTES_QUERY,
      variables: values,
    });

    showIdRef.current = values.showId;
    setQuotesFromWikiQuotes(res.data.getQuotesFromWikiQuotes);
  };

  const onQuotesSubmit = useCallback(async (quotes: WikiQuote[]) => {
    const modifiedQuotes = quotes.map((quote) => modifyQuoteBeforeSave(quote, showIdRef.current));

    const res = await createManyQuotes({
      variables: { records: modifiedQuotes },
    });

    const quotesCreated = res.data.quoteCreateMany?.createCount;
    alert(`${quotesCreated} quotes created!`);
  }, []);

  return (
    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-200 border-0 rounded-lg shadow-lg">
      <div className="px-6 py-6 mb-0 bg-white rounded-t">
        <div className="flex justify-between text-center">
          <h6 className="text-xl font-bold text-gray-800">Add Quotes From Wiki Quotes</h6>
          <button
            className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
            type="button"
            onClick={() => []}
          >
            Fetch Quotes
          </button>
        </div>
      </div>
      <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
        <FetchQuotesForm fetchQuotesFromWiki={fetchQuotesFromWiki} />

        <div className="my-12 border-t-2" />
        <div>
          <QuotesFormArray
            {...{
              quotesFromWikiQuotes,
              onQuotesSubmit,
              apolloClient: client,
              creatingQuotes,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const name = "quotes";

function QuotesFormArray({ quotesFromWikiQuotes, apolloClient, onQuotesSubmit, creatingQuotes }) {
  const hookFormMethods = useForm<{ quotes: Array<WikiQuote> }>();

  const { reset, control } = hookFormMethods;

  const { fields, remove } = useFieldArray({ control, name });

  useEffect(() => {
    if (quotesFromWikiQuotes) {
      reset({ [name]: quotesFromWikiQuotes });
    }
  }, [quotesFromWikiQuotes, reset]);

  const onSubmit = (values: { quotes: Array<WikiQuote> }) => {
    onQuotesSubmit(values.quotes);
  };

  return (
    <FormProvider {...hookFormMethods}>
      <form
        onSubmit={hookFormMethods.handleSubmit(onSubmit)}
        onError={(errors) => {
          console.log("errors", errors);
        }}
      >
        {fields.map((item, index) => {
          return (
            <div key={item.id}>
              <div className="flex justify-between items-center">
                <h6 className="mt-3 mb-6 text-sm font-bold text-gray-500 uppercase">Quote {index + 1}</h6>
                <button className="px-4 py-2" onClick={() => remove(index)}>
                  x
                </button>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full px-4">
                  <RichTextArea name={`${name}.${index}.raw`} label="Raw Quote" defaultValue={item.raw} />
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <AsyncSelectField
                    name={`${name}.${index}.characters`}
                    label="Characters"
                    required
                    defaultValue={item.characters}
                    fetchOptions={({ query }) => fetchCharacters(apolloClient as any, query)}
                  />
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <AsyncSelectField
                    name={`${name}.${index}.mainCharacter`}
                    label="Main Character"
                    required
                    defaultValue={item.mainCharacter}
                    fetchOptions={({ query }) => fetchCharacters(apolloClient as any, query)}
                  />
                </div>
              </div>
              <hr className="my-6 border-gray-400 border-b-1" />
            </div>
          );
        })}
        <button
          className="px-4 py-2 mr-1 text-base font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="submit"
        >
          {creatingQuotes ? "Submitting" : "Submit"}
        </button>
      </form>
    </FormProvider>
  );
}

const showTypeOptions = [
  { label: "Movie", value: "MOVIE" },
  { label: "Series", value: "SERIES" },
];

function FetchQuotesForm({ fetchQuotesFromWiki }) {
  const hookFormMethods = useForm<FetchQuotesFormValues>();
  const history = useHistory();
  const formValuesFromQP = parseQueryParams(history.location.search);

  useEffect(() => {
    hookFormMethods.reset({
      ...formValuesFromQP,
      type: formValuesFromQP?.type ? ({ label: formValuesFromQP.type, value: formValuesFromQP.type } as any) : undefined,
    });
  }, []);

  const onSubmit = ({ skip, limit, type, ...values }: FetchQuotesFormValues) => {
    fetchQuotesFromWiki({ ...values, skip: parseInt(skip, 10), limit: parseInt(limit, 10), type: type.value });
  };

  return (
    <FormProvider {...hookFormMethods}>
      <form
        onSubmit={hookFormMethods.handleSubmit(onSubmit)}
        onError={(errors) => {
          console.log("errors", errors);
        }}
      >
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-4/12">
            <Input name="wikiQuotesUrl" label="Wiki Quotes URL" required />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <Input name="showId" label="Show Id" required />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <SelectField name="type" label="Show Type" options={showTypeOptions} required />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <Input name="skip" label="Skip" type="number" required />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <Input name="limit" label="Limit" type="number" required />
          </div>
        </div>
        <button
          className="px-4 py-2 mr-1 text-base font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="submit"
        >
          Fetch Quotes
        </button>
      </form>
    </FormProvider>
  );
}
