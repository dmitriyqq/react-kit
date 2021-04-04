import { TextFormField } from "./TextFormField";
import React, { FC } from "react";
import { FieldItemDataType } from "../../model/FieldItemData";
import { NumberFormField } from "./NumberFormField";
import { CheckboxFormField } from "./CheckboxFormField";
import { SelectFormField } from "./SelectFormField";
import { SelectOption } from "../Select";
import { OptionsProvider } from "../Autocomplete";
import { AutocompleteFormField } from "./AutocompleteFormField";
import { DateFormField } from "./DateFormField";

interface DataFormFieldProps {
  name: string;
  label: string;
  disabled?: boolean;
  value: any;
  type: FieldItemDataType;
  options?: SelectOption<any>[];
  placeholder?: string;
  optionsProvider?: OptionsProvider<string>;
  onChange: (fieldName: string, value: any) => void;
  errorMessage?: string | null;
}

export const DataFormField: FC<DataFormFieldProps> = ({
  name,
  label,
  type,
  onChange,
  value,
  placeholder,
  options,
  optionsProvider,
  disabled,
  errorMessage,
}) => {
  if (type === "text") {
    return (
      <TextFormField
        label={label}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "date") {
    return (
      <DateFormField
        label={label}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "number") {
    return (
      <NumberFormField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        label={label}
        name={name}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "bool") {
    return (
      <CheckboxFormField
        value={value}
        onChange={onChange}
        label={label}
        name={name}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "select") {
    return (
      <SelectFormField
        value={value}
        onChange={onChange}
        label={label}
        name={name}
        placeholder={placeholder}
        options={options ?? []}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "autocomplete" && optionsProvider !== undefined) {
    return (
      <AutocompleteFormField
        value={value}
        onChange={onChange}
        label={label}
        name={name}
        placeholder={placeholder}
        optionsProvider={optionsProvider}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  return null;
};
