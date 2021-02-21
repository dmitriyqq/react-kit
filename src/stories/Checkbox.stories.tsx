import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Checkbox, Props } from "../components/Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const CheckboxStory = Template.bind({});
CheckboxStory.args = {
  value: true,
};

export const CheckboxStory2 = Template.bind({});
CheckboxStory2.args = {
  value: false,
};
