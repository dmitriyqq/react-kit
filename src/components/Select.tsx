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
import {
  getBorderRadius,
  getDisabledColor,
  getMainBackgroundColor,
  getPrimaryMainColor,
  ThemeProps,
} from "../themes/theme";

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
}

interface StyledSelectProps extends TextProps, ThemeProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

interface StyledSelectWrapperProps extends TextProps, ThemeProps {
  disabled?: boolean;
}

const StyledSelect = styled.select<StyledSelectProps>`
  flex: 1;
  align-items: center;
  appearance: none;
  outline: none;
  background-color: ${getMainBackgroundColor};
  border: 1.5px solid
    ${(props: StyledSelectProps) =>
      props.disabled ? getDisabledColor(props) : getPrimaryMainColor(props)};
  border-radius: ${getBorderRadius};
  padding: ${(props: ThemeProps) => props.theme?.spacing.single ?? "5px"};
  font-family: ${getFontFamily};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
  text-transform: ${getTextTransform};
  width: ${(props: ThemeProps) =>
    `${2 * (props.theme?.widthUnit ?? 100)}px` ?? "5px"};
  cursor: pointer;
  &:focus {
    outline: 0;
    background-color: ${getMainBackgroundColor};
  }
  &:active {
    outline: 0;
    background-color: ${getMainBackgroundColor};
  }

  > * {
    background-color: ${getMainBackgroundColor};
  }
`;

const SelectWrapper = styled.div<StyledSelectWrapperProps>`
  margin: ${(props: ThemeProps) => props.theme?.spacing.single ?? "5px"};
  width: ${(props: ThemeProps) =>
    `${2 * (props.theme?.widthUnit ?? 100)}px` ?? "150px"};
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
      props.disabled ? getDisabledColor(props) : getPrimaryMainColor(props)};
    text-decoration: none;
  }
`;

export const Select = <T extends unknown>(props: Props<T>) => {
  const { options, onChange, value, placeholder, disabled } = props;

  const optionsElements = options.map(({ label, id }) => (
    <option key={id} value={id}>
      {label}
    </option>
  ));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const id = event?.target?.value || "";
    const option = options.find((o) => o.id === id);
    if (option) {
      onChange(option);
    }
  };

  return (
    <SelectWrapper disabled={disabled}>
      <StyledSelect
        onChange={handleChange}
        value={value?.id ?? ""}
        variant="label"
        placeholder={placeholder}
        disabled={disabled}
      >
        {optionsElements}
      </StyledSelect>
    </SelectWrapper>
  );
};
