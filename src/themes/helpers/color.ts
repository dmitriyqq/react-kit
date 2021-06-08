import { Color, ShadeType, ThemeProps } from "../theme";

interface Props extends ThemeProps {
  themeColor?: string;
}

const DEFAULT_COLOR = {
  100: "#000000",
  200: "#383348",
  300: "#4e3d91",
  500: "#5451d6",
  400: "#595cdf",
  600: "#5653da",
  700: "#5a57e6",
  800: "#5f5cf3",
  900: "#6461ff",
};

export const getColor = ({ themeColor, theme }: Props): Color => {
  if (theme && !theme?.colors[themeColor ?? "primary"]) {
    console.warn(`color ${themeColor} is not found in the theme`);
  }

  return theme?.colors[themeColor ?? "primary"] ?? DEFAULT_COLOR;
};

export const getColorShade = (
  getColor: (props: Props) => Color,
  shade: ShadeType
) => ({ themeColor, theme }: Props) => getColor({ themeColor, theme })[shade];

export const getDisabledColor = ({ theme }: ThemeProps) =>
  theme?.colors?.disabled ?? DEFAULT_COLOR;

export const getMainColorShade = getColorShade(getColor, "500");
export const getDarkColorShade = getColorShade(getColor, "300");
export const getLightColorShade = getColorShade(getColor, "700");
export const getLightestColorShade = getColorShade(getColor, "900");
export const getDarkestColorShade = getColorShade(getColor, "100");

export const getMainDisabledShade = getColorShade(getDisabledColor, "500");
export const getDarkDisabledShade = getColorShade(getDisabledColor, "300");
export const getLightDisabledShade = getColorShade(getDisabledColor, "700");
export const getLightestDisabledShade = getColorShade(getDisabledColor, "900");
export const getDarkestDisabledShade = getColorShade(getDisabledColor, "100");
