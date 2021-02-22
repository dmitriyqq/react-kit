import styled from "styled-components";
import {
  ColorType,
  TextColorType,
  TextType,
  ThemeProps,
} from "../themes/theme";
import { ReactNode } from "react";

export type TextColor = TextColorType | ColorType | string;

export interface Props {
  variant?: TextType;
  color?: TextColor;
  align?: "left" | "right" | "center" | "justify";
  children?: ReactNode;
}

interface ThemedTextProps extends Props, ThemeProps {}

export const getFontFamily = (props: ThemedTextProps) =>
  props.theme?.text[props.variant ?? "regular"].fontFamily ?? "sans-serif";
export const getFontSize = (props: ThemedTextProps) =>
  props.theme?.text[props.variant ?? "regular"].fontSize ?? "1em";
export const getFontWeight = (props: ThemedTextProps) =>
  props.theme?.text[props.variant ?? "regular"].fontWeight ?? "500";
export const getFontColor = (props: ThemedTextProps) =>
  !props.color || props.color === "text"
    ? props.theme?.text[props.variant ?? "regular"].color
    : props.theme.colors[props.color as ColorType]
    ? props.theme.colors[props.color as ColorType].main
    : props.color;
export const getTextTransform = (props: ThemedTextProps) =>
  props.theme?.text[props.variant ?? "regular"].textTransform ?? "none";
export const getTextAlign = (props: ThemedTextProps) => props.align ?? "left";

export const Text = styled.div<Props>`
  font-family: ${getFontFamily};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
  text-transform: ${getTextTransform};
  text-align: ${getTextAlign};
  display: inline-block;
`;

export const SpanText = styled.span<Props>`
  width: 100%;
  font-family: ${getFontFamily};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
  text-transform: ${getTextTransform};
  text-align: ${getTextAlign};
`;
