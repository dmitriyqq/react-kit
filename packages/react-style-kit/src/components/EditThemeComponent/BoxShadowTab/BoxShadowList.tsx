import React from "react";
import { FC } from "react";
import { List, ListItem } from "../../List";
import { BoxShadowEntity } from "./BoxShadowTab";
import { BoxShadowComponent } from "./BoxShadowComponent";

interface Props {
  boxShadows: BoxShadowEntity[];
  onBoxShadowSelected: (boxShadow: BoxShadowEntity) => void;
}

export const BoxShadowList: FC<Props> = ({
  boxShadows,
  onBoxShadowSelected,
}) => {
  const handleBoxShadowSelected = (id?: string) => {
    const selectedBoxShadow = boxShadows.find((b) => b.boxShadowName === id);
    if (id && selectedBoxShadow) {
      onBoxShadowSelected({ ...selectedBoxShadow, boxShadowName: id });
    }
  };

  return (
    <List>
      {boxShadows.map((boxShadow) => (
        <ListItem
          key={boxShadow.boxShadowName}
          id={boxShadow.boxShadowName}
          label={boxShadow.boxShadowName}
          onClick={handleBoxShadowSelected}
        >
          <BoxShadowComponent boxShadow={boxShadow} />
        </ListItem>
      ))}
    </List>
  );
};
