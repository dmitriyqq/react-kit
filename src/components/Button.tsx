import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import {
  ColorType,
  getBorderRadius,
  getBoxShadow,
  getDisabledColor,
  ThemeProps,
} from "../themes/theme";
import { Text } from "./Text";
import { Icon } from "./Icon";

const ButtonText = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface Props {
  onClick?: () => void;
  className?: string;
  icon?: string;
  disabled?: boolean;
  children?: ReactNode;
  color?: ColorType;
  iconType?: "fill" | "line";
}

interface StyledButtonProps extends ThemeProps {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  color?: ColorType;
  hasChildren?: boolean;
}

export const Button: FC<Props> = ({
  onClick,
  children,
  className,
  color,
  disabled,
  icon,
  iconType,
}) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      disabled={disabled === true}
      color={color}
      hasChildren={children !== undefined}
    >
      {icon && <Icon icon={icon} color="white" type={iconType} />}
      {children ? (
        <ButtonText variant="button" align="center">
          {children}
        </ButtonText>
      ) : (
        ""
      )}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  ${(props: StyledButtonProps) =>
    props.hasChildren ? "min-width: 160px;" : ""}
  height: 40px;
  border: none;
  margin: ${(props: StyledButtonProps) => props.theme?.spacing.single ?? "8px"};
  padding: 0
    ${(props: StyledButtonProps) => props.theme?.spacing.double ?? "8px"};
  box-sizing: border-box;
  background-color: ${(props) =>
    props.disabled
      ? getDisabledColor(props)
      : props.theme.colors[props.color ?? "primary"].main};
  line-height: 40px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  box-shadow: ${(props: StyledButtonProps) => getBoxShadow(props).light};
  border-radius: ${getBorderRadius};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  &:hover {
    ${(props) =>
      props.disabled
        ? ""
        : `box-shadow: ${(props: StyledButtonProps) =>
            getBoxShadow(props).main};`}
    background-color: ${(props: StyledButtonProps) =>
      props.disabled
        ? getDisabledColor(props)
        : props.theme.colors[props.color ?? "primary"].light};
  }
  &:active {
    ${(props) =>
      props.disabled
        ? ""
        : `box-shadow: ${(props: StyledButtonProps) =>
            getBoxShadow(props).main};`}
    background-color: ${(props: StyledButtonProps) =>
      props.disabled
        ? getDisabledColor(props)
        : props.theme.colors[props.color ?? "primary"].dark};
  }
  &:focus {
    outline: 0;
  }
`;
