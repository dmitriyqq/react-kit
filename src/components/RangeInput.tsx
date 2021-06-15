import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import {
  ComponentProps,
  getHeightUnit,
  getMainThemeBackgroundColorShade,
  getMainThemeTextColorShade,
  getThemeBorder,
  getThemeBorderRadius,
  getWidthUnit,
  styled,
} from "../index";
import { ThemeProps } from "../themes";
import { getBoxShadow2 } from "../themes/helpers/boxShadow";

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

const StyledInput = styled.input<ComponentProps>`
  height: ${(props: ThemeProps) => getHeightUnit(props, "1u")};
  width: ${(props: ThemeProps) => getWidthUnit(props, "2u")};
  color: ${(props) => getMainThemeTextColorShade(props, "range")};
  -webkit-appearance: none;

  &::-moz-range-track {
    background-color: ${(props) =>
      getMainThemeBackgroundColorShade(props, "rangeTrack")};
    border: ${(props) => getThemeBorder(props, "rangeTrack")};
    border-radius: ${(props) => getThemeBorderRadius(props, "rangeTrack")};
  }
  &::-moz-range-thumb {
    width: ${(props) => getHeightUnit(props, "0.5u")};
    height: ${(props) => getHeightUnit(props, "0.5u")};
    border-radius: ${(props) => getThemeBorderRadius(props, "rangeThumb")};
    border: ${(props) => getThemeBorder(props, "rangeThumb")};
    background-color: ${(props) =>
      getMainThemeBackgroundColorShade(props, "rangeThumb")};
    box-shadow: ${getBoxShadow2};
  }

  &::-webkit-slider-runnable-track {
    background-color: ${(props) =>
      getMainThemeBackgroundColorShade(props, "rangeTrack")};
    border: ${(props) => getThemeBorder(props, "rangeTrack")};
    border-radius: ${(props) => getThemeBorderRadius(props, "rangeTrack")};
    height: 6px;
  }

  &::-webkit-slider-thumb {
    width: ${(props) => getHeightUnit(props, "0.5u")};
    height: ${(props) => getHeightUnit(props, "0.5u")};
    margin: -6px;
    -webkit-appearance: none;
    border: ${(props) => getThemeBorder(props, "rangeThumb")};
    border-radius: ${(props) => getThemeBorderRadius(props, "rangeThumb")};
    background-color: ${(props) =>
      getMainThemeBackgroundColorShade(props, "rangeThumb")};
    box-shadow: ${getBoxShadow2};
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
