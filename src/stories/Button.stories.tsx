import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, Props } from "../components/Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Test button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Secondary button",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
  children: "Warning button",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
  children: "Danger button",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
  children: "Success button",
};

export const Emoji = Template.bind({});
Emoji.args = {
  color: "primary",
  children: "Emoji button 🚀",
};
