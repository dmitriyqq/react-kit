import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Props, DataListItem } from "../components/List/DataListItem";
import { List } from "../components/List/List";
import { TextListItem } from "../components/List/TextListItem";
import { NumberListItem } from "../components/List/NumberListItem";
import { DateTimeListItem } from "../components/List/DateTimeListItem";
import { FractionListItem } from "../components/List/FractionListItem";
import { Card } from "../components/Card";
import { ListItemData } from "../model/ListItemData";
import { DataList, Props as DataListProps } from "../components/List/DataList";

export default {
  title: "DataListItem",
  component: DataListItem,
} as Meta;

const textListItem: ListItemData = {
  type: "text",
  label: "Text list item",
  text: "Test text list item",
};

const numberListItem: ListItemData = {
  type: "number",
  label: "Number list item",
  num: 13337,
};

const fractionListItem: ListItemData = {
  type: "fraction",
  label: "Fraction list item",
  numerator: 1,
  denominator: 10,
};

const dateTimeListItem: ListItemData = {
  type: "datetime",
  label: "Date list item",
  dateTime: new Date(),
};

const dateListItem: ListItemData = {
  type: "datetime",
  label: "Date list item 2",
  date: new Date(),
};

const timeListItem: ListItemData = {
  type: "datetime",
  label: "Date list item 3",
  time: new Date(),
};

const Template: Story<Props> = (args) => (
  <Card>
    <List>
      <TextListItem
        label="Text list item"
        text="Test text list item"
        {...args}
      />
      <NumberListItem label="Number list item" num={1337} {...args} />
      <FractionListItem
        label="Fraction list item"
        numerator={1}
        denominator={10}
        {...args}
      />
      <DateTimeListItem
        label="Date list item"
        dateTime={new Date()}
        {...args}
      />
      <DateTimeListItem label="Date list item 2" date={new Date()} {...args} />
      <DateTimeListItem label="Date list item 3" time={new Date()} {...args} />
    </List>
  </Card>
);

export const ListItemComponentStory = Template.bind({});
ListItemComponentStory.args = {};

const DataItemTemplate: Story<Props> = (args) => (
  <Card>
    <List>
      <DataListItem {...args} {...textListItem} />
      <DataListItem {...args} {...numberListItem} />
      <DataListItem {...args} {...fractionListItem} />
      <DataListItem {...args} {...dateTimeListItem} />
      <DataListItem {...args} {...dateListItem} />
      <DataListItem {...args} {...timeListItem} />
    </List>
  </Card>
);
export const DataItemComponentStory = DataItemTemplate.bind({});
DataItemComponentStory.args = {};

const DataListTemplate: Story<DataListProps> = (args) => <DataList {...args} />;

export const DataListLoadingStory = DataListTemplate.bind({});
DataListLoadingStory.args = { isLoading: true };

export const DataListLoadedStory = DataListTemplate.bind({});
DataListLoadedStory.args = {
  isLoading: false,
  data: [
    textListItem,
    numberListItem,
    fractionListItem,
    dateListItem,
    dateTimeListItem,
    timeListItem,
  ],
};
