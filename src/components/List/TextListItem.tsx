import React, { FC } from "react";
import { ListItem, Props as ListItemProps } from "./ListItem";
import { Text } from "../Text";
import { TextType } from "../../themes";

interface Props extends ListItemProps {
  text: string;
  variant?: TextType;
  color?: string;
}

export const TextListItem: FC<Props> = ({ text, variant, color, ...rest }) => {
  return (
    <ListItem {...rest}>
      <Text align="center" variant={variant} color={color}>
        {text}
      </Text>
    </ListItem>
  );
};
