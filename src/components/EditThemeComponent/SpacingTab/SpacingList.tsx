import React from "react";
import { Spacing } from "../../../themes";
import { List, ListItem } from "../../List";
import { FC } from "react";
import { getSpacingDisplayString } from "./SpacingTab";

interface Props {
  spacings: { name: string; spacing: Spacing }[];
  onSpacingSelected: (spacingName: string) => void;
}

export const SpacingList: FC<Props> = ({ spacings, onSpacingSelected }) => {
  return (
    <List>
      {spacings.map(({ name, spacing }) => (
        <ListItem
          key={name}
          label={name}
          id={name}
          onClick={() => onSpacingSelected(name)}
        >
          {getSpacingDisplayString(spacing)}
        </ListItem>
      ))}
    </List>
  );
};
