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
  themeColor: "secondary",
  children: "Secondary chip",
};

export const Warning = Template.bind({});
Warning.args = {
  themeColor: "warning",
  children: "Warning chip",
};

export const Danger = Template.bind({});
Danger.args = {
  themeColor: "danger",
  children: "Danger chip",
};

export const Success = Template.bind({});
Success.args = {
  themeColor: "success",
  children: "Success chip",
};

const Template2: Story<Props> = (args) => <Chip {...args} />;

export const SuccessWithDelete = Template2.bind({});
SuccessWithDelete.args = {
  themeColor: "success",
  id: "123",
  children: "Success with delete chip",
};
