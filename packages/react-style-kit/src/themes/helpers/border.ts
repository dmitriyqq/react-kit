import { Border, ThemeProps } from "../types";
import { getMainColorShade, getDarkDisabledShade } from "./color";

export interface Props extends ThemeProps {
  themeBorder?: string | null;
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

export interface BorderProps extends Props {
  themeBorderColor?: string;
}

export const getBorderCss = (props: BorderProps) =>
  props.themeBorder
    ? // prettier-ignore
      `${getBorderWidthPx(props)} ${getBorderStyle(props)} ${getMainColorShade({ theme: props.theme, themeColor: props.themeBorderColor})}`
    : "none";

export const getBorderDisabledCss = (props: BorderProps) =>
  props.themeBorder
    ? // prettier-ignore
      `${getBorderWidthPx(props)} ${getBorderStyle(props)} ${getDarkDisabledShade(props)}`
    : "none";
