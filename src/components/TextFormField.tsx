import React, { FC } from "react";
import { FormField, FormFieldProps } from "./FormField";
import { TextInput } from "./TextInput";

interface Props extends FormFieldProps {
  value: string;
  onChange: (name: string, value: string) => void;
}

export const TextFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  theme,
}) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} theme={theme}>
      <TextInput value={value} onChange={handleChange} theme={theme} />
    </FormField>
  );
};
