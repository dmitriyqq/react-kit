import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { DragAndDropBoard } from "../../components/DragAndDrop/DragAndDropBoard";

export default {
  title: "DragAndDropBoard",
  component: DragAndDropBoard,
} as Meta;

const Template: Story = (args) => <DragAndDropBoard {...args} />;

export const DragAndDropBoardStory = Template.bind({});
DragAndDropBoardStory.args = {};
