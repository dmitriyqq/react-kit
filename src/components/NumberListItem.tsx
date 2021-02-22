import React, { FC } from "react";
import { ListItem, Props as ListItemProps } from "./ListItem";
import { TextColor } from "./Text";
import { TextType } from "../themes/theme";
import { NumberComponent } from "./NumberComponent";

interface Props extends ListItemProps {
  num: number;
  isInteger?: true;
  rounding?: number;
  variant?: TextType;
  color?: TextColor;
}

export const NumberListItem: FC<Props> = ({ num, variant, color, ...rest }) => {
  return (
    <ListItem {...rest}>
      <NumberComponent
        num={num}
        variant={variant}
        color={color}
        align="center"
      />
    </ListItem>
  );
};
