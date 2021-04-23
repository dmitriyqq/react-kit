import { ListItemData } from "../model/ListItemData";
import { Meta, Story } from "@storybook/react/types-6-0";
import { PaginatedDataList, Props } from "../components/List/PaginatedDataList";
import React, { useState } from "react";

export default {
  title: "PaginatedDataList",
  component: PaginatedDataList,
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

const PaginatedDataListWithActionsTemplate: Story<Props> = (args) => (
  <PaginatedDataList {...args} />
);

export const PaginatedDataListWithActionsStory = PaginatedDataListWithActionsTemplate.bind(
  {}
);

PaginatedDataListWithActionsStory.args = {
  isLoading: false,
  data: dataWithActions,
  total: dataWithActions.length,
};

const PaginatedDataListWithActionsTemplateWithManyPages: Story<Props> = (
  args
) => {
  const [selectedIds, setSelectedIds] = useState<any>();
  const generateData = (skip: number, take: number) => {
    return new Array(take).fill(undefined).map(
      (_, i): ListItemData => ({
        id: `item ${skip + i}`,
        type: "number",
        num: skip + i,
        label: `item ${skip + i}`,
      })
    );
  };

  const [data, setData] = useState<ListItemData[]>(generateData(0, 20));

  const handleNewData = (skip: number, take: number, page: number) => {
    setData(() => generateData(skip, take));
  };

  return (
    <PaginatedDataList
      {...args}
      selectedIds={selectedIds}
      onSelect={setSelectedIds}
      data={data}
      initialPageSize={20}
      onNewData={handleNewData}
      total={13543560}
    />
  );
};

export const PaginatedDataListWithActionsStoryWithManyPages = PaginatedDataListWithActionsTemplateWithManyPages.bind(
  {}
);

PaginatedDataListWithActionsTemplateWithManyPages.args = {};
