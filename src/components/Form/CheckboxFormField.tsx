import React, { FC } from "react";
import { FormField } from "./FormField";
import { Checkbox } from "../Checkbox";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: boolean;
  onChange: (name: string, value: boolean) => void;
}

export const CheckboxFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
}) => {
  const handleChange = (value: boolean) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label}>
      <Checkbox value={value} onChange={handleChange} />
    </FormField>
  );
};
