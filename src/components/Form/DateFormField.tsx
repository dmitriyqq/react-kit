import { FormField } from "./FormField";
import React, { FC } from "react";
import { DateInput } from "../DateInput";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  value: Date | null;
  onChange: (name: string, value: Date | null) => void;
  disabled?: boolean;
  errorMessage?: string | null;
  initialValue?: Date | null;
}

export const DateFormField: FC<Props> = ({
  label,
  name,
  value,
  icon,
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
    <FormField label={label} errorMessage={errorMessage} icon={icon}>
      <DateInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormField>
  );
};
