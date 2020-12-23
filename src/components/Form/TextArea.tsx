/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useFormContext } from "react-hook-form";

import { ErrorMessage } from "./ErrorMessage";

interface Props {
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
}

export const TextArea = ({
  name,
  label,
  required,
  minLength,
  maxLength,
  disabled,
}: Props) => {
  const { register } = useFormContext();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="">
          {label}{" "}
          {required && <span className="ml-2 text-sm text-red-500">&#42;</span>}
        </label>
      )}
      <textarea
        className="block w-full px-4 py-2 leading-normal bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
        ref={register({ required, minLength, maxLength })}
        {...{ name, label, disabled }}
      />
      <ErrorMessage
        {...{ label, name, minLength, maxLength }}
        render={(message) => {
          return <p className="pt-2 text-xs text-red-400">{message}</p>;
        }}
      />
    </div>
  );
};

export default TextArea;
