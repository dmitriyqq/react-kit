import { Border, ThemeProps } from "../theme";
import {
  getColorShade,
  getDarkColorShade,
  getDarkDisabledShade,
} from "./color";

interface Props extends ThemeProps {
  themeBorder?: string;
}

const DEFAULT_BORDER: Border = {
  style: "solid",
  width: 1,
  radius: 5,
};

export const getBorder = ({ theme, themeBorder }: Props): Border => {
  if (theme && !theme.borders[themeBorder ?? "primary"]) {
    console.warn(`border ${themeBorder} is not found in the theme`);
  }

  return theme?.borders[themeBorder ?? "primary"] ?? DEFAULT_BORDER;
};

const getBorderStyle = (props: Props) => getBorder(props).style;
const getBorderWidth = (props: Props) => getBorder(props).width;
const getBorderRadiusNumber = (props: Props) => getBorder(props).radius;

const getBorderWidthPx = (props: Props) => `${getBorderWidth(props)}px`;
export const getBorderRadius = (props: Props) =>
  `${getBorderRadiusNumber(props)}px`;

interface ColorProps extends Props {
  themeColor?: string;
}

export const getBorderCss = (props: ColorProps) =>
  // prettier-ignore
  `${getBorderWidthPx(props)} ${getBorderStyle(props)} ${getDarkColorShade(props)}`;

export const getBorderDisabledCss = (props: ColorProps) =>
  // prettier-ignore
  `${getBorderWidthPx(props)} ${getBorderStyle(props)} ${getDarkDisabledShade(props)}`;
