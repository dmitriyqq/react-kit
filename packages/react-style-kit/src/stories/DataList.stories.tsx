import { ListItemData } from "../model/ListItemData";
import { Meta, Story } from "@storybook/react/types-6-0";
import { DataList, Props } from "../components/List/DataList";
import React, { useState } from "react";

export default {
  title: "DataList",
  component: DataList,
  argTypes: {
    onClick: { action: "clicked" },
    onNav: { action: "nav" },
    onDelete: { action: "delete" },
  },
} as Meta;

const dataWithActions: ListItemData[] = [
  { id: "id1", label: "first item", dateTime: new Date(), type: "datetime" },
  { id: "id2", label: "second item", dateTime: new Date(), type: "datetime" },
  { id: "id3", label: "third item", dateTime: new Date(), type: "datetime" },
];

const DataListWithActionsTemplate: Story<Props> = (args) => {
  const [selectedIds, setSelectedIds] = useState<any>();

  return (
    <DataList {...args} selectedIds={selectedIds} onSelect={setSelectedIds} />
  );
};

export const DataListWithActionsStory = DataListWithActionsTemplate.bind({});
DataListWithActionsStory.args = {
  isLoading: false,
  data: dataWithActions,
};

export const DataListWithActionsStory2 = DataListWithActionsTemplate.bind({});
DataListWithActionsStory2.args = {
  isLoading: false,
  data: dataWithActions,
  selectType: "single",
};
