import { TextStyle, ThemeProps } from "../types";

export interface Props extends ThemeProps {
  themeText?: string;
}

const DEFAULT_TEXT_STYLE: TextStyle = {
  fontFamily: "sans-serif",
  fontWeight: 500,
  fontSize: 15,
  textTransform: "none",
};

export const getTextStyle = ({ themeText, theme }: Props): TextStyle => {
  if (theme && !theme?.textStyles[themeText ?? "primary"]) {
    console.warn(`text style ${themeText} is not found in the theme`);
  }

  return theme?.textStyles[themeText ?? "primary"] ?? DEFAULT_TEXT_STYLE;
};

export const getFontSizeNumber = (props: Props) => getTextStyle(props).fontSize;
export const getFontWeight = (props: Props) => getTextStyle(props).fontWeight;

export const getFontFamily = (props: Props) => getTextStyle(props).fontFamily;

export const getFontSize = (props: Props) => `${getFontSizeNumber(props)}px`;

export const getTextTransform = (props: Props) =>
  getTextStyle(props).textTransform;
