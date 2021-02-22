import React, { FC } from "react";
import { FormField } from "./FormField";
import { NumberInput } from "./NumberInput";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: number;
  onChange: (name: string, value: number) => void;
}

export const NumberFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (value: number) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label}>
      <NumberInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </FormField>
  );
};
