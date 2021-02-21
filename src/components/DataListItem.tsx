import React, { FC } from "react";
import { Props as ListItemProps } from "./ListItem";
import { ListItemData, ListItemDataType } from "../model/ListItemData";
import { TextListItem } from "./TextListItem";
import { NumberListItem } from "./NumberListItem";
import { DateTimeListItem } from "./DateTimeListItem";
import { FractionListItem } from "./FractionListItem";

export interface Props extends ListItemProps {
  item: ListItemData;
}

type DataTypeComponents = {
  [dataType in ListItemDataType]: React.FC<any>;
};

const dataTypeComponents: DataTypeComponents = {
  text: TextListItem,
  number: NumberListItem,
  datetime: DateTimeListItem,
  fraction: FractionListItem,
};

export const DataListItem: FC<Props> = ({ item }) => {
  const Component = dataTypeComponents[item.type];

  return <Component {...item} />;
};
