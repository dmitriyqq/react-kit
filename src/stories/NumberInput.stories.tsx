import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { NumberInput, Props } from "../components/NumberInput";

export default {
  title: "NumberInput",
  component: NumberInput,
} as Meta;

const Template: Story<Props> = (args) => <NumberInput {...args} />;

export const NumberInputStory = Template.bind({});
NumberInputStory.args = {
  value: 420.69,
};
