import React, { FC } from "react";
import { ListItem, Props as ListItemProps } from "./ListItem";
import { ComponentProps, TextType } from "../../themes";
import { NumberComponent } from "../NumberComponent";

interface Props extends ListItemProps, ComponentProps {
  num: number;
  isInteger?: true;
  rounding?: number;
  variant?: TextType;
}

export const NumberListItem: FC<Props> = ({
  num,
  variant,
  themeColor,
  ...rest
}) => {
  return (
    <ListItem {...rest}>
      <NumberComponent
        num={num}
        variant={variant}
        themeColor={themeColor}
        align="center"
      />
    </ListItem>
  );
};
