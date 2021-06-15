import { FC } from "react";
import { VariantEntity } from "./VariantsTab";
import {
  ThemeProps,
  getHeightUnit,
  getWidthUnit,
  getMainThemeBackgroundColorShade,
  getMainThemeTextColorShade,
  getThemeBorder,
  getThemeBorderRadius,
  getThemeBoxShadow,
  getThemeFontFamily,
  getThemeFontSize,
  getThemeFontWeight,
  getThemePadding,
  getThemeTextTransform,
} from "../../../themes";
import { withTheme } from "styled-components";
import React from "react";

export interface Props extends ThemeProps {
  variant: VariantEntity;
}

export const VariantBlock: FC<Props> = withTheme(
  ({ theme, variant }: Props) => {
    const newTheme: any = {
      ...theme,
      variants: { ...theme?.variants, variant: variant },
    };

    return (
      <div
        style={{
          width: getWidthUnit({ width: "5u", theme }),
          height: getHeightUnit({ height: "2u", theme }),
          color: getMainThemeTextColorShade({
            theme: newTheme,
            variant: "variant",
          }),
          backgroundColor: getMainThemeBackgroundColorShade({
            theme: newTheme,
            variant: "variant",
          }),
          boxShadow: getThemeBoxShadow({
            theme: newTheme,
            variant: "variant",
          }),
          border: getThemeBorder({
            theme: newTheme,
            variant: "variant",
          }),
          borderRadius: getThemeBorderRadius({
            theme: newTheme,
            variant: "variant",
          }),
          fontFamily: getThemeFontFamily({
            theme: newTheme,
            variant: "variant",
          }),
          fontSize: getThemeFontSize({
            theme: newTheme,
            variant: "variant",
          }),
          fontWeight: getThemeFontWeight({
            theme: newTheme,
            variant: "variant",
          }),
          textTransform: getThemeTextTransform({
            theme: newTheme,
            variant: "variant",
          }),
          padding: getThemePadding({
            theme: newTheme,
            variant: "variant",
          }),
          margin: getThemePadding({
            theme: newTheme,
            variant: "variant",
          }),
        }}
      >
        {getThemeFontFamily({ theme: newTheme, variant: "variant" })}
      </div>
    );
  }
);
