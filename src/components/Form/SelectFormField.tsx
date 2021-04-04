import React, { useState } from "react";
import { FormField } from "./FormField";
import { Select, SelectOption } from "../Select";

interface Props<V> {
  name: string;
  label?: string;
  placeholder?: string;
  value: V | null;
  onChange: (name: string, value: V | null) => void;
  options: SelectOption<V>[];
  disabled?: boolean;
  errorMessage?: string | null;
}

export const SelectFormField = <V extends unknown>({
  label,
  name,
  value,
  onChange,
  placeholder,
  options,
  disabled,
  errorMessage,
}: Props<V>) => {
  const [internalValue, setInternalValue] = useState<SelectOption<V> | null>(
    options.find((v) => JSON.stringify(v.value) === JSON.stringify(value)) ??
      null
  );

  const handleChange = (option: SelectOption<V> | null) => {
    if (onChange) {
      setInternalValue(() => option);
      onChange(name, option?.value ?? null);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage}>
      <Select
        placeholder={placeholder}
        value={internalValue}
        onChange={handleChange}
        options={options}
        disabled={disabled}
      />
    </FormField>
  );
};
