import React, { MouseEvent } from "react";
import { FC } from "react";
import styled from "styled-components";
import { ColorType, getColorFromProp, ThemeProps } from "../themes/theme";

export interface Props {
  icon: string;
  className?: string;
  hover?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  color?: ColorType | string;
  hoverColor?: ColorType | string;
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

interface StyledIProps extends ThemeProps {
  color?: ColorType | string;
  hoverColor?: ColorType | string;
  className?: string;
  hover?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const StyledI = styled.i<StyledIProps>`
  display: inline-block;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  color: ${(props) => getColorFromProp(props, props.color ?? "grey", "main")};
  vertical-align: bottom;
  &:hover {
    color: ${(props: StyledIProps) =>
      props.hover
        ? getColorFromProp(
            props,
            props.hoverColor ?? props.color ?? "primary",
            "dark"
          )
        : getColorFromProp(props, props.color ?? "grey", "main")};
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
      className={className}
      color={props.color}
      hoverColor={props.hoverColor}
      onClick={props.onClick}
      hover={Boolean(props.onClick || props.hover)}
    />
  );
};
