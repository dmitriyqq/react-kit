import React from "react";
import { List, ListItem } from "../../List";
import { FC } from "react";
import { TextStyle } from "../../../themes";
import { TextBlock } from "./TextBlock";

interface Props {
  textStyles: { name: string; textStyle: TextStyle }[];
  onTextStyleSelected: (spacingName: string) => void;
}

export const TextList: FC<Props> = ({ textStyles, onTextStyleSelected }) => {
  return (
    <List>
      {textStyles.map(({ name, textStyle }) => (
        <ListItem
          key={name}
          label={name}
          id={name}
          onClick={() => onTextStyleSelected(name)}
        >
          <TextBlock textStyle={textStyle} />
        </ListItem>
      ))}
    </List>
  );
};
