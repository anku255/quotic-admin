import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import Showdown from "showdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import { ErrorMessage } from "./ErrorMessage";

export const getHtmlMarkdownConverter = ({ openLinksInNewWindow }: { openLinksInNewWindow?: boolean }) => {
  return new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
    openLinksInNewWindow,
  });
};

const HtmlMarkdownConverter = getHtmlMarkdownConverter({
  openLinksInNewWindow: true,
});

interface Props {
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  isClickDisabled?: boolean;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
}

export const RichTextArea = ({ name, label, defaultValue, required, minLength, maxLength, disabled }: Props) => {
  const { control } = useFormContext();
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");

  return (
    <div className="relative w-full mb-3">
      <label className="block mb-2 text-xs font-bold text-gray-700 uppercase" htmlFor="grid-password">
        {label}&nbsp;
        {required && <span className="ml-2 text-sm text-red-400">&#42;</span>}
      </label>
      <Controller
        as={<ReactMde />}
        defaultValue={defaultValue}
        name={name}
        control={control}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        disabled={disabled}
        rules={{ required, minLength, maxLength }}
        generateMarkdownPreview={(markdown) => Promise.resolve(HtmlMarkdownConverter.makeHtml(markdown))}
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
