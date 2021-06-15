import { Props, SortByComponent } from "../../components/SortByComponent";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SortByMode, SortByValue } from "../../model/Filters";
import { sortFields } from "../autocompleteData";
import React, { useState } from "react";

export default {
  title: "SortByComponent",
  component: SortByComponent,
} as Meta;

const Template: Story<Props> = (args) => {
  const [value, setValue] = useState<SortByValue>(args.value);

  return (
    <>
      <SortByComponent {...args} onChange={setValue} value={value} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
};

export const SortByStory = Template.bind({});
SortByStory.args = {
  fields: sortFields,
  value: {
    sortByMode: SortByMode.ASC,
    fieldName: sortFields[0].name,
  },
};
