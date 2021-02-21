export interface ThemeProps {
  theme: Theme;
}

export interface Color {
  main: string;
  light: string;
  dark: string;
}

export interface Text {
  fontSize: string;
  color: string;
  fontWeight: string;
  fontFamily: string;
  textTransform: string;
}

export type ColorType =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "success"
  | "white"
  | "black"
  | "grey";

export type TextColorType =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "success"
  | "text";

export type TextType = "header" | "highlight" | "regular" | "button" | "label";

export interface Theme {
  name: string;
  mainBackground: string;
  secondaryBackground: string;
  widthUnit: number;
  heightUnit: number;
  borderRadius: string;
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
  };
  text: {
    header: Text;
    highlight: Text;
    regular: Text;
    button: Text;
    label: Text;
  };
  spacing: {
    slim: string;
    single: string;
    double: string;
    triple: string;
    quadruple: string;
  };
}

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
  return props.theme?.colors.primary.main ?? "red";
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
