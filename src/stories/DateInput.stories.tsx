import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { DateInput, Props } from "../components/DateInput";

export default {
  title: "DateInput",
  component: DateInput,
} as Meta;

const Template: Story<Props> = (args) => <DateInput {...args} />;

export const DateInputStory = Template.bind({});
DateInputStory.args = {
  value: new Date(),
};

export const DateInputStory2 = Template.bind({});
DateInputStory2.args = {
  value: new Date(),
  disabled: true,
};

const Template2: Story<Props> = (args) => {
  const [value, setValue] = useState<Date | null>(null);

  return <DateInput {...args} value={value} onChange={setValue} />;
};
export const DateInputStory3 = Template2.bind({});
DateInputStory3.args = {
  value: new Date(),
};
