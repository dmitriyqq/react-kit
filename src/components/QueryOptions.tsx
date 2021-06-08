import { SortByComponent } from "./SortByComponent";
import { Filters } from "./Filters";
import { List } from "./List/List";
import {
  FilterField,
  FilterMod,
  FilterType,
  FilterValue,
  QueryOptionsValue,
  SortByField,
  SortByValue,
} from "../model/Filters";
import React from "react";
import { SelectOption } from "./Select";
import { Card } from "./Card/Card";

export interface Props {
  filterFields: FilterField<any>[];
  sortFields: SortByField[];
  modesByType: Record<FilterType, SelectOption<FilterMod>[]>;
  modeStr: Record<FilterMod, string>;
  value: QueryOptionsValue;
  onChange: (queryOptions: QueryOptionsValue) => void;
  createFilterText?: string;
  createSortByText?: string;
}

export const QueryOptions: React.FC<Props> = ({
  filterFields,
  sortFields,
  value,
  onChange,
  modesByType,
  modeStr,
  createFilterText,
  createSortByText,
}) => {
  const handleFilterChange = (filtersValue: FilterValue[]) => {
    onChange({ ...value, filtersValue });
  };

  const handleSortByChange = (sortByValue: SortByValue) => {
    onChange({ ...value, sortByValue });
  };

  return (
    <List mode="h" justify="space-between" align="flex-start" wrapItems={true}>
      <Card style={{ flex: "1 1", margin: "5px" }}>
        <Filters
          fields={filterFields}
          value={value.filtersValue}
          onChange={handleFilterChange}
          modeStr={modeStr}
          modesByType={modesByType}
          createText={createFilterText}
        />
      </Card>
      <Card style={{ flex: "1 1", margin: "5px" }}>
        <SortByComponent
          fields={sortFields}
          onChange={handleSortByChange}
          value={value.sortByValue}
          createText={createSortByText}
        />
      </Card>
    </List>
  );
};
