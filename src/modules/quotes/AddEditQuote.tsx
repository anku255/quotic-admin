import React, { useState } from "react";
import { useApolloClient, ApolloClient } from "@apollo/client";
import { FormProvider, useForm } from "react-hook-form";

import { Input } from "components/Form/Input";
import { RichTextArea, getHtmlMarkdownConverter } from "components/Form/RichTextArea";
import { AsyncSelectField } from "components/Form/Select";
import { SEARCH_CHARACTERS_QUERY } from "./gql/characters.gql";
import { QUOTES_MANY_QUERY, QUOTES_ONE_QUERY } from "./gql/quotes.gql";
import { useQuoteOneQuery, Quote, Character, Show, useQuoteCreateOneMutation, useQuoteUpdateOneMutation } from "generated/apolloHooks";
import { isNotEmptyObject } from "utils/commonHelpers";
import { SEARCH_SHOWS_QUERY } from "./gql/show.gql";

const markddownConverter = getHtmlMarkdownConverter({
  openLinksInNewWindow: false,
});

interface IGenericOption {
  label: string;
  value: string;
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

async function fetchShows(client: ApolloClient<Record<string, unknown>>, query: string): Promise<ICharacterOption[]> {
  const res = await client.query({
    query: SEARCH_SHOWS_QUERY,
    variables: { name: query, limit: 10 },
  });
  const shows = res.data?.searchShows ?? [];
  return shows.map((c) => ({
    label: c.name,
    value: c._id,
    coverPicture: c.coverPicture,
  }));
}

interface QuoteFormValues {
  raw: string;
  episode: string;
  season: string;
  characters: Array<IGenericOption>;
  mainCharacter: IGenericOption;
  show: IGenericOption;
}

type QuoteDatabseValues = Pick<Quote, "_id" | "raw" | "season" | "episode"> & {
  characters: Pick<Character, "_id" | "characterName" | "realName">[];
  show: Pick<Show, "_id" | "name">;
  mainCharacter: Pick<Character, "_id" | "characterName" | "realName">;
};

const modifyBeforeInitialize = (values: QuoteDatabseValues): QuoteFormValues => ({
  ...values,
  raw: values.raw || "",
  season: values.season.toString() || "",
  episode: values.episode.toString() || "",
  characters: values.characters.map(({ _id, characterName }) => ({
    label: characterName,
    value: _id,
  })),
  mainCharacter: values.mainCharacter
    ? {
        label: values.mainCharacter.characterName,
        value: values.mainCharacter._id,
      }
    : undefined,
  show: values.show ? { label: values.show.name, value: values.show._id } : undefined,
});

type QuoteValuesToSubmit = Pick<Quote, "raw" | "season" | "episode"> & {
  characters: string[];
  mainCharacter: string;
  show: string;
  markup: string;
};

const modifyBeforeSave = (values: QuoteFormValues): QuoteValuesToSubmit => ({
  ...values,
  season: parseInt(values.season, 10),
  episode: parseInt(values.episode, 10),
  characters: values.characters.map(({ value }) => value),
  mainCharacter: values.mainCharacter.value,
  show: values.show.value,
  markup: markddownConverter.makeHtml(values.raw),
});

export const AddEditQuote = ({ color = "light", match, history }) => {
  const [quoteValue, setQuoteValue] = useState(null);
  const client = useApolloClient();
  const hookFormMethods = useForm<QuoteFormValues>();

  useQuoteOneQuery({
    variables: { filter: { _id: match.params.quoteId } },
    onCompleted: (res) => {
      setQuoteValue(res?.quoteOne);
      hookFormMethods.reset(modifyBeforeInitialize(res?.quoteOne as any));
    },
  });

  const [createQuote, { loading: creatingQuote }] = useQuoteCreateOneMutation();
  const [updateQuote, { loading: updatingQuote }] = useQuoteUpdateOneMutation();

  const isEditForm = isNotEmptyObject(quoteValue);
  const isLoading = creatingQuote || updatingQuote;

  const onSubmit = async (values: QuoteFormValues) => {
    const modifiedValues = modifyBeforeSave(values);
    const mutation = isEditForm ? updateQuote : createQuote;
    const res = await mutation({
      variables: { record: modifiedValues as any, filter: isEditForm ? { _id: quoteValue._id } : undefined },
      refetchQueries: [
        { query: QUOTES_MANY_QUERY, variables: { skip: 0, limit: 20 } },
        { query: QUOTES_ONE_QUERY, variables: { filter: { _id: match.params.quoteId } } },
      ],
      awaitRefetchQueries: true,
    });

    if (isNotEmptyObject(res?.errors)) {
      alert("Something went wrong!");
    } else {
      alert("Saved Successfully!");
      history.push("/quotes");
    }
  };

  return (
    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-200 border-0 rounded-lg shadow-lg">
      <div className="px-6 py-6 mb-0 bg-white rounded-t">
        <div className="flex justify-between text-center">
          <h6 className="text-xl font-bold text-gray-800">Quote {isEditForm ? "Edit" : "Add"}</h6>
          <button
            className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
            type="button"
            onClick={hookFormMethods.handleSubmit(onSubmit)}
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
        <FormProvider {...hookFormMethods}>
          <form
            onSubmit={hookFormMethods.handleSubmit(onSubmit)}
            onError={(errors) => {
              console.log("errors", errors);
            }}
          >
            <h6 className="mt-3 mb-6 text-sm font-bold text-gray-500 uppercase">Quote Text</h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <RichTextArea name="raw" label="Raw Quote" required />
              </div>
            </div>

            <hr className="mt-6 border-gray-400 border-b-1" />

            <h6 className="mt-3 mb-6 text-sm font-bold text-gray-500 uppercase">Quote Text</h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <Input name="season" label="Season" required min={1} />
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <Input name="episode" label="Episode" required min={1} />
              </div>
            </div>
            <hr className="mt-6 border-gray-400 border-b-1" />

            <h6 className="mt-3 mb-6 text-sm font-bold text-gray-500 uppercase">Quote Characters</h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-4/12">
                <AsyncSelectField name="show" label="Show" required fetchOptions={({ query }) => fetchShows(client as any, query)} />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <AsyncSelectField name="mainCharacter" label="Main Character" required fetchOptions={({ query }) => fetchCharacters(client as any, query)} />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <AsyncSelectField name="characters" label="Characters" required isMulti fetchOptions={({ query }) => fetchCharacters(client as any, query)} />
              </div>
            </div>
            <button
              className="px-4 py-2 mr-1 text-base font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
              type="submit"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
