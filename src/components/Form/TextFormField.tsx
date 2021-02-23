import React, { FC } from "react";
import { FormField } from "./FormField";
import { TextInput } from "../TextInput";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

export const TextFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </FormField>
  );
};
