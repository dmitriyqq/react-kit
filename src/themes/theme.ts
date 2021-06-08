import { CSSProperties } from "react";

export interface ThemeProps {
  theme: Theme;
}

export type ShadeType =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export interface Color {
  [100]: string;
  [200]: string;
  [300]: string;
  [400]: string;
  [500]: string;
  [600]: string;
  [700]: string;
  [800]: string;
  [900]: string;
}

export interface Spacing {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface Size {
  widthUnit: number;
  heightUnit: number;
}

export interface BoxShadow {
  hOffset: number;
  vOffset: number;
  blur: number;
  spread: number;
}

export type TextTransformType = CSSProperties["textTransform"];

export interface TextStyle {
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  textTransform: TextTransformType;
}

export type ColorType =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "success"
  | "white"
  | "black"
  | "grey"
  | string;

export type TextColorType =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "success"
  | "text";

export type TextType = "header" | "highlight" | "regular" | "button" | "label";

export interface Border {
  width: number;
  radius: number;
  style: string;
}

export interface Theme {
  name: string;
  mainBackground: string;
  secondaryBackground: string;
  borderRadius: string;
  size: Size;
  spacings: {
    half: Spacing;
    single: Spacing;
    double: Spacing;
    triple: Spacing;
    quad: Spacing;
    [key: string]: Spacing;
  };
  boxShadows: {
    [1]: BoxShadow;
    [2]: BoxShadow;
    [4]: BoxShadow;
    [8]: BoxShadow;
    [16]: BoxShadow;
  };
  boxShadow: {
    main: string;
    light: string;
    dark: string;
  };
  colors: {
    primary: Color;
    secondary: Color;
    danger: Color;
    warning: Color;
    success: Color;
    white: Color;
    grey: Color;
    black: Color;
    disabled: Color;
    [key: string]: Color;
  };
  borders: {
    primary: Border;
    secondary: Border;
    [key: string]: Border;
  };
  textStyles: {
    header: TextStyle;
    highlight: TextStyle;
    regular: TextStyle;
    button: TextStyle;
    label: TextStyle;
    [key: string]: TextStyle;
  };
  // spacing: {
  //   slim: string;
  //   single: string;
  //   double: string;
  //   triple: string;
  //   quadruple: string;
  //   [key: string]: string;
  // };
}

export const getColorFromProp = (
  props: ThemeProps,
  color: ColorType | string,
  shade?: 500 | 600 | 400
) => {
  const colors = props?.theme?.colors;
  const themeColor = colors ? colors[color as ColorType] : null;

  return themeColor ? themeColor[shade ?? "500"] : color;
};

export const getPrimaryColor = (props: ThemeProps) => {
  return (
    props.theme?.colors.primary ?? { dark: "red", main: "red", light: "red" }
  );
};

export const getSecondaryBackgroundColor = (props: ThemeProps) => {
  return props.theme?.secondaryBackground ?? "#CCCCCC";
};

export const getMainBackgroundColor = (props: ThemeProps) => {
  return props.theme?.mainBackground ?? "#FEFEFE";
};

export const getPrimaryMainColor = (props: ThemeProps) => {
  return props.theme?.colors.primary[500] ?? "red";
};

export const getDisabledColor = (props: ThemeProps) => {
  return props.theme?.colors.disabled[500] ?? "grey";
};

export const getBoxShadow = (props: ThemeProps) => {
  return (
    props.theme?.boxShadow ?? {
      light: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      main: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
      dark: "0 4px 16px 0 rgba(0, 0, 0, 0.6)",
    }
  );
};

export const getBorderRadius = (props: ThemeProps) =>
  props.theme?.borderRadius ?? "5px";

export const getGridArea = (props: { gridArea?: string }) =>
  props.gridArea ? `grid-area: ${props.gridArea};` : "";
