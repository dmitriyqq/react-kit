import React, { MouseEvent } from "react";
import { FC } from "react";
import styled from "styled-components";
import {
  ComponentProps,
  getMainThemeTextColorShade,
  getDarkThemeTextColorShade,
  getMainColorShade,
  getDarkestDisabledShade,
} from "../themes";

export interface Props extends ComponentProps {
  icon: string;
  className?: string;
  hover?: boolean;
  disabled?: boolean;
  color?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  type?: "fill" | "line";
  size?:
    | "lg"
    | "xl"
    | "xxs"
    | "xs"
    | "sm"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x"
    | "fw";
}

interface StyledIProps extends ComponentProps {
  className?: string;
  hover?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const StyledI = styled.i<StyledIProps>`
  display: inline-block;
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : props.onClick ? "pointer" : "default"};
  color: ${(props) =>
    props.disabled
      ? getDarkestDisabledShade(props)
      : getMainThemeTextColorShade(props, "icon")};
  vertical-align: bottom;
  &:hover {
    color: ${(props: StyledIProps) =>
      props.disabled
        ? getDarkestDisabledShade(props)
        : props.hover
        ? getMainColorShade({ theme: props.theme, themeColor: "primary" })
        : getMainThemeTextColorShade(props, "icon")};
  }
`;

export const Icon: FC<Props> = (props) => {
  const type = props.type;
  const size = props.size ?? "2x";
  const iconClassName = type ? `ri-${props.icon}-${type}` : `ri-${props.icon}`;
  const iconClassNameWithType = `ri-${props.icon}-${props.type ?? "fill"}`;

  const className = `${iconClassNameWithType} ${iconClassName} ri-${size} ${
    props.className ?? ""
  }`;

  return (
    <StyledI
      disabled={props.disabled}
      className={className}
      variant={props.variant}
      themeColor={props.themeColor}
      onClick={props.onClick}
      hover={Boolean(props.onClick || props.hover)}
    />
  );
};
