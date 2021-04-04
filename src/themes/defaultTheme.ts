import { Theme } from "./theme";

export const defaultTheme: Theme = {
  name: "default",
  widthUnit: 128,
  heightUnit: 32,
  borderRadius: "15px",
  boxShadow: {
    light: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    main: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
    dark: "0 4px 8px 0 rgba(0, 0, 0, 0.6)",
  },
  colors: {
    primary: {
      light: "#5426ff",
      main: "#3908f1",
      dark: "#2e11a6",
    },
    secondary: {
      light: "#c216e0",
      main: "#7a148c",
      dark: "#490d54",
    },
    danger: {
      light: "#dc3545",
      main: "#a11d1d",
      dark: "#7d1616",
    },
    warning: {
      light: "#ffc107",
      main: "#b0a527",
      dark: "#8c831d",
    },
    success: {
      light: "#28a745",
      main: "#1c943c",
      dark: "#167a31",
    },
    white: {
      light: "white",
      main: "white",
      dark: "white",
    },
    grey: {
      light: "grey",
      main: "grey",
      dark: "grey",
    },
    black: {
      light: "black",
      main: "black",
      dark: "black",
    },
    disabled: "grey",
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
