import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { FormProvider, useForm } from "react-hook-form";

import { Input } from "components/Form/Input";
import { TextArea } from "components/Form/TextArea";
import { InputFieldArray } from "components/Form/InputFieldArray";
import { GET_SHOW_DATA_FROM_IMDB_QUERY, SHOW_ONE_QUERY } from "./gql/character.gql";
import { useShowCreateOneMutation, useShowUpdateOneMutation} from "generated/apolloHooks";
import { isNotEmptyObject } from "utils/commonHelpers";
import { SHOWS_MANY_QUERY } from "./gql/show.gql";

interface ShowFormValues {
  IMDBShowCode: string;
  name: string;
  description: string;
  genre: string;
  type: string;
  year: string;
  coverPicture: string;
  rating: string;
  seasons: string;
  episodes: Array<{ value: string }>;
  imdbLink: string;
}

interface ShowDatabaseValues {
  name: string;
  description: string;
  genre: string[];
  type: string;
  year: number;
  coverPicture: string;
  rating: number;
  seasons: number;
  episodes: Array<{ season: number; episodes: number }>;
  imdbLink: string;
  IMDBShowCode: undefined,
}

const modifyBeforeSave = (values: ShowFormValues): ShowDatabaseValues => ({
  ...values,
  genre: values.genre.split(","),
  year: parseInt(values.year, 10),
  seasons: values.seasons ? parseInt(values.seasons, 10) : undefined,
  rating: values.rating ? parseFloat(values.rating) : undefined,
  episodes: values.episodes ? values.episodes.map(({ value }, i) => ({ season: i + 1, episodes: parseInt(value) })) : undefined,
  IMDBShowCode: undefined,
});

const modifyBeforeInitialize = (values: ShowDatabaseValues): ShowFormValues => ({
  ...values,
  genre: values.genre.join(","),
  year: values.year.toString(),
  rating: values.rating ? values.rating.toString() : undefined,
  seasons: values.seasons ? values.seasons.toString() : undefined,
  IMDBShowCode: undefined,
  episodes: values.episodes ? values.episodes.map((ep) => ({ value: ep.episodes.toString() })) : undefined,
});


const parseShowId = (paramsString: string): string => {
  const searchParams = new URLSearchParams(paramsString);
  return searchParams.get("showId");
};

export const AddEditShow = ({history}) => {
  const showId = parseShowId(history.location.search);
  const client = useApolloClient();
  const hookFormMethods = useForm<ShowFormValues>();
  const [showValue, setShowValue] = useState(null)
  const [createShow, { loading: creatingShow }] = useShowCreateOneMutation();
  const [updateShow, { loading: updatingShow }] = useShowUpdateOneMutation();

  useEffect(() => {
    if(showId) {
      client.query({query: SHOW_ONE_QUERY, variables: {filter: {_id: showId}}}).then(res => {
        const modifiedValue = modifyBeforeInitialize(res.data.showOne as ShowDatabaseValues);
        setShowValue(modifiedValue);
        hookFormMethods.reset(modifiedValue);
      })
    }
  }, []);

  const { watch } = hookFormMethods;

  const { IMDBShowCode, coverPicture } = watch(["IMDBShowCode", "coverPicture"]);

  const isEditForm = isNotEmptyObject(showValue);
  const isLoading = creatingShow || updatingShow;

  const onSubmit = async (values: ShowFormValues) => {
    const modifiedValues = modifyBeforeSave(values);
    const mutation = isEditForm ? updateShow : createShow;
    const res = await mutation({
      variables: { record: modifiedValues as any, filter: isEditForm ? { _id: showValue._id } : undefined },
      refetchQueries: [
        { query: SHOWS_MANY_QUERY, variables: { skip: 0, limit: 20 } },
        { query: SHOW_ONE_QUERY, variables: { filter: { _id: showId } } },
      ],
      awaitRefetchQueries: true,
    });

    if (isNotEmptyObject(res?.errors)) {
      alert("Something went wrong!");
    } else {
      alert("Saved Successfully!");
      history.push("/shows");
    }
  };

  const fetchDetailsFromImdb = async () => {
    client.query({ query: GET_SHOW_DATA_FROM_IMDB_QUERY, variables: { IMDBShowCode } }).then((res) => {
      const data = res.data.getShowDataFromIMDB;
      const modifiedValues = modifyBeforeInitialize(data);
      hookFormMethods.reset(modifiedValues);
    });
  };

  return (
    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-200 border-0 rounded-lg shadow-lg">
      <div className="px-6 py-6 mb-0 bg-white rounded-t">
        <div className="flex justify-between text-center">
          <h6 className="text-xl font-bold text-gray-800">Show {isEditForm ? "Edit" : "Add"}</h6>
          <button
            className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
            type="button"
            disabled={!IMDBShowCode}
            onClick={fetchDetailsFromImdb}
          >
            Fetch From IMDb
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
            <h6 className="mt-3 mb-6 text-sm font-bold text-gray-500 uppercase">Show Details</h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-4/12">
                <Input name="IMDBShowCode" label="IMDBShowCode" />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <Input name="name" label="Name" required />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <Input name="type" label="Type" required />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <TextArea name="description" label="Description" required />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-4/12">
                <Input name="rating" label="Rating" required />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <Input name="year" label="Year" required />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <Input name="genre" label="Genre" required />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <InputFieldArray name="episodes" label="Season" miniumNumberOfFields={1} required />
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <Input name="imdbLink" label="IMDB Link" required />
              </div>
            </div>

            <div className="flex items-center flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <Input name="coverPicture" label="Cover Picture" required />
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <img className="w-32 h-48 rounded-lg" src={coverPicture} alt="" />
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
