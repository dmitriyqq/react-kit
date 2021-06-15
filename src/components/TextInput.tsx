import styled from "styled-components";
import React, { useState } from "react";
import { Icon } from "./Icon";
import {
  ComponentProps,
  getBorderCss,
  getHeightUnit,
  getMainColorShade,
  getMainThemeTextColorShade,
  getThemeBackgroundColor,
  getThemeBorder,
  getThemeFontFamily,
  getThemeFontSize,
  getThemeFontWeight,
  getThemeMargin,
  getThemeTextTransform,
  getWidthUnit,
} from "../themes";

export interface Props extends ComponentProps {
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  original?: string;
  onUpdate?: () => void;
  onChange?: (value: string) => void;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const TextInput = (props: Props) => {
  const { value, placeholder, disabled, original, onChange, onUpdate } = props;
  const [edited, setEdited] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setEdited(true);
    if (onChange) {
      return onChange(e.target.value);
    }
  };

  const handleConfirmUpdate = () => {
    if (onUpdate) {
      return onUpdate();
    }
  };

  const checkAvailable = original !== undefined && edited && original !== value;
  const inputValue =
    original === undefined ? value : edited ? value : value ? value : original;
  return (
    <InputWrapper>
      <BaseTextInput
        disabled={disabled === true}
        type="text"
        value={inputValue ?? ""}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {checkAvailable && <Icon icon="check" onClick={handleConfirmUpdate} />}
    </InputWrapper>
  );
};

export const BaseTextInput = styled.input<ComponentProps>`
  display: block;
  box-sizing: border-box;
  font-family: ${(props) => getThemeFontFamily(props, "input")};
  font-size: ${(props) => getThemeFontSize(props, "input")};
  font-weight: ${(props) => getThemeFontWeight(props, "input")};
  text-transform: ${(props) => getThemeTextTransform(props, "input")};
  text-align: center;
  color: ${(props) => getMainThemeTextColorShade(props, "input")};
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${(props) => getThemeBorder(props, "input")};
  margin: ${(props) => getThemeMargin(props, "input")};
  padding: ${(props) => getThemeMargin(props, "input")};
  width: ${(props) => getWidthUnit(props, "2u")};
  height: ${(props) => getHeightUnit(props, "1u")};
  &:hover {
    border-bottom: ${(props) =>
      getThemeBorder(
        { theme: props.theme, themeBorderColor: "primary" },
        "input"
      )};
  }
  &:active {
    border-bottom: ${(props) =>
      getThemeBorder(
        { theme: props.theme, themeBorderColor: "primary" },
        "input"
      )};
  }
  &:focus {
    outline: 0;
    border-bottom: ${(props) =>
      getThemeBorder(
        { theme: props.theme, themeBorderColor: "primary" },
        "input"
      )};
  }
  &:valid {
    color: ${(props) => getMainThemeTextColorShade(props, "input")};
  }
  &:invalid {
    color: ${({ theme }) => getMainColorShade({ theme, themeColor: "danger" })};
    border-bottom: ${(props) =>
      getThemeBorder(
        { theme: props.theme, themeBorderColor: "danger" },
        "input"
      )};
  }
`;
