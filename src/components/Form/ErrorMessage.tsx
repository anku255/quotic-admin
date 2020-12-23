import { FieldError, useFormContext } from "react-hook-form";
import { accessDeepObject } from "utils/commonHelpers";

interface ErrorMessageProps {
  render: (message: string) => JSX.Element;
  minLength?: number;
  maxLength?: number;
  min?: number | string;
  max?: number;
  name: string;
  label: string;
}

export const ErrorMessage = ({
  render,
  name,
  label,
  minLength,
  maxLength,
  min,
  max,
}: ErrorMessageProps) => {
  const { errors } = useFormContext();
  const error: FieldError = accessDeepObject(name, errors) as FieldError;

  if (!error) return null;

  const { type, message } = error;

  if (message) return render(message);

  switch (type) {
    case "required":
      return render(`${label} is Required`);
    case "minLength":
      return render(`${label} should have minimum length of ${minLength}`);
    case "maxLength":
      return render(`${label} should have maximum length of ${maxLength}`);
    case "min":
      return render(`${label} should be at least ${min}`);
    case "max":
      return render(`${label} should not exceed ${max}`);
    default:
      return render(`Error of type ${type}`);
  }
};
