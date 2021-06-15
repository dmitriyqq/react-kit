import React from "react";
import { getBoxShadowStyle, Theme } from "../../../themes";
import { withTheme } from "styled-components";
import { BoxShadowEntity } from "./BoxShadowTab";

export const BoxShadowComponent = withTheme(
  ({ boxShadow, theme }: { boxShadow: BoxShadowEntity; theme: Theme }) => {
    const newTheme: any = {
      ...theme,
      boxShadows: { ...theme.boxShadows, boxShadow: boxShadow },
    };

    return (
      <div
        style={{
          margin: "10px",
          width: "64px",
          height: "64px",
          boxShadow: getBoxShadowStyle({
            theme: newTheme,
            themeBoxShadow: "boxShadow",
          }),
        }}
      />
    );
  }
);
