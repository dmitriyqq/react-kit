import React from "react";
import { FormField } from "./FormField";
import { SelectOption } from "../Select";
import { MultipleAutocomplete } from "../MultipleAutocomplete";
import { OptionsProvider } from "../Autocomplete";

interface Props<T> {
  name: string;
  label?: string;
  icon?: string;
  placeholder?: string;
  value: SelectOption<T>[];
  onChange: (name: string, value: SelectOption<T>[]) => void;
  optionsProvider: OptionsProvider<T>;
  disabled?: boolean;
  errorMessage?: string | null;
}

export const MultipleAutocompleteFormField = <T extends unknown>({
  label,
  name,
  value,
  icon,
  onChange,
  disabled,
  optionsProvider,
  errorMessage,
  placeholder,
}: Props<T>) => {
  const handleChange = (value: SelectOption<T>[]) => {
    if (onChange && value) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage} icon={icon}>
      <MultipleAutocomplete<T>
        value={value}
        onChange={handleChange}
        disabled={disabled}
        optionsProvider={optionsProvider}
        name={name}
        placeholder={placeholder}
      />
    </FormField>
  );
};
