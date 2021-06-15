import { Border } from "../../../themes";
import { FC } from "react";
import { List, ListItem } from "../../List";
import { BorderBlock } from "./BorderBlock";
import React from "react";

interface Props {
  borders: { name: string; border: Border }[];
  onBorderSelect: (borderName: string) => void;
}

export const BorderList: FC<Props> = ({ borders, onBorderSelect }) => {
  const handleClick = (borderName?: string) => {
    if (borderName) {
      onBorderSelect(borderName);
    }
  };

  return (
    <List>
      {borders.map(({ border, name }) => (
        <ListItem label={name} onClick={handleClick} id={name} key={name}>
          <BorderBlock border={border} key={name} />
        </ListItem>
      ))}
    </List>
  );
};
