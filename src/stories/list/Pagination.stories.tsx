import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Pagination, Props } from "../../components/Pagination";

export default {
  title: "Pagination",
  component: Pagination,
} as Meta;

const Template: Story<Props> = (args) => <Pagination {...args} />;

export const PaginationStory = Template.bind({});
PaginationStory.args = {
  totalPages: 100,
  currentPage: 30,
};

export const PaginationStory2 = Template.bind({});
PaginationStory2.args = {
  totalPages: 1,
  currentPage: 1,
};

export const PaginationStory3 = Template.bind({});
PaginationStory3.args = {
  totalPages: 5,
  currentPage: 3,
};

export const PaginationStory4 = Template.bind({});
PaginationStory4.args = {
  totalPages: 2,
  currentPage: 1,
};

export const PaginationStory5 = Template.bind({});
PaginationStory5.args = {
  totalPages: 2,
  currentPage: 2,
};
