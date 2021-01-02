import React, { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "./Input";
import If from "components/If";

interface Props {
  name: string;
  label: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  miniumNumberOfFields?: number;
  maximumNumberOfFields?: number;
}

export const InputFieldArray = ({ name, label, miniumNumberOfFields, maximumNumberOfFields, required, minLength, maxLength, disabled }: Props) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  useEffect(() => {
    if (miniumNumberOfFields && fields.length === 0) {
      for (let i = 0; i < miniumNumberOfFields; i += 1) {
        append({ value: "" });
      }
    }
  }, []);

  return (
    <div>
      {fields.map((item, index) => {
        return (
          <div key={item.id} className="relative">
            <Input
              name={`${name}.${index}.value`}
              label={` ${label} ${index + 1}`}
              defaultValue={item.value} // make sure to set up defaultValue
              {...{ required, minLength, maxLength, disabled }}
            />
            <If
              condition={index + 1 > miniumNumberOfFields}
              then={
                <div onClick={() => remove(index)} className="cursor-pointer absolute text-gray-800" style={{top: 0, right: 0}}>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              }
            />
          </div>
        );
      })}

      <If
        condition={!maximumNumberOfFields || fields.length < maximumNumberOfFields}
        then={
          <button
            className="px-2 py-2 mr-1 mb-2 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
            type="button"
            onClick={() => append({ value: "" })}
          >
            Add {label}
          </button>
        }
      />
    </div>
  );
};
