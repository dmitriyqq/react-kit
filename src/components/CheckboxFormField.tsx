import React, { FC } from "react";
import { FormField, FormFieldProps } from "./FormField";
import { Checkbox } from "./Checkbox";

interface Props extends FormFieldProps {
  value: boolean;
  onChange: (name: string, value: boolean) => void;
}

export const CheckboxFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  theme,
}) => {
  const handleChange = (value: boolean) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} theme={theme}>
      <Checkbox value={value} onChange={handleChange} theme={theme} />
    </FormField>
  );
};
