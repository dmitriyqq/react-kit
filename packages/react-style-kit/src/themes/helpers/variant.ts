import { Color, ShadeType, ThemeProps } from "../types";
import { getColor, ColorProps } from "../helpers";
import { getBoxShadowStyle, Props as BoxShadowProps } from "./boxShadow";
import {
  getFontFamily,
  getFontSize,
  getTextTransform,
  getFontWeight,
  Props as TextProps,
} from "./text";
import { BorderProps, getBorderCss, getBorderRadius } from "./border";
import { Props as SpacingProps, getSpacingStyle } from "./spacing";

export interface VariantProps
  extends ThemeProps,
    ColorProps,
    BoxShadowProps,
    TextProps,
    BorderProps,
    SpacingProps,
    ThemeProps {
  variant?: string;
}

export const getVariant = (
  { variant, theme }: VariantProps,
  defaultVariant?: string
) => {
  return theme?.variants[variant ?? defaultVariant ?? "primary"];
};

type getColorFunc = (props: VariantProps, defaultVariant?: string) => Color;

export const getColorShade = (getColor: getColorFunc, shade: ShadeType) => (
  props: VariantProps,
  defaultVariant?: string
) => {
  return getColor(props, defaultVariant)[shade];
};

export const getThemeTextColor = (
  props: VariantProps,
  defaultVariant?: string
) =>
  getColor({
    theme: props.theme,
    themeColor:
      props.themeColor ?? getVariant(props, defaultVariant)?.textColor,
  });

export const getMainThemeTextColorShade = getColorShade(
  getThemeTextColor,
  "500"
);
export const getDarkThemeTextColorShade = getColorShade(
  getThemeTextColor,
  "300"
);
export const getLightThemeTextColorShade = getColorShade(
  getThemeTextColor,
  "700"
);
export const getLightestTextColorShade = getColorShade(
  getThemeTextColor,
  "900"
);
export const getDarkestThemeTextColorShade = getColorShade(
  getThemeTextColor,
  "100"
);

export const getThemeBackgroundColor = (
  props: VariantProps,
  defaultVariant?: string
) =>
  getColor({
    theme: props.theme,
    themeColor:
      props.themeColor ?? getVariant(props, defaultVariant)?.backgroundColor,
  });

export const getMainThemeBackgroundColorShade = getColorShade(
  getThemeBackgroundColor,
  "500"
);
export const getDarkThemeBackgroundColorShade = getColorShade(
  getThemeBackgroundColor,
  "300"
);
export const getLightThemeBackgroundColorShade = getColorShade(
  getThemeBackgroundColor,
  "700"
);
export const getLightestThemeBackgroundColorShade = getColorShade(
  getThemeBackgroundColor,
  "900"
);
export const getDarkestThemeBackgroundColorShade = getColorShade(
  getThemeBackgroundColor,
  "100"
);

export const getThemeBoxShadow = (
  props: VariantProps,
  defaultVariant?: string
) =>
  getBoxShadowStyle({
    theme: props.theme,
    themeBoxShadow:
      props.themeBoxShadow ?? getVariant(props, defaultVariant)?.boxShadow,
  });

export const getThemeFontFamily = (
  props: VariantProps,
  defaultVariant?: string
) =>
  getFontFamily({
    theme: props.theme,
    themeText: props.themeText ?? getVariant(props, defaultVariant)?.text,
  });

export const getThemeFontSize = (
  props: VariantProps,
  defaultVariant?: string
) =>
  getFontSize({
    theme: props.theme,
    themeText: props.themeText ?? getVariant(props, defaultVariant)?.text,
  });

export const getThemeFontWeight = (
  props: VariantProps,
  defaultVariant?: string
) =>
  getFontWeight({
    theme: props.theme,
    themeText: props.themeText ?? getVariant(props, defaultVariant)?.text,
  });

export const getThemeTextTransform = (
  props: VariantProps,
  defaultVariant?: string
) =>
  getTextTransform({
    theme: props.theme,
    themeText: props.themeText ?? getVariant(props, defaultVariant)?.text,
  });

export const getThemeBorder = (props: VariantProps, defaultVariant?: string) =>
  getBorderCss({
    theme: props.theme,
    themeBorderColor:
      props.themeBorderColor ?? getVariant(props, defaultVariant)?.borderColor,
    themeBorder: props.themeBorder ?? getVariant(props, defaultVariant)?.border,
  });

export const getThemeBorderRadius = (
  props: VariantProps,
  defaultVariant?: string
) =>
  getBorderRadius({
    theme: props.theme,
    themeBorder: props.themeBorder ?? getVariant(props, defaultVariant)?.border,
  });

export const getThemeMargin = (props: VariantProps, defaultVariant?: string) =>
  getSpacingStyle({
    theme: props.theme,
    themeSpacing:
      props.themeSpacing ?? getVariant(props, defaultVariant)?.margin,
  });

export const getThemePadding = (props: VariantProps, defaultVariant?: string) =>
  getSpacingStyle({
    theme: props.theme,
    themeSpacing:
      props.themeSpacing ?? getVariant(props, defaultVariant)?.padding,
  });
