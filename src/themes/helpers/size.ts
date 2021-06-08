import { ThemeProps } from "../theme";

interface PropsWidth extends ThemeProps {
  width?: string;
}

const DEFAULT_WIDTH_UNIT = 100;
const DEFAULT_HEIGHT_UNIT = 50;

export const getWidth = ({ theme, width }: PropsWidth) => {
  if (theme?.size?.widthUnit && width && width.endsWith("u")) {
    const widthNum = Number(width.slice(0, width.length - 1));
    return `${widthNum * theme.size.widthUnit}px`;
  }

  return theme?.size?.widthUnit
    ? `${theme?.size?.widthUnit}px`
    : `${DEFAULT_WIDTH_UNIT}px`;
};

interface PropsHeight extends ThemeProps {
  height?: string;
}

export const getHeight = ({ theme, height }: PropsHeight) => {
  if (theme?.size?.heightUnit && height && height.endsWith("u")) {
    const widthNum = Number(height.slice(0, height.length - 1));
    return `${widthNum * theme.size.heightUnit}px`;
  }

  return theme?.size?.heightUnit
    ? `${theme?.size?.heightUnit}px`
    : `${DEFAULT_HEIGHT_UNIT}px`;
};
