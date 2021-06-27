import React from "react";
import { ChangeEvent, FC } from "react";

interface Props {
  value: string;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}

export const ColorPicker: FC<Props> = ({ value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, event);
  };

  return <input type="color" value={value} onChange={handleChange} />;
};
