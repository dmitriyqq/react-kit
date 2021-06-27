import React, { FC } from "react";
import { FormField } from "./FormField";
import { TextInput } from "../TextInput";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  disabled?: boolean;
  errorMessage?: string | null;
  initialValue?: string;
}

export const TextFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  errorMessage,
  initialValue,
}) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage}>
      <TextInput
        placeholder={placeholder}
        value={value ?? initialValue ?? ""}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormField>
  );
};
