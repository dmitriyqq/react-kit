import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { RoundedImage, Props } from "../components/RoundedImage";

export default {
  title: "RoundedImage",
  component: RoundedImage,
} as Meta;

const Template: Story<Props> = (args) => <RoundedImage {...args} />;

export const RoundedImageStory = Template.bind({});
RoundedImageStory.args = {
  src: "avatar.png",
};
