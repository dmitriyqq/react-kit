import React, { FC } from "react";
import { ListItemData } from "../../model/ListItemData";
import { DataListItem } from "./DataListItem";
import { List } from "./List";
import { Loader } from "../Loader";
import { Centered } from "../Centered";

export interface Props {
  data: ListItemData[];
  onClick?: (id?: string) => void;
  onNav?: (id?: string) => void;
  onDelete?: (id?: string) => void;
  onAction?: (action: string, id?: string) => void;
  isLoading: boolean;
}

export const DataList: FC<Props> = ({
  data,
  isLoading,
  onClick,
  onNav,
  onAction,
  onDelete,
}) => {
  if (isLoading) {
    return (
      <List>
        <Centered>
          <Loader />
        </Centered>
      </List>
    );
  }

  const handleClick = (id?: string) => {
    if (onClick) {
      onClick(id);
    }
  };

  const handleNav = (id?: string) => {
    if (onNav) {
      onNav(id);
    }
  };

  const handleDelete = (id?: string) => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const handleAction = (action: string, id?: string) => {
    if (onAction) {
      onAction(action, id);
    }
  };

  return (
    <List>
      {(data ?? []).map((item, index) => (
        <DataListItem
          {...item}
          key={index}
          onClick={onClick && handleClick}
          onNav={onNav && handleNav}
          onDelete={onDelete && handleDelete}
          onAction={onAction && handleAction}
        />
      ))}
    </List>
  );
};
