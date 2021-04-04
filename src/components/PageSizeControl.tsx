import React, { FC } from "react";
import { Select, SelectOption } from "./Select";
import { Text } from "./Text";
import { List } from "./List/List";

interface Props {
  totalResults: number;
  totalPages: number;
  pageSize: number;
  onPageSizeChanged: (pageSize: number) => void;
  pageSizeOptions: SelectOption<number>[];
}

export const PageSizeControl: FC<Props> = ({
  totalResults,
  pageSize,
  onPageSizeChanged,
  pageSizeOptions,
  totalPages,
}) => {
  const handlePageSizeSelected = (
    pageSizeOption: SelectOption<number> | null
  ) => {
    if (pageSizeOption) {
      onPageSizeChanged(pageSizeOption.value);
    }
  };

  return (
    <List mode="h" justify="space-between">
      <Select
        onChange={handlePageSizeSelected}
        options={pageSizeOptions}
        value={pageSizeOptions.find((o) => o.value === pageSize) ?? null}
      />
      <Text variant={"label"}>
        Total results: {totalResults}, pages: {totalPages}.
      </Text>
    </List>
  );
};
