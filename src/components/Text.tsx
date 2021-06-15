import styled from "styled-components";
import {
  ComponentProps,
  getMainThemeTextColorShade,
  getThemeFontFamily,
  getThemeFontSize,
  getThemeFontWeight,
  getThemeTextTransform,
  getWidthUnit,
} from "../themes";
import { InputHTMLAttributes } from "react";

export interface Props
  extends ComponentProps,
    Omit<InputHTMLAttributes<HTMLDivElement>, "width" | "height"> {
  align?: "left" | "right" | "center" | "justify";
}

export const getTextAlign = (props: Props) => props.align ?? "left";

export const Text = styled.div<Props>`
  font-family: ${(props) => getThemeFontFamily(props, "regularText")};
  font-size: ${(props) => getThemeFontSize(props, "regularText")};
  font-weight: ${(props) => getThemeFontWeight(props, "regularText")};
  color: ${(props) => getMainThemeTextColorShade(props, "regularText")};
  text-transform: ${(props) => getThemeTextTransform(props, "regularText")};
  text-align: ${getTextAlign};
  width: ${(props) => getWidthUnit(props, "auto")};
  display: inline-block;
  ${(props) =>
    props.onClick
      ? `&:hover {
      color: ${getMainThemeTextColorShade(props, "regularText")}; 
      
  }
  cursor: pointer;
`
      : ""}
`;

export const SpanText = styled.span<Props>`
  width: 100%;
  font-family: ${(props) => getThemeFontFamily(props, "regularText")};
  font-size: ${(props) => getThemeFontSize(props, "regularText")};
  font-weight: ${(props) => getThemeFontWeight(props, "regularText")};
  color: ${(props) => getMainThemeTextColorShade(props, "regularText")};
  text-transform: ${(props) => getThemeTextTransform(props, "regularText")};
  text-align: ${getTextAlign};
`;
