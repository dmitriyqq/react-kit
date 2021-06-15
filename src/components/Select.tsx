import React, { ChangeEvent } from "react";
import styled from "styled-components";

import {
  getWidthUnit,
  getMainDisabledShade,
  ComponentProps,
  getMainThemeBackgroundColorShade,
  getThemePadding,
  getThemeBorderRadius,
  getBorderCss,
  getThemeBorder,
  getThemeFontFamily,
  getThemeFontSize,
  getThemeFontWeight,
  getThemeTextTransform,
  getMainThemeTextColorShade,
  getThemeMargin,
  getHeightUnit,
} from "../themes";

export interface SelectOption<T> {
  label: string;
  id: string;
  value: T;
}

export interface Props<T> extends ComponentProps {
  options: SelectOption<T>[];
  onChange: (option: SelectOption<T> | null) => void;
  value: SelectOption<T> | null;
  placeholder?: string;
  disabled?: boolean;
  allowNull?: boolean;
}

interface StyledSelectProps extends ComponentProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  width?: string;
  height?: string;
}

interface StyledSelectWrapperProps extends ComponentProps {
  disabled?: boolean;
  width?: string;
  height?: string;
}

const StyledSelect = styled.select<StyledSelectProps>`
  flex: 1;
  align-items: center;
  appearance: none;
  outline: none;
  background-color: ${(props) =>
    getMainThemeBackgroundColorShade(props, "select")};
  border: ${(props) =>
    props.disabled
      ? getBorderCss({ ...props, themeBorderColor: "disabled" })
      : getThemeBorder(props, "select")};

  border-radius: ${(props) => getThemeBorderRadius(props, "select")};
  padding: ${(props) => getThemePadding(props, "select")};
  font-family: ${(props) => getThemeFontFamily(props, "select")};
  font-size: ${(props) => getThemeFontSize(props, "select")};
  font-weight: ${(props) => getThemeFontWeight(props, "select")};
  text-align: center;
  color: ${(props) => getMainThemeTextColorShade(props, "select")};
  text-transform: ${(props) => getThemeTextTransform(props, "select")};
  width: ${(props) => getWidthUnit(props, "2u")};
  height: ${(props) => getHeightUnit(props, "1u")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:focus {
    outline: 0;
    background-color: ${(props) =>
      getMainThemeBackgroundColorShade(props, "select")};
  }
  &:active {
    outline: 0;
    background-color: ${(props) =>
      getMainThemeBackgroundColorShade(props, "select")};
  }

  > * {
    background-color: ${(props) =>
      getMainThemeBackgroundColorShade(props, "select")};
  }
`;

const SelectWrapper = styled.div<StyledSelectWrapperProps>`
  margin: ${(props) => getThemeMargin(props, "select")};
  width: ${(props) => getWidthUnit(props, "width")};
  border-radius: ${(props) => getThemeBorderRadius(props, "select")};
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  color: white;
  &::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.8em 1em;
    height: 100%;
    pointer-events: none;
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
    color: ${(props) => getMainThemeTextColorShade(props, "select")};
    background-color: ${(props: StyledSelectWrapperProps) =>
      props.disabled
        ? getMainDisabledShade(props)
        : getMainThemeBackgroundColorShade(props)};
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
  width,
  variant,
  height,
}: Props<T>) => {
  console.log("allowNull", allowNull);
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
      variant={variant}
      height={height}
    >
      <StyledSelect
        onChange={handleChange}
        value={value?.id ?? ""}
        variant={variant}
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
