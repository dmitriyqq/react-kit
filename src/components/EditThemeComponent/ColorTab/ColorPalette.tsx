import React, { FC } from "react";
import { List } from "../../List";
import { ColorBlock } from "./ColorBlock";
import { buildHexColor, generateColorPalette } from "./generateColorPalette";
import { Color } from "../../../themes/theme";

interface Props {
  baseColor?: string;
  themeColor?: Color;
  minSaturation?: number;
  maxSaturation?: number;
  minValue?: number;
  maxValue?: number;
}

export const ColorPalette: FC<Props> = ({
  baseColor,
  themeColor,
  minSaturation,
  maxSaturation,
  minValue,
  maxValue,
}) => {
  if (baseColor) {
    const colors = generateColorPalette(
      baseColor,
      minSaturation,
      maxSaturation,
      minValue,
      maxValue
    );

    return (
      <List
        mode="h"
        justify="flex-start"
        align="center"
        style={{ width: "100%" }}
      >
        {colors.map((c, i) => {
          return <ColorBlock key={i} color={buildHexColor(c)} />;
        })}
      </List>
    );
  }

  if (themeColor) {
    return (
      <List
        mode="h"
        justify="flex-start"
        align="center"
        style={{ width: "100%" }}
      >
        {Object.keys(themeColor).map((key: string) => (
          <ColorBlock key={key} color={(themeColor as any)[key as any]} />
        ))}
      </List>
    );
  }

  return null;
};
