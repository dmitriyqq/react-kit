import { withTheme } from "styled-components";
import { Border, Theme } from "../../../themes/theme";
import { getBorderCss, getBorderRadius } from "../../../themes/helpers/border";
import React from "react";

export const BorderBlock = withTheme(
  ({ border, theme }: { border: Border; theme: Theme }) => {
    const newTheme: any = { ...theme, borders: { border } };
    const themeBorder = "border";
    const borderStyle = getBorderCss({
      theme: newTheme,
      themeBorder,
      themeColor: "primary",
    });

    return (
      <div
        style={{
          margin: "10px",
          width: "64px",
          height: "64px",
          border: borderStyle,
          borderRadius: getBorderRadius({ theme: newTheme, themeBorder }),
        }}
      />
    );
  }
);
