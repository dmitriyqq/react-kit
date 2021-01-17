import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, Text } from "../components/Text";

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story<Props> = (args) => (<Text {...args} />);

export const Header = Template.bind({});
Header.args = {
  children: "Test header typography",
  variant: "header",
  color: "primary"
};

export const Highlight = Template.bind({});
Highlight.args = {
  children: "Test highlight typography",
  variant: "highlight",
  color: "primary"
};

export const Regular = Template.bind({});
Regular.args = {
  children: "Test regular typography",
  variant: "regular",
  color: "text"
};

export const Label = Template.bind({});
Label.args = {
  children: "Test label typography",
  variant: "label",
  color: "text"
};

export const Button = Template.bind({});
Button.args = {
  children: "Test button typography",
  variant: "button",
  color: "black"
};

export const Emoji = Template.bind({});
Emoji.args = {
  children: "Test text with emoji 🚀",
  variant: "regular",
  color: "primary"
};

export const Emoji2 = Template.bind({});
Emoji2.args = {
  children: "Test text with emoji 🚀2",
  variant: "regular",
  color: "primary"
};