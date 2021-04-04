import React, { FC } from "react";
import { FormField } from "./FormField";
import { Checkbox } from "../Checkbox";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: boolean;
  onChange: (name: string, value: boolean) => void;
  disabled?: boolean;
  errorMessage?: string | null;
}

export const CheckboxFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  disabled,
  errorMessage,
}) => {
  const handleChange = (value: boolean) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage}>
      <Checkbox value={value} onChange={handleChange} disabled={disabled} />
    </FormField>
  );
};
