import React, { FC, useState } from "react";
import { TextInput } from "./TextInput";
import { ThemeProps } from "../themes/theme";

export interface Props extends ThemeProps {
  value: number;
  onChange: (value: number) => void;
}

export const NumberInput: FC<Props> = ({ theme, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value?.toString() ?? "");
  const handleChange = (newValue: string) => {
    const numValue = Number(newValue);
    onChange(isNaN(numValue) ? 0 : numValue);
    setInputValue(newValue);
  };

  return <TextInput theme={theme} value={inputValue} onChange={handleChange} />;
};
