import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Chip, Props } from "../components/Chip";

export default {
  title: "Chip",
  component: Chip,
} as Meta;

const Template: Story<Props> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Test chip",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Secondary chip",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
  children: "Warning chip",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
  children: "Danger chip",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
  children: "Success chip",
};
