import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { RangeInput, Props } from "../components/RangeInput";

export default {
  title: "RangeInput",
  component: RangeInput,
} as Meta;

const Template: Story<Props> = (args) => <RangeInput {...args} />;

export const RangeInputStory = Template.bind({});
RangeInputStory.args = {};
