import { ThemeProps } from "../types";

interface PropsWidth extends ThemeProps {
  themeWidth?: string;
}

const DEFAULT_WIDTH_UNIT = 100;
const DEFAULT_HEIGHT_UNIT = 50;

export const getWidthUnitNumber = (
  { theme, themeWidth }: PropsWidth,
  defaultWidth?: string
) => {
  const w = themeWidth ?? defaultWidth;

  if (theme?.size?.widthUnit && w && w.endsWith("u")) {
    const widthNum = Number(w.slice(0, w.length - 1));
    return widthNum * theme.size.widthUnit;
  }

  return (
    w ?? (theme?.size?.widthUnit ? theme?.size?.widthUnit : DEFAULT_WIDTH_UNIT)
  );
};

interface PropsHeight extends ThemeProps {
  themeHeight?: string;
}

export const getHeightUnitNumber = (
  { theme, themeHeight }: PropsHeight,
  defaultHeight?: string
) => {
  const h = themeHeight ?? defaultHeight;

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
  return (props.themeWidth || defaultWidth) &&
    (props.themeWidth?.endsWith("u") || defaultWidth?.endsWith("u"))
    ? `${getWidthUnitNumber(props, defaultWidth)}px`
    : props.themeWidth ?? defaultWidth;
};

export const getHeightUnit = (props: PropsHeight, defaultHeight?: string) => {
  return (props.themeHeight || defaultHeight) &&
    (props.themeHeight?.endsWith("u") || defaultHeight?.endsWith("u"))
    ? `${getHeightUnitNumber(props, defaultHeight)}px`
    : props.themeHeight ?? defaultHeight;
};

export interface Props extends PropsWidth, PropsHeight {}
