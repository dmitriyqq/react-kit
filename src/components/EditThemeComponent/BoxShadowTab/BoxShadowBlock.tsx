import { getBorderCss, getBorderRadius } from "../../../themes/helpers/border";
import React from "react";
import { BoxShadow, Theme } from "../../../themes/theme";
import { withTheme } from "styled-components";
import { getBoxShadowStyle } from "../../../themes/helpers/boxShadow";

export const BorderBlock = withTheme(
  ({ boxShadow }: { boxShadow: BoxShadow; theme: Theme }) => {
    return (
      <div
        style={{
          margin: "10px",
          width: "64px",
          height: "64px",
          boxShadow: getBoxShadowStyle(boxShadow),
        }}
      />
    );
  }
);
