import React, { useState } from "react";
import { FormField } from "./FormField";
import { MultipleSelect } from "../MultipleSelect";
import { SelectOption } from "../Select";

interface Props<V> {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  value: SelectOption<V>[];
  onChange: (name: string, value: SelectOption<V>[]) => void;
  options: SelectOption<V>[];
  disabled?: boolean;
  errorMessage?: string | null;
}

export const MultipleSelectFormField = <V extends unknown>({
  label,
  name,
  value,
  onChange,
  placeholder,
  options,
  disabled,
  errorMessage,
}: Props<V>) => {
  const handleChange = (options: SelectOption<V>[]) => {
    if (onChange) {
      onChange(name, options);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage}>
      <MultipleSelect
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        options={options}
        disabled={disabled}
      />
    </FormField>
  );
};
