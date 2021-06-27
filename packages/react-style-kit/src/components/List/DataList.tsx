import React, { FC } from "react";
import { ListItemData } from "../../model";
import { DataListItem } from "./DataListItem";
import { List } from "./List";
import { Loader } from "../Loader";
import { Centered } from "../Centered";
import { Text } from "../Text";
import { ListItem } from "./ListItem";
import { Icon } from "../Icon";

export interface Props {
  data: ListItemData[];
  selectedIds?: string[];
  selectType?: "single" | "multiple";
  onSelect?: (selectedIds: string[] | string | null) => void;
  onClick?: (id?: string) => void;
  onNav?: (id?: string) => void;
  onDelete?: (id?: string) => void;
  onAction?: (action: string, id?: string) => void;
  isLoading: boolean;
  gridArea?: string;
}

export const DataList: FC<Props> = ({
  data,
  isLoading,
  onClick,
  onNav,
  onAction,
  onDelete,
  onSelect,
  selectedIds,
  selectType,
  gridArea,
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

  const isSingleSelect = selectType === "single";

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

  const handleSelected = (value: boolean, id?: string) => {
    if (!onSelect || !id) {
      return;
    }

    if (isSingleSelect) {
      onSelect([id]);
      return;
    }

    if (value) {
      onSelect([...(selectedIds ?? []), id]);
      return;
    }

    onSelect((selectedIds ?? []).filter((selectedId) => selectedId !== id));
  };

  const handleClearSelected = () => {
    if (onSelect) {
      onSelect([]);
    }
  };

  const selectedSet = new Set<string | undefined>(selectedIds ?? []);

  return (
    <List gridArea={gridArea}>
      {onSelect && !isSingleSelect && Number(selectedIds?.length) > 0 && (
        <ListItem>
          <List mode="h" align="center" justify="center">
            <Text variant="labelText">Выбрано: {selectedIds?.length}</Text>
            <Icon icon="close" onClick={handleClearSelected} />
          </List>
        </ListItem>
      )}
      {(data ?? []).map((item, index) => (
        <DataListItem
          {...item}
          key={index}
          selected={onSelect && Boolean(item.id) && selectedSet.has(item.id)}
          onClick={onClick && handleClick}
          onNav={onNav && handleNav}
          onDelete={onDelete && handleDelete}
          onAction={onAction && handleAction}
          onSelect={handleSelected}
        />
      ))}
    </List>
  );
};
