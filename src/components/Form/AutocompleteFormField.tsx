import React from "react";
import { FormField } from "./FormField";
import { Autocomplete, OptionsProvider } from "../Autocomplete";
import { SelectOption } from "../Select";

interface Props<T> {
  name: string;
  label?: string;
  icon?: string;
  placeholder?: string;
  value: SelectOption<T> | null;
  onChange: (name: string, value: SelectOption<T> | null) => void;
  optionsProvider: OptionsProvider<T>;
  disabled?: boolean;
  errorMessage?: string | null;
}

export const AutocompleteFormField = <T extends unknown>({
  label,
  name,
  icon,
  onChange,
  disabled,
  optionsProvider,
  placeholder,
  errorMessage,
}: Props<T>) => {
  const handleChange = (value: SelectOption<T> | null) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage} icon={icon}>
      <Autocomplete<T>
        onChange={handleChange}
        disabled={disabled}
        optionsProvider={optionsProvider}
        placeholder={placeholder}
        name={name}
      />
    </FormField>
  );
};
