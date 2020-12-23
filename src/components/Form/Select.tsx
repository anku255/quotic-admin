import React, { useState } from "react";
import Select from "react-select";
import { Controller, useFormContext } from "react-hook-form";

import { ErrorMessage } from "./ErrorMessage";

interface Props {
  name: string;
  label: string;
  options: Array<{ label: string; value: string; [key: string]: unknown }>;
  placeholder?: string;
  required?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  isMulti?: boolean;
}

export const SelectField = ({
  name,
  label,
  options,
  required,
  placeholder,
  isClearable,
  isDisabled,
  isMulti = false,
}: Props) => {
  const { control } = useFormContext();

  return (
    <div className="relative w-full mb-3">
      <label
        className="block mb-2 text-xs font-bold text-gray-700 uppercase"
        htmlFor="grid-password"
      >
        {label}&nbsp;
        {required && <span className="ml-2 text-sm text-red-400">&#42;</span>}
      </label>
      <Controller
        as={<Select />}
        placeholder={placeholder}
        name={name}
        control={control}
        defaultValue=""
        options={options}
        classNamePrefix="react-select"
        className="react-select"
        isClearable={isClearable}
        isDisabled={isDisabled}
        isMulti={isMulti}
        rules={{ required }}
      />
      <ErrorMessage
        {...{ label, name }}
        render={(message) => {
          return <p className="pt-2 text-xs text-red-400">{message}</p>;
        }}
      />
    </div>
  );
};

interface AsyncSelectFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  isMulti?: boolean;
  fetchOptions?: ({ query }: { query: string }) => Promise<Array<unknown>>;
}

export const AsyncSelectField = ({
  name,
  label,
  fetchOptions,
  required = false,
  placeholder,
  isClearable,
  isDisabled,
  isMulti,
}: AsyncSelectFieldProps) => {
  const [selectOptions, setSelectOptions] = useState([]);
  const { control } = useFormContext();

  return (
    <div className="relative w-full mb-3">
      <label
        className="block mb-2 text-xs font-bold text-gray-700 uppercase"
        htmlFor="grid-password"
      >
        {label}&nbsp;
        {required && <span className="ml-2 text-sm text-red-400">&#42;</span>}
      </label>
      <Controller
        as={<Select />}
        placeholder={placeholder}
        name={name}
        control={control}
        defaultValue=""
        onInputChange={(query) => {
          if (fetchOptions)
            fetchOptions({ query }).then((options) =>
              setSelectOptions(options)
            );
        }}
        options={selectOptions}
        classNamePrefix="react-select"
        isClearable={isClearable}
        isDisabled={isDisabled}
        className="react-select"
        isMulti={isMulti}
        rules={{ required }}
      />
      <ErrorMessage
        {...{ label, name }}
        render={(message) => {
          return <p className="pt-2 text-xs text-red-400">{message}</p>;
        }}
      />
    </div>
  );
};

export default SelectField;
