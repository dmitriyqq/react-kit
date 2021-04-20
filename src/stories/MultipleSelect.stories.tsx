import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { MultipleSelect, Props } from "../components/MultipleSelect";
import { SelectOption } from "../components/Select";

export default {
  title: "MultipleSelect",
  component: MultipleSelect,
} as Meta;

const options = [
  { label: "option 1", value: "option 1", id: "option 1" },
  { label: "option 2", value: "option 2", id: "option 2" },
  { label: "option 3", value: "option 3", id: "option 3" },
];

const Template: Story<Props<string>> = (args) => {
  const [value, setValue] = useState<SelectOption<string>[]>([]);

  return (
    <MultipleSelect<string>
      {...args}
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

export const SelectStory = Template.bind({});
SelectStory.args = {};
