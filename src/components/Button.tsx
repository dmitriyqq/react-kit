import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import styled from "styled-components";
import { Text } from "./Text";
import { Icon } from "./Icon";
import {
  getBorderCss,
  getBorderRadius,
  getHeightUnit,
  getWidthUnit,
  getSingleSpacing,
  getMainDisabledShade,
  getMainThemeBackgroundColorShade,
  ComponentProps,
  getDarkThemeBackgroundColorShade,
  getLightThemeBackgroundColorShade,
  getThemeMargin,
  getThemeBorder,
  getThemeBorderRadius,
} from "../themes";
import {
  getBoxShadow1,
  getBoxShadow2,
  getBoxShadow4,
} from "../themes/helpers/boxShadow";

const ButtonText = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface Props
  extends ComponentProps,
    Omit<InputHTMLAttributes<HTMLButtonElement>, "width" | "height"> {
  onClick?: () => void;
  className?: string;
  icon?: string;
  disabled?: boolean;
  children?: ReactNode;
  iconType?: "fill" | "line";
}

interface StyledButtonProps
  extends ComponentProps,
    Omit<InputHTMLAttributes<HTMLButtonElement>, "width" | "height"> {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  hasChildren?: boolean;
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
      variant,
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
        variant={variant}
        height={height}
        {...(rest as unknown)}
      >
        {icon && (
          <Icon
            icon={icon}
            disabled={disabled}
            variant={variant ?? "primaryButton"}
            type={iconType}
          />
        )}
        {children ? (
          <ButtonText variant={variant ?? "primaryButton"} align="center">
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
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;

  width: ${(props) => getWidthUnit(props, "auto")};
  height: ${(props) => getHeightUnit(props, "1u")};

  ${({ hasChildren, theme }: StyledButtonProps) =>
    hasChildren ? `min-width: ${getWidthUnit({ width: "1u", theme })};` : ""}
  line-height: ${(props) => getHeightUnit(props, "1u")};

  margin: ${(props) => getThemeMargin(props, "primaryButton")};
  padding: ${(props) => getThemeMargin(props, "primaryButton")};

  background-color: ${(props: StyledButtonProps) =>
    props.disabled
      ? getMainDisabledShade(props)
      : getMainThemeBackgroundColorShade(props, "primaryButton")};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  box-shadow: ${getBoxShadow2};

  border-radius: ${(props) => getThemeBorderRadius(props, "primaryButton")};
  border: ${(props) => getThemeBorder(props, "primaryButton")};

  &:hover {
    ${(props) => (props.disabled ? "" : `box-shadow: ${getBoxShadow4(props)};`)}
    background-color: ${(props: StyledButtonProps) =>
      props.disabled
        ? getMainDisabledShade(props)
        : getLightThemeBackgroundColorShade(props)};
  }
  &:active {
    ${(props: StyledButtonProps) =>
      props.disabled ? "" : `box-shadow: ${getBoxShadow1(props)};`}
    background-color: ${(props: StyledButtonProps) =>
      props.disabled
        ? getMainDisabledShade(props)
        : getDarkThemeBackgroundColorShade(props)};
  }
  &:focus {
    outline: 0;
  }
`;
