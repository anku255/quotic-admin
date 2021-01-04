import React from "react";
import { useApolloClient } from "@apollo/client";
import { Input } from "components/Form/Input";
import { FormProvider, useFieldArray, useForm, useFormContext } from "react-hook-form";
import { GET_CHARACTERS_FROM_IMDB_QUERY } from "./gql/character.gql";
import { useCharacterCreateManyMutation } from "generated/apolloHooks";
import { isNotEmptyObject } from "utils/commonHelpers";

interface ICharacter {
  characterName: string;
  realName: string;
  dob: string;
  coverPicture: string;
  imdbLink: string;
  bioMarkup: string;
}

interface CharactersFormValues {
  IMDBShowCode: string;
  type: string;
  characters: ICharacter[];
}

const parseShowId = (paramsString: string): string => {
  const searchParams = new URLSearchParams(paramsString);
  return searchParams.get("showId");
};

const modifyBeforeSave = (characters: ICharacter[], showId: string) => {
  return characters.map((character) => ({ ...character, shows: [showId], dob: character.dob ? character.dob : undefined }));
};

export const AddCharacters = ({ history }) => {
  const showId = parseShowId(history.location.search);
  const client = useApolloClient();
  const hookFormMethods = useForm<CharactersFormValues>();
  const [createCharacters, { loading: creatingCharacters }] = useCharacterCreateManyMutation();

  const { watch } = hookFormMethods;
  const { IMDBShowCode, type } = watch(["IMDBShowCode", "type"]);

  const isLoading = creatingCharacters;

  const fetchDetailsFromImdb = async () => {
    client.query({ query: GET_CHARACTERS_FROM_IMDB_QUERY, variables: { IMDBShowCode, type } }).then((res) => {
      const data = res.data.getCharactersFromIMDB;
      hookFormMethods.reset({ IMDBShowCode, type, characters: data as any });
    });
  };

  const onSubmit = async (values: CharactersFormValues) => {
    const modifiedValues = modifyBeforeSave(values.characters, showId);
    const res = await createCharacters({ variables: { characters: modifiedValues } });
    if (isNotEmptyObject(res?.errors)) {
      alert("Something went wrong!");
    } else {
      alert("Saved Successfully!");
      history.push("/shows");
    }
  };

  return (
    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-200 border-0 rounded-lg shadow-lg">
      <div className="px-6 py-6 mb-0 bg-white rounded-t">
        <div className="flex justify-between text-center">
          <h6 className="text-xl font-bold text-gray-800">Add Characters</h6>
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
              <div className="w-full px-4 lg:w-6/12">
                <Input name="IMDBShowCode" label="IMDBShowCode" />
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <Input name="type" label="Type" />
              </div>
            </div>

            <CharacterForm name="characters" label="Character" />

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

function CharacterForm({ name, label }) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div>
      {fields.map((item, index) => {
        return (
          <div key={item.id} className="relative">
            <div className="flex flex-wrap mb-4">
              <div className="w-full px-4 lg:w-4/12">
                <Input name={`${name}.${index}.characterName`} label={` ${label} ${index + 1} Character Name`} defaultValue={item.characterName} required />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <Input name={`${name}.${index}.realName`} label={` ${label} ${index + 1} Real Name`} defaultValue={item.realName} required />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <Input name={`${name}.${index}.dob`} label={` ${label} ${index + 1} Date of Birth`} defaultValue={item.dob} />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <Input name={`${name}.${index}.imdbLink`} label={` ${label} ${index + 1} IMDB Link`} defaultValue={item.imdbLink} required />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <Input name={`${name}.${index}.coverPicture`} label={` ${label} ${index + 1} Cover Picture`} defaultValue={item.coverPicture} required />
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <Input name={`${name}.${index}.bioMarkup`} label={` ${label} ${index + 1} Bio`} defaultValue={item.bioMarkup} required />
              </div>
            </div>

            <div onClick={() => remove(index)} className="cursor-pointer absolute text-gray-800" style={{ top: 0, right: 0 }}>
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        );
      })}
      <button
        className="px-2 py-2 mr-1 mb-2 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
        type="button"
        onClick={() => append({ characterName: "", realName: "", dob: "", imdbLink: "", coverPicture: "", bioMarkup: "" })}
      >
        Add Character
      </button>
    </div>
  );
}
