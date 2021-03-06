import React, { FC } from "react";
import { ListItem, Props as ListItemProps } from "./ListItem";
import { TextType } from "../../themes";
import { FractionComponent } from "../FractionComponent";

interface Props extends ListItemProps {
  numerator: number;
  denominator: number;
  variant?: TextType;
  color?: string;
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
        variant={variant}
        color={color}
        align="center"
      />
    </ListItem>
  );
};
