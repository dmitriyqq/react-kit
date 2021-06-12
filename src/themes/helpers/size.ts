import { ThemeProps } from "../theme";

interface PropsWidth extends ThemeProps {
  width?: string;
}

const DEFAULT_WIDTH_UNIT = 100;
const DEFAULT_HEIGHT_UNIT = 50;

export const getWidthUnitNumber = ({ theme, width }: PropsWidth) => {
  if (theme?.size?.widthUnit && width && width.endsWith("u")) {
    const widthNum = Number(width.slice(0, width.length - 1));
    return widthNum * theme.size.widthUnit;
  }

  return theme?.size?.widthUnit ? theme?.size?.widthUnit : DEFAULT_WIDTH_UNIT;
};

interface PropsHeight extends ThemeProps {
  height?: string;
}

export const getHeightUnitNumber = ({ theme, height }: PropsHeight) => {
  if (theme?.size?.heightUnit && height && height.endsWith("u")) {
    const widthNum = Number(height.slice(0, height.length - 1));
    return widthNum * theme.size.heightUnit;
  }

  return theme?.size?.heightUnit
    ? theme?.size?.heightUnit
    : DEFAULT_HEIGHT_UNIT;
};

export const getWidthUnit = (props: PropsWidth) => {
  return `${getWidthUnitNumber(props)}px`;
};

export const getHeightUnit = (props: PropsWidth) => {
  return `${getHeightUnitNumber(props)}px`;
};
