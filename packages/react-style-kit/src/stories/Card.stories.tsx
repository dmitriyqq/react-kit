import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Card, Props } from "../components/Card/Card";
import { Text } from "../components/Text";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: Story<Props> = (args) => <Card {...args} />;

export const CardStory = Template.bind({});
CardStory.args = {
  children: <Text>Hello world!</Text>,
};

export const CardStorySelect = Template.bind({});
CardStorySelect.args = {
  children: <Text>Hello world!</Text>,
  canSelect: true,
};
