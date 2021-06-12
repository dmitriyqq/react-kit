import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import styled from "styled-components";
import { getBoxShadow, getDisabledColor, ThemeProps } from "../themes/theme";
import { Text } from "./Text";
import { Icon } from "./Icon";
import {
  getDarkColorShade,
  getLightestColorShade,
  getMainColorShade,
  getMainDisabledShade,
} from "../themes/helpers/color";
import { getBorderCss, getBorderRadius } from "../themes/helpers/border";
import { getSingleSpacing } from "../themes/helpers/spacing";
import { getHeightUnit, getWidthUnit } from "../themes/helpers/size";

const ButtonText = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface Props extends InputHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  icon?: string;
  disabled?: boolean;
  children?: ReactNode;
  themeColor?: string;
  themeBorder?: string;
  iconType?: "fill" | "line";
  width?: string;
  height?: string;
}

interface StyledButtonProps
  extends ThemeProps,
    InputHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  themeColor?: string;
  themeBorder?: string;
  hasChildren?: boolean;
  width?: string;
  height?: string;
}

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      onClick,
      children,
      className,
      themeColor,
      disabled,
      icon,
      iconType,
      width,
      height,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledButton
        className={className}
        onClick={onClick}
        disabled={disabled === true}
        themeColor={themeColor}
        hasChildren={children !== undefined}
        ref={ref}
        width={width}
        height={height}
        {...(rest as unknown)}
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
  }
);

const StyledButton = styled.button<StyledButtonProps>`
  ${(props: StyledButtonProps) =>
    props.hasChildren ? `min-width: ${getWidthUnit(props)};` : ""}
  height: ${getHeightUnit};
  line-height: ${getHeightUnit};
  margin: ${getSingleSpacing};
  padding: ${getSingleSpacing};
  background-color: ${(props: StyledButtonProps) =>
    props.disabled ? getMainDisabledShade(props) : getMainColorShade(props)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  box-shadow: ${(props: StyledButtonProps) => getBoxShadow(props).light};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  border-radius: ${getBorderRadius};
  border: ${getBorderCss};
  &:hover {
    ${(props) =>
      props.disabled
        ? ""
        : `box-shadow: ${(props: StyledButtonProps) =>
            getBoxShadow(props).main};`}
    background-color: ${(props: StyledButtonProps) =>
      props.disabled ? getDisabledColor(props) : getLightestColorShade(props)};
  }
  &:active {
    ${(props) =>
      props.disabled
        ? ""
        : `box-shadow: ${(props: StyledButtonProps) =>
            getBoxShadow(props).main};`}
    background-color: ${(props: StyledButtonProps) =>
      props.disabled ? getDisabledColor(props) : getDarkColorShade(props)};
  }
  &:focus {
    outline: 0;
  }
`;
