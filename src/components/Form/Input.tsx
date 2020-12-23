import React from "react";
import { useFormContext } from "react-hook-form";

import { ErrorMessage } from "./ErrorMessage";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  helpText?: string;
  type?: "text" | "number" | "date";
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number | string;
  max?: number;
  defaultValue?: string;
  disabled?: boolean;
  pattern?: { value: RegExp; message: string };
}

export const Input = ({
  type = "text",
  name,
  label,
  required,
  min,
  max,
  minLength,
  maxLength,
  pattern,
  defaultValue,
  placeholder,
  helpText,
  disabled = false,
}: Props) => {
  const { register } = useFormContext();
  return (
    <div className="relative w-full mb-3">
      <label
        className="block mb-2 text-xs font-bold text-gray-700 uppercase"
        htmlFor="grid-password"
      >
        {label}&nbsp;
        {required && <span className="ml-2 text-sm text-red-400">&#42;</span>}
      </label>
      <input
        className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 transition-all duration-150 ease-linear bg-white rounded shadow focus:outline-none focus:shadow-outline"
        ref={register({
          required,
          minLength,
          maxLength,
          min,
          max,
          pattern,
        })}
        {...{ type, name, label, defaultValue, disabled, placeholder }}
      />
      <ErrorMessage
        {...{ label, name, minLength, maxLength, min, max }}
        render={(message) => {
          return <p className="pt-2 text-xs text-red-400">{message}</p>;
        }}
      />
    </div>
  );
};

export default Input;
