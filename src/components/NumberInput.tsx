import React, { FC } from "react";
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
  return (
    <TextInput
      disabled={disabled}
      placeholder={placeholder}
      original={original?.toString()}
      value={value as never}
      onChange={onChange as never}
    />
  );
};
