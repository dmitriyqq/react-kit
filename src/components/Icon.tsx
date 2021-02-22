import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { ColorType, ThemeProps } from "../themes/theme";

export interface Props {
  icon: string;
  onClick?: () => void;
  color?: ColorType;
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
  color?: ColorType;
  className?: string;
}

const StyledI = styled.i<StyledIProps>`
  color: ${(props: StyledIProps) =>
    props.theme.colors[props.color ?? "grey"].main};
  ${(props) =>
    props.onClick
      ? `
    cursor: pointer;
    &:hover {
      color: ${props.theme.colors.primary.main};
    }`
      : ""}
`;

export const Icon: FC<Props> = (props) => {
  const type = props.type ?? "fill";
  const size = props.size ?? "2x";

  const className = `ri-${props.icon}-${type} ri-${size}`;

  return (
    <StyledI
      className={className}
      color={props.color}
      onClick={props.onClick}
    />
  );
};
