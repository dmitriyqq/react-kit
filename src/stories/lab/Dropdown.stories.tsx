import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Dropdown, Props } from "../../components/Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<Props> = (args) => {
  return <Dropdown {...args} />;
};

export const DropdownStory = Template.bind({});
DropdownStory.args = {};
