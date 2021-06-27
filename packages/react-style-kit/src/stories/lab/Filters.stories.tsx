import React, { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { FilterMod, FilterValue } from "../../model/Filters";
import { fields, optionsProvider } from "../autocompleteData";
import { Filters, Props } from "../../components/Filters";

export default {
  title: "Filters",
  component: Filters,
} as Meta;

const Template: Story<Props> = (args) => {
  const [value, setValue] = useState<FilterValue[]>(args.value);
  return (
    <>
      <Filters {...args} value={value} onChange={setValue} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
};

export const FiltersStory = Template.bind({});
FiltersStory.args = {
  fields,
  value: [],
};

export const FiltersInitialValueStory = Template.bind({});
FiltersInitialValueStory.args = {
  fields,
  value: [
    { fieldName: "isAdmin", filterMode: FilterMod.Set },
    { fieldName: "name", filterMode: FilterMod.Equal, filterValue: "Дима" },
    {
      fieldName: "gender",
      filterMode: FilterMod.Contains,
      filterValue: ["Мужской", "Женский"],
    },
    { fieldName: "company", filterMode: FilterMod.Unset },
  ],
};
