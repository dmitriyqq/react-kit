import React, { FC, useState } from "react";
import { TextInput } from "./TextInput";

export interface Props {
  value: number;
  disabled?: boolean;
  placeholder?: string;
  original?: number;
  onUpdate?: () => void;
  onChange: (value: number) => void;
}

export const NumberInput: FC<Props> = ({
  value,
  onChange,
  placeholder,
  original,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState(value?.toString() ?? "");
  const handleChange = (newValue: string) => {
    const numValue = Number(newValue);
    onChange(isNaN(numValue) ? 0 : numValue);
    setInputValue(newValue);
  };

  return (
    <TextInput
      disabled={disabled}
      placeholder={placeholder}
      original={original?.toString()}
      value={inputValue}
      onChange={handleChange}
    />
  );
};
