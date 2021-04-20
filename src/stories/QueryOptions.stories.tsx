import { Meta, Story } from "@storybook/react/types-6-0";
import { Props, QueryOptions } from "../components/QueryOptions";
import { fields, sortFields } from "./autocompleteData";
import React, { useState } from "react";
import { QueryOptionsValue, SortByMode } from "../model/Filters";

export default {
  title: "QueryOptions",
  component: QueryOptions,
} as Meta;

const Template: Story<Props> = (args) => {
  const [value, setValue] = useState<QueryOptionsValue>({
    filtersValue: [],
    sortByValue: { fieldName: fields[0].name, sortByMode: SortByMode.ASC },
  });

  return (
    <div>
      <QueryOptions {...args} value={value} onChange={setValue} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};

export const QueryOptionsStory = Template.bind({});
QueryOptionsStory.args = {
  filterFields: fields,
  sortFields: sortFields,
  submitFilterText: "Добавить",
};
