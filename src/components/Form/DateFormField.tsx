import { FormField } from "./FormField";
import React, { FC } from "react";
import { DateInput } from "../DateInput";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: Date;
  onChange: (name: string, value: Date | null) => void;
  disabled?: boolean;
  errorMessage?: string | null;
}

export const DateFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  errorMessage,
}) => {
  const handleChange = (value: Date | null) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage}>
      <DateInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormField>
  );
};
