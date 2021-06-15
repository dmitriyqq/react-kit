import { List, ListItem } from "../../List";
import { ColorPalette } from "./ColorPalette";
import React, { FC } from "react";
import { Color } from "../../../themes";

interface Props {
  colors?: { name: string; color: string }[];
  themeColors?: { name: string; color: Color }[];
  onColorSelected: (colorName?: string) => void;
}

export const ColorPaletteList: FC<Props> = ({
  colors,
  onColorSelected,
  themeColors,
}) => {
  if (colors) {
    return (
      <List>
        {colors.map(({ name, color }) => (
          <ListItem label={name} key={name} id={name} onClick={onColorSelected}>
            <ColorPalette baseColor={color} />
          </ListItem>
        ))}
      </List>
    );
  }

  if (themeColors) {
    return (
      <List>
        {themeColors.map(({ name, color }) => (
          <ListItem label={name} key={name} id={name} onClick={onColorSelected}>
            <ColorPalette themeColor={color} />
          </ListItem>
        ))}
      </List>
    );
  }

  return null;
};
