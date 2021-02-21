import React, { FC } from "react";
import { ListItem, Props as ListItemProps } from "./ListItem";
import { TextColor } from "./Text";
import { TextType } from "../themes/theme";
import { FractionComponent } from "./FractionComponent";

interface Props extends ListItemProps {
  numerator: number;
  denominator: number;
  variant?: TextType;
  color?: TextColor;
}

export const FractionListItem: FC<Props> = ({
  numerator,
  denominator,
  variant,
  color,
  ...rest
}) => {
  return (
    <ListItem {...rest}>
      <FractionComponent
        numerator={numerator}
        denominator={denominator}
        color={color}
        theme={rest.theme}
        align="center"
      />
    </ListItem>
  );
};
