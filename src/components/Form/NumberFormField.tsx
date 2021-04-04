import React, { FC } from "react";
import { FormField } from "./FormField";
import { NumberInput } from "../NumberInput";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: number;
  onChange: (name: string, value: number) => void;
  disabled?: boolean;
  errorMessage?: string | null;
}

export const NumberFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  errorMessage,
}) => {
  const handleChange = (value: number) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage}>
      <NumberInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormField>
  );
};
