import { ThemeProps } from "../types";

interface PropsWidth extends ThemeProps {
  width?: string;
}

const DEFAULT_WIDTH_UNIT = 100;
const DEFAULT_HEIGHT_UNIT = 50;

export const getWidthUnitNumber = (
  { theme, width }: PropsWidth,
  defaultWidth?: string
) => {
  const w = width ?? defaultWidth;

  if (theme?.size?.widthUnit && w && w.endsWith("u")) {
    const widthNum = Number(w.slice(0, w.length - 1));
    return widthNum * theme.size.widthUnit;
  }

  return (
    w ?? (theme?.size?.widthUnit ? theme?.size?.widthUnit : DEFAULT_WIDTH_UNIT)
  );
};

interface PropsHeight extends ThemeProps {
  height?: string;
}

export const getHeightUnitNumber = (
  { theme, height }: PropsHeight,
  defaultHeight?: string
) => {
  const h = height ?? defaultHeight;

  if (theme?.size?.heightUnit && h && h.endsWith("u")) {
    const widthNum = Number(h.slice(0, h.length - 1));
    return widthNum * theme.size.heightUnit;
  }

  return (
    h ??
    (theme?.size?.heightUnit ? theme?.size?.heightUnit : DEFAULT_HEIGHT_UNIT)
  );
};

export const getWidthUnit = (props: PropsWidth, defaultWidth?: string) => {
  return (props.width || defaultWidth) &&
    (props.width?.endsWith("u") || defaultWidth?.endsWith("u"))
    ? `${getWidthUnitNumber(props, defaultWidth)}px`
    : props.width ?? defaultWidth;
};

export const getHeightUnit = (props: PropsHeight, defaultHeight?: string) => {
  return (props.height || defaultHeight) &&
    (props.height?.endsWith("u") || defaultHeight?.endsWith("u"))
    ? `${getHeightUnitNumber(props, defaultHeight)}px`
    : props.height ?? defaultHeight;
};

export interface Props extends PropsWidth, PropsHeight {}
