import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { styled } from "../index";
import {
  getBoxShadow,
  getMainBackgroundColor,
  getPrimaryMainColor,
  getSecondaryBackgroundColor,
  ThemeProps,
} from "../themes/theme";

export interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "min" | "max" | "step" | "onChange"
  > {
  value: number;
  onChange: (value: number, event: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
}

const StyledInput = styled.input`
  width: 100%;
  // background-color: ${getPrimaryMainColor};
  height: ${(props: ThemeProps) => `${2 * props.theme.heightUnit}px`};
  color: ${getPrimaryMainColor};
  &::-webkit-slider-runnable-track {
    background: ${getPrimaryMainColor};
    border-radius: 50%;
    border: 1px solid black;
  }

  &::-webkit-slider-thumb {
    background: ${getPrimaryMainColor};
    border-radius: 50%;
    border: 1px solid black;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    border: 1px solid black;
    background-color: ${getSecondaryBackgroundColor};
  }
  &::-moz-range-thumb {
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${getPrimaryMainColor};
    box-shadow: ${getBoxShadow};
  }
`;

export const RangeInput: FC<Props> = ({
  value,
  onChange,
  max = 10,
  min = 1,
  step = 0.1,
  ...rest
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value as never, event);
  };

  return (
    <StyledInput
      {...rest}
      type="range"
      value={value}
      onChange={handleChange}
      max={max}
      min={min}
      step={step}
    />
  );
};
