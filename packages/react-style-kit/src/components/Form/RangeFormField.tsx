import React, { FC } from "react";
import { FormField } from "./FormField";
import { RangeInput } from "../RangeInput";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  value: number;
  onChange: (name: string, value: number) => void;
  disabled?: boolean;
  errorMessage?: string | null;
  initialValue?: string;
  min?: number;
  max?: number;
  step?: number;
}

export const RangeFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  errorMessage,
  initialValue,
  min,
  max,
  step,
}) => {
  const handleChange = (value: number) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage}>
      <RangeInput
        placeholder={placeholder}
        value={value ?? initialValue ?? ""}
        onChange={handleChange}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
      />
    </FormField>
  );
};
