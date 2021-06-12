import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { DragAndDropBoard } from "../components/DragAndDrop/DragAndDropBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default {
  title: "DragAndDropBoard",
  component: DragAndDropBoard,
} as Meta;

const Template: Story = (args) => (
  <DndProvider backend={HTML5Backend}>
    <DragAndDropBoard {...args} />
  </DndProvider>
);

export const DragAndDropBoardStory = Template.bind({});
DragAndDropBoardStory.args = {};
