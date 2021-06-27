import { withTheme } from "styled-components";
import { Border, Theme, getBorderCss, getBorderRadius } from "../../../themes";
import React from "react";

export const BorderBlock = withTheme(
  ({ border, theme }: { border: Border; theme: Theme }) => {
    const newTheme: any = { ...theme, borders: { border } };
    const themeBorder = "border";
    const borderStyle = getBorderCss({
      theme: newTheme,
      themeBorder,
      themeBorderColor: "primary",
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
