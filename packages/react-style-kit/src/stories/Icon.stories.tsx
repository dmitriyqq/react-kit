import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Icon, Props } from "../components/Icon";
import { Text } from "../components/Text";
import { Button } from "../components/Button";

export default {
  title: "Icon",
  component: Icon,
} as Meta;

const Template: Story<Props> = (args) => (
  <Text>
    Иконка <Icon {...args} />
  </Text>
);

export const IconStory = Template.bind({});
IconStory.args = {
  icon: "24-hours",
  color: "grey",
  size: "1x",
  onClick: undefined,
};

const TemplateOnClick: Story<Props> = (args) => <Icon {...args} />;

export const IconOnClickStory = TemplateOnClick.bind({});
IconOnClickStory.args = {
  icon: "24-hours",
  color: "grey",
};

const ButtonTemplate: Story<Props> = (args) => (
  <Button icon="24-hours">Тест</Button>
);

export const ButtonIconStory = ButtonTemplate.bind({});
ButtonIconStory.args = {
  icon: "24-hours",
  color: "white",
};

const ButtonOnlyTemplate: Story<Props> = (args) => <Button icon="24-hours" />;

export const ButtonOnlyIconStory = ButtonOnlyTemplate.bind({});
ButtonOnlyIconStory.args = {
  icon: "24-hours",
  color: "white",
};

export const ButtonHoverColorStory = Template.bind({});
ButtonHoverColorStory.args = {
  icon: "24-hours",
  hoverColor: "danger",
  color: "success",
};

export const ButtonHoverCustomColorStory = Template.bind({});
ButtonHoverCustomColorStory.args = {
  icon: "24-hours",
  hoverColor: "aquamarine",
  color: "firebrick",
};
