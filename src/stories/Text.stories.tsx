import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Props, Text } from "../components/Text";

export default {
  title: "Text",
  component: Text,
} as Meta;

const Template: Story<Props> = (args) => <Text {...args} />;

export const Header = Template.bind({});
Header.args = {
  children: "Test header typography",
  variant: "headerText",
  themeColor: "primary",
};

export const Highlight = Template.bind({});
Highlight.args = {
  children: "Test highlight typography",
  variant: "highlightText",
  themeColor: "primary",
};

export const Regular = Template.bind({});
Regular.args = {
  children: "Test regular typography",
  variant: "regularText",
  themeColor: "text",
};

export const Label = Template.bind({});
Label.args = {
  children: "Test label typography",
  variant: "labelText",
  themeColor: "text",
};

export const Button = Template.bind({});
Button.args = {
  children: "Test button typography",
  variant: "buttonText",
  themeColor: "black",
};

export const Emoji = Template.bind({});
Emoji.args = {
  children: "Test text with emoji 🚀",
  variant: "regularText",
  themeColor: "primary",
};

export const Emoji2 = Template.bind({});
Emoji2.args = {
  children: "Test text with emoji 🚀2",
  variant: "regularText",
  themeColor: "primary",
};
