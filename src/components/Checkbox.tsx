import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

const InternalCheckbox = styled.input`
  position: absolute;
  opacity: 0;
`;


export interface Props {
  onChange?: (value: boolean) => void;
  value: boolean;
  disabled?: boolean;
}

export const Checkbox: FC<Props> = (props) => {
  const { onChange, value, disabled } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <label>
      <InternalCheckbox
        type="checkbox"
        onChange={handleChange}
        checked={value ?? false}
        disabled={disabled}
      />
      <Icon
        icon={value ? "checkbox" : "checkbox-blank"}
        type="line"
        color={value ? "primary" : undefined}
        hover={true}
      />
    </label>
  );
};
