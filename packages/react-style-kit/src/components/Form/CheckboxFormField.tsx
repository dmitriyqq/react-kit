import React, { FC } from "react";
import { FormField } from "./FormField";
import { Checkbox } from "../Checkbox";

interface Props {
  name: string;
  label?: string;
  icon?: string;
  placeholder?: string;
  value: boolean;
  onChange: (name: string, value: boolean) => void;
  disabled?: boolean;
  errorMessage?: string | null;
  initialValue?: boolean;
}

export const CheckboxFormField: FC<Props> = ({
  label,
  name,
  value,
  icon,
  onChange,
  disabled,
  errorMessage,
  initialValue,
}) => {
  const handleChange = (value: boolean) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage} icon={icon}>
      <Checkbox
        value={value ?? initialValue ?? false}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormField>
  );
};
