import React from "react";
import { FormField } from "./FormField";
import { Select, SelectOption } from "../Select";

interface Props<V> {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  value: SelectOption<V> | null;
  onChange: (name: string, value: SelectOption<V> | null) => void;
  options: SelectOption<V>[];
  disabled?: boolean;
  errorMessage?: string | null;
  optional?: boolean;
}

export const SelectFormField = <V extends unknown>({
  label,
  name,
  onChange,
  placeholder,
  options,
  disabled,
  errorMessage,
  optional,
  icon,
  value,
}: Props<V>) => {
  const handleChange = (option: SelectOption<V> | null) => {
    if (onChange) {
      onChange(name, option ?? null);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage} icon={icon}>
      <Select
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        options={options}
        disabled={disabled}
        allowNull={optional === true}
      />
    </FormField>
  );
};
