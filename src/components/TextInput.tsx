import styled from "styled-components";
import React, { useState } from "react";
import { Icon } from "./Icon";
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getTextTransform,
} from "./Text";
import { getPrimaryMainColor } from "../themes/theme";

export interface Props {
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
        type={"text"}
        value={inputValue ?? ""}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {checkAvailable && <Icon icon="check" onClick={handleConfirmUpdate} />}
    </InputWrapper>
  );
};

export const BaseTextInput = styled.input`
  display: inline;
  font-weight: ${getFontWeight};
  font-size: ${getFontSize};
  text-transform: ${getTextTransform};
  font-family: ${getFontFamily};
  text-align: center;
  color: ${(props) => props.theme.text.regular.color};
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1.5px solid ${(props) => props.theme.text.regular.color};
  width: 100%;
  &:hover {
    background-color: ${(props) => props.theme.secondaryBackground};
    border-bottom: 1.5px solid ${getPrimaryMainColor};
  }
  &:active {
    background-color: ${(props) => props.theme.secondaryBackground};
    border-bottom: 1.5px solid ${getPrimaryMainColor};
  }
  &:focus {
    outline: 0;
    border-bottom: 1.5px solid ${getPrimaryMainColor};
  }
  &:valid {
    color: ${(props) => props.theme.text.regular.color};
  }
  &:invalid {
    color: ${(props) => props.theme.colors.danger.main};
  }
`;
