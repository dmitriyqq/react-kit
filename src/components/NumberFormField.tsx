import React, { FC } from "react";
import { FormField, FormFieldProps } from "./FormField";
import { NumberInput } from "./NumberInput";

interface Props extends FormFieldProps {
  value: number;
  onChange: (name: string, value: number) => void;
}

export const NumberFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  theme,
}) => {
  const handleChange = (value: number) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} theme={theme}>
      <NumberInput value={value} onChange={handleChange} theme={theme} />
    </FormField>
  );
};
