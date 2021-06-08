import React, { ChangeEvent } from "react";
import styled from "styled-components";
import {
  getFontColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getTextTransform,
  Props as TextProps,
} from "./Text";
import { getMainBackgroundColor, ThemeProps } from "../themes/theme";
import { getSingleSpacing } from "../themes/helpers/spacing";
import { getWidth } from "../themes/helpers/size";
import { getBorderRadius } from "../themes/helpers/border";
import {
  getMainColorShade,
  getMainDisabledShade,
} from "../themes/helpers/color";

export interface SelectOption<T> {
  label: string;
  id: string;
  value: T;
}

export interface Props<T> {
  options: SelectOption<T>[];
  onChange: (option: SelectOption<T> | null) => void;
  value: SelectOption<T> | null;
  placeholder?: string;
  disabled?: boolean;
  allowNull?: boolean;
  width?: string;
  height?: string;
}

interface StyledSelectProps extends TextProps, ThemeProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  width?: string;
  height?: string;
}

interface StyledSelectWrapperProps extends TextProps, ThemeProps {
  disabled?: boolean;
  width?: string;
  height?: string;
}

const StyledSelect = styled.select<StyledSelectProps>`
  flex: 1;
  align-items: center;
  appearance: none;
  outline: none;
  background-color: ${getMainBackgroundColor};
  border: 1.5px solid
    ${(props: StyledSelectProps) =>
      props.disabled ? getMainDisabledShade(props) : getMainColorShade(props)};
  border-radius: ${getBorderRadius};
  padding: ${getSingleSpacing};
  font-family: ${getFontFamily};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
  text-transform: ${getTextTransform};
  width: ${getWidth};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:focus {
    outline: 0;
    background-color: ${getMainBackgroundColor};
  }
  &:active {
    outline: 0;
    background-color: ${getMainBackgroundColor};
  }

  > * {
    background-color: ${getMainColorShade};
  }
`;

const SelectWrapper = styled.div<StyledSelectWrapperProps>`
  margin: ${getSingleSpacing};
  width: ${getWidth};
  border-radius: ${getBorderRadius};
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  color: white;
  &::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.7em 1em;
    height: 100%;
    pointer-events: none;
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
    color: ${getMainBackgroundColor};
    background-color: ${(props: StyledSelectWrapperProps) =>
      props.disabled ? getMainDisabledShade(props) : getMainColorShade(props)};
    text-decoration: none;
  }
`;

export const Select = <T extends unknown>({
  options,
  onChange,
  value,
  placeholder,
  disabled,
  allowNull,
  width = "3u",
  height = "1u",
}: Props<T>) => {
  const allOptions: SelectOption<T | null>[] =
    allowNull !== false
      ? [{ id: "null", value: null, label: "Не выбрано" }, ...options]
      : options;

  const optionsElements = allOptions.map(({ label, id }) => (
    <option key={id} value={id}>
      {label}
    </option>
  ));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const id = event?.target?.value || "";
    const option = allOptions.find((o) => o.id === id);
    if (option && option.value) {
      onChange(option as SelectOption<T>);
    } else {
      onChange(null);
    }
  };

  return (
    <SelectWrapper
      disabled={disabled || options.length === 0}
      width={width}
      height={height}
    >
      <StyledSelect
        onChange={handleChange}
        value={value?.id ?? ""}
        variant="label"
        placeholder={placeholder}
        disabled={disabled || options.length === 0}
        width={width}
        height={height}
      >
        {optionsElements}
      </StyledSelect>
    </SelectWrapper>
  );
};
