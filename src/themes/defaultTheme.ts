import { Spacing, Theme } from "./theme";

export const defaultTheme: any = {
  name: "default",
  widthUnit: 128,
  heightUnit: 32,
  borderRadius: "15px",
  boxShadow: {
    light: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    main: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
    dark: "0 4px 8px 0 rgba(0, 0, 0, 0.6)",
  },
  borders: {
    primary: {
      style: "none",
      width: 0,
      radius: 10,
    },
    secondary: {
      style: "dashed",
      width: 2,
      radius: 20,
    },
  },
  size: {
    widthUnit: 128,
    heightUnit: 32,
  },
  colors: {
    primary: {
      100: "#000000",
      200: "#383348",
      300: "#4e3d91",
      500: "#5451d6",
      400: "#595cdf",
      600: "#5653da",
      700: "#5a57e6",
      800: "#5f5cf3",
      900: "#6461ff",
    },
    secondary: {
      600: "#c216e0",
      500: "#7a148c",
      400: "#490d54",
    },
    danger: {
      600: "#dc3545",
      500: "#a11d1d",
      400: "#7d1616",
    },
    warning: {
      600: "#ffc107",
      500: "#b0a527",
      400: "#8c831d",
    },
    success: {
      600: "#28a745",
      500: "#1c943c",
      400: "#167a31",
    },
    white: {
      600: "#FFFFFF",
      500: "#FFFFFF",
      400: "#FFFFFF",
    },
    grey: {
      600: "#999999",
      500: "#999999",
      400: "#999999",
    },
    black: {
      600: "#000000",
      500: "#000000",
      400: "#000000",
    },
    disabled: {
      600: "#999999",
      500: "#999999",
      400: "#999999",
    },
  },
  mainBackground: "#FEFEFE",
  secondaryBackground: "#f3f3f3",
  spacing: {
    slim: "4px",
    single: "8px",
    double: "16px",
    triple: "24px",
    quadruple: "32px",
  },
  spacings: {
    half: { top: 3, right: 3, bottom: 3, left: 3 },
    single: { top: 8, right: 12, bottom: 8, left: 12 },
    double: { top: 12, right: 12, bottom: 12, left: 12 },
    triple: { top: 18, right: 18, bottom: 18, left: 18 },
    quad: { top: 24, right: 24, bottom: 24, left: 24 },
  },
  textStyles: {
    header: {
      fontSize: 36,
      fontWeight: 700,
      fontFamily: "Arial Black",
      textTransform: "none",
    },
    highlight: {
      fontSize: 26,
      fontWeight: 600,
      fontFamily: "Arial Black",
      textTransform: "none",
    },
    regular: {
      fontSize: 24,
      fontWeight: 500,
      fontFamily: "sans-serif",
      textTransform: "none",
    },
    button: {
      fontSize: 20,
      fontFamily: "sans-serif",
      fontWeight: 600,
      textTransform: "uppercase",
    },
    label: {
      fontSize: 18,
      fontWeight: 400,
      fontFamily: "sans-serif",
      textTransform: "none",
    },
  },
  text: {
    header: {
      fontSize: "1.7em",
      fontWeight: "700",
      fontFamily: "sans-serif",
      color: "#3908f1",
      textTransform: "none",
    },
    highlight: {
      fontSize: "1.4em",
      fontWeight: "600",
      fontFamily: "sans-serif",
      color: "#3908f1",
      textTransform: "none",
    },
    regular: {
      fontSize: "1.3em",
      fontWeight: "500",
      fontFamily: "sans-serif",
      color: "#111111",
      textTransform: "none",
    },
    button: {
      fontSize: "1.1em",
      fontFamily: "sans-serif",
      fontWeight: "600",
      color: "#FFFFFF",
      textTransform: "uppercase",
    },
    label: {
      fontSize: "0.9em",
      fontWeight: "400",
      fontFamily: "sans-serif",
      color: "#111111",
      textTransform: "none",
    },
  },
};
