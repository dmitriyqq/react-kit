import { BaseTextInput } from "./TextInput";
import { ChangeEventHandler, FC } from "react";
import React from "react";

export interface Props {
  value?: Date | null;
  onChange: (value: Date | null) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const DateInput: FC<Props> = ({
  disabled,
  value,
  onChange,
  placeholder,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value) {
      onChange(new Date(value));
    } else {
      onChange(null);
    }
  };

  let inputValue = null;
  if (value) {
    const yearString = value.getFullYear().toString().padStart(4, "0");
    const monthString = (value.getMonth() + 1).toString().padStart(2, "0");
    const dayString = value.getDate().toString().padStart(2, "0");
    inputValue = `${yearString}-${monthString}-${dayString}`;
  }

  return (
    <BaseTextInput
      type="date"
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
      value={inputValue ?? ""}
    />
  );
};
