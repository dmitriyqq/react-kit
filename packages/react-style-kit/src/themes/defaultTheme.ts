import { Theme } from "./types";

export const defaultTheme: Theme = {
  name: "default",
  borders: {
    primary: {
      style: "none",
      width: 0,
      radius: 10,
    },
    secondary: {
      width: 4,
      radius: 20,
      style: "solid",
    },
    tabs: {
      width: 4,
      radius: 0,
      style: "solid",
    },
    slim: {
      width: 1,
      radius: 0,
      style: "solid",
    },
    round: {
      width: 0,
      radius: 100,
      style: "solid",
    },
    chip: {
      width: 0,
      radius: 20,
      style: "solid",
    },
  },
  size: {
    widthUnit: 150,
    heightUnit: 40,
  },
  colors: {
    primary: {
      "100": "#000000",
      "200": "#363440",
      "300": "#575180",
      "400": "#6455c1",
      "500": "#6451d6",
      "600": "#6653da",
      "700": "#6c57e6",
      "800": "#715cf3",
      "900": "#7761ff",
    },
    secondary: {
      "100": "#000000",
      "200": "#2a1f2a",
      "300": "#532954",
      "400": "#7c1d7e",
      "500": "#8a148c",
      "600": "#951698",
      "700": "#b71bba",
      "800": "#d91fdd",
      "900": "#fb24ff",
    },
    danger: {
      "100": "#000000",
      "200": "#302724",
      "300": "#613d31",
      "400": "#914026",
      "500": "#a13d1d",
      "600": "#aa411f",
      "700": "#c74b24",
      "800": "#e35629",
      "900": "#ff612e",
    },
    warning: {
      "100": "#000000",
      "200": "#423932",
      "300": "#836244",
      "400": "#c57b36",
      "500": "#db7f2a",
      "600": "#df812b",
      "700": "#e9872d",
      "800": "#f48e2f",
      "900": "#ff9431",
    },
    success: {
      "100": "#000000",
      "200": "#26322a",
      "300": "#366443",
      "400": "#2f954c",
      "500": "#28a64b",
      "600": "#2aaf4f",
      "700": "#31ca5b",
      "800": "#37e467",
      "900": "#3dff73",
    },
    white: {
      "100": "#000000",
      "200": "#4d4d4d",
      "300": "#999999",
      "400": "#e6e6e6",
      "500": "#ffffff",
      "600": "#ffffff",
      "700": "#ffffff",
      "800": "#ffffff",
      "900": "#ffffff",
    },
    grey: {
      "100": "#000000",
      "200": "#313131",
      "300": "#626262",
      "400": "#939393",
      "500": "#a3a3a3",
      "600": "#acacac",
      "700": "#c8c8c8",
      "800": "#e3e3e3",
      "900": "#ffffff",
    },
    black: {
      "100": "#000000",
      "200": "#010101",
      "300": "#020202",
      "400": "#030303",
      "500": "#030303",
      "600": "#1c1c1c",
      "700": "#686868",
      "800": "#b3b3b3",
      "900": "#ffffff",
    },
    disabled: {
      "100": "#000000",
      "200": "#303030",
      "300": "#616161",
      "400": "#919191",
      "500": "#a1a1a1",
      "600": "#aaaaaa",
      "700": "#c7c7c7",
      "800": "#e3e3e3",
      "900": "#ffffff",
    },
    text: {
      "100": "#000000",
      "200": "#0c0c0c",
      "300": "#191919",
      "400": "#252525",
      "500": "#292929",
      "600": "#3e3e3e",
      "700": "#7f7f7f",
      "800": "#bfbfbf",
      "900": "#ffffff",
    },
    mainBackground: {
      "100": "#000000",
      "200": "#4d4d4d",
      "300": "#999999",
      "400": "#e6e6e6",
      "500": "#ffffff",
      "600": "#ffffff",
      "700": "#ffffff",
      "800": "#ffffff",
      "900": "#ffffff",
    },
    secondaryBackground: {
      "100": "#000000",
      "200": "#4d4d4d",
      "300": "#999999",
      "400": "#e6e6e6",
      "500": "#ffffff",
      "600": "#ffffff",
      "700": "#ffffff",
      "800": "#ffffff",
      "900": "#ffffff",
    },
  },
  spacings: {
    half: {
      top: 3,
      right: 3,
      bottom: 3,
      left: 3,
    },
    single: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
    },
    double: {
      top: 12,
      right: 12,
      bottom: 12,
      left: 12,
    },
    triple: {
      top: 18,
      right: 18,
      bottom: 18,
      left: 18,
    },
    quad: {
      top: 24,
      right: 24,
      bottom: 24,
      left: 24,
    },
    newSpacing: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
    },
    sideSpace: {
      top: 5,
      right: 15,
      bottom: 5,
      left: 15,
    },
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
    sublabel: {
      fontSize: 16,
      fontWeight: 500,
      textTransform: "none",
      fontFamily: "sans-serif",
    },
  },
  boxShadows: {
    "1": {
      hOffset: 0.7,
      vOffset: 1.4,
      blur: 4.5,
      spread: 0,
    },
    "2": {
      hOffset: 1.3,
      vOffset: 0.6,
      blur: 9,
      spread: 0.7,
    },
    "4": {
      hOffset: 0.7,
      vOffset: 0,
      blur: 13.1,
      spread: 0.3,
    },
    "8": {
      hOffset: 0.7,
      vOffset: 0,
      blur: 16.1,
      spread: 0.5,
    },
    "16": {
      hOffset: 0.7,
      vOffset: 0,
      blur: 18.1,
      spread: 0.6,
    },
  },
  variants: {
    primaryButton: {
      textColor: "white",
      backgroundColor: "primary",
      boxShadow: "2",
      boxShadowColor: "grey",
      text: "button",
      border: null,
      padding: "single",
      margin: "double",
    },
    dangerButton: {
      textColor: "white",
      backgroundColor: "danger",
      boxShadow: "2",
      boxShadowColor: "grey",
      text: "button",
      border: null,
      padding: "single",
      margin: "double",
    },
    successButton: {
      textColor: "white",
      backgroundColor: "success",
      boxShadow: "2",
      boxShadowColor: "grey",
      text: "button",
      border: null,
      padding: "single",
      margin: "double",
    },
    warningButton: {
      textColor: "white",
      backgroundColor: "warning",
      boxShadow: "2",
      boxShadowColor: "grey",
      text: "button",
      border: null,
      padding: "single",
      margin: "double",
    },
    secondaryButton: {
      textColor: "white",
      backgroundColor: "secondary",
      boxShadow: "2",
      boxShadowColor: "grey",
      text: "button",
      border: null,
      padding: "single",
      margin: "double",
    },
    regularText: {
      textColor: "text",
      text: "regular",
      backgroundColor: null,
      boxShadow: null,
      border: null,
      padding: "single",
      margin: "single",
    },
    labelText: {
      textColor: "text",
      text: "label",
      backgroundColor: null,
      boxShadow: null,
      border: null,
      padding: "single",
      margin: "single",
    },
    sublabelText: {
      textColor: "text",
      text: "sublabel",
      backgroundColor: null,
      boxShadow: null,
      border: null,
      padding: "single",
      margin: "single",
    },
    headerText: {
      textColor: "primary",
      text: "header",
      backgroundColor: null,
      boxShadow: null,
      border: null,
      padding: "single",
      margin: "single",
    },
    highlightText: {
      textColor: "text",
      text: "highlight",
      backgroundColor: null,
      boxShadow: null,
      border: null,
      padding: "single",
      margin: "single",
    },
    buttonText: {
      textColor: "text",
      text: "button",
      backgroundColor: null,
      boxShadow: null,
      border: null,
      padding: "single",
      margin: "single",
    },
    select: {
      backgroundColor: "white",
      border: "secondary",
      borderColor: "primary",
      text: "regular",
      textColor: "text",
      boxShadow: null,
      padding: "sideSpace",
      margin: "double",
    },
    card: {
      backgroundColor: "white",
      border: "primary",
      borderColor: "primary",
      text: "regular",
      textColor: "text",
      boxShadow: "1",
      boxShadowColor: "grey",
      padding: "double",
      margin: "single",
    },
    tabs: {
      backgroundColor: null,
      border: "tabs",
      borderColor: "primary",
      text: "regular",
      textColor: "text",
      boxShadow: null,
      padding: "half",
      margin: "half",
    },
    icon: {
      backgroundColor: "white",
      border: "primary",
      borderColor: "primary",
      text: "regular",
      textColor: "text",
      boxShadow: "1",
      boxShadowColor: "grey",
      padding: "half",
      margin: "half",
    },
    input: {
      backgroundColor: "white",
      border: "tabs",
      borderColor: "text",
      text: "regular",
      textColor: "text",
      boxShadow: "1",
      boxShadowColor: "grey",
      padding: "single",
      margin: "single",
    },
    chip: {
      backgroundColor: "primary",
      text: "label",
      borderColor: "primary",
      border: "chip",
      textColor: "white",
      padding: "single",
      margin: "single",
      boxShadow: "2",
      boxShadowColor: "grey",
    },
    listItem: {
      padding: "sideSpace",
      backgroundColor: null,
      text: "regular",
      textColor: "text",
      margin: null,
      boxShadow: null,
      border: null,
    },
    rangeTrack: {
      padding: null,
      margin: null,
      backgroundColor: "secondaryBackground",
      textColor: "textColor",
      text: "text",
      boxShadow: null,
      border: "slim",
    },
    range: {
      padding: null,
      margin: null,
      backgroundColor: null,
      textColor: "textColor",
      text: "text",
      boxShadow: null,
      border: null,
    },
    rangeThumb: {
      padding: "single",
      margin: null,
      backgroundColor: "primary",
      textColor: "textColor",
      text: "text",
      boxShadow: null,
      border: "round",
    },
  },
};
