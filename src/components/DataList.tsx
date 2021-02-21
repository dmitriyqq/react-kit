import React, { FC } from "react";
import { ListItemData } from "../model/ListItemData";
import { DataListItem } from "./DataListItem";
import { List } from "./List";
import { ThemeProps } from "../themes/theme";
import { Loader } from "./Loader";
import { Centered } from "./Centered";

export interface Props extends ThemeProps {
  data: ListItemData[];
  isLoading: boolean;
}

export const DataList: FC<Props> = ({ data, isLoading, theme }) => {
  if (isLoading) {
    return (
      <List>
        <Centered>
          <Loader />
        </Centered>
      </List>
    );
  }

  return (
    <List>
      {(data ?? []).map((item, index) => (
        <DataListItem item={item} key={index} theme={theme} />
      ))}
    </List>
  );
};
