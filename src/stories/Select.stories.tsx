import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Select, Props, SelectOption } from "../components/Select";
import { Company, data } from "./autocompleteData";
import { Button } from "../components/Button";
import { MultipleSelect } from "../components/MultipleSelect";

export default {
  title: "Select",
  component: Select,
} as Meta;

const Template: Story<Props<string>> = (args) => <Select {...args} />;

export const SelectStory = Template.bind({});
SelectStory.args = {
  options: [
    { label: "option 1", value: "option 1", id: "option 1" },
    { label: "option 2", value: "option 2", id: "option 2" },
    { label: "option 3", value: "option 3", id: "option 3" },
  ],
};

const ControlledSelectTemplate: Story<Props<Company>> = (args) => {
  const [value, setValue] = useState<SelectOption<Company> | null>(null);
  return (
    <>
      <Select<Company> {...args} value={value} onChange={setValue} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <Button onClick={() => setValue(data[0])}>{data[0].label}</Button>
      <Button onClick={() => setValue(data[1])}>{data[1].label}</Button>
      <Button onClick={() => setValue(data[2])}>{data[2].label}</Button>
    </>
  );
};
export const ControlledSelectStory = ControlledSelectTemplate.bind({});
ControlledSelectStory.args = {
  options: data,
};

const ControlledMultipleSelectTemplate: Story<Props<Company>> = (args) => {
  const [value, setValue] = useState<SelectOption<Company>[]>([]);
  return (
    <>
      <MultipleSelect<Company> {...args} value={value} onChange={setValue} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <Button onClick={() => setValue([data[0]])}>{data[0].label}</Button>
      <Button onClick={() => setValue([data[0], data[1]])}>
        {data[0].label} {data[1].label}
      </Button>
      <Button onClick={() => setValue([data[0], data[1], data[2]])}>
        {data[0].label} {data[1].label} {data[2].label}
      </Button>
    </>
  );
};
export const ControlledMultipleSelectStory = ControlledMultipleSelectTemplate.bind(
  {}
);
ControlledMultipleSelectStory.args = {
  options: data,
};
