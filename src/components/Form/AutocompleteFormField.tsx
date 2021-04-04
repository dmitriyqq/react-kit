import React, { FC } from "react";
import { FormField } from "./FormField";
import { Autocomplete } from "../Autocomplete";
import { SelectOption } from "../Select";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: string | null) => void;
  optionsProvider: (query: string) => SelectOption<string>[];
  disabled?: boolean;
  errorMessage?: string | null;
}

export const AutocompleteFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  disabled,
  optionsProvider,
  errorMessage,
}: Props) => {
  const handleChange = (value: SelectOption<string> | null) => {
    if (onChange && value) {
      onChange(name, value.value);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage}>
      <Autocomplete<string>
        value={value}
        onChange={handleChange}
        disabled={disabled}
        optionsProvider={optionsProvider}
        name={name}
      />
    </FormField>
  );
};
