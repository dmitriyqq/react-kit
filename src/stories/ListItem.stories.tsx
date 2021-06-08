import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text } from "../components/Text";
import { ListItem, Props } from "../components/List/ListItem";
import { List } from "../components/List/List";
import { Card } from "../components/Card/Card";

export default {
  title: "ListItem",
  component: ListItem,
} as Meta;

const Template: Story<Props> = (args) => (
  <ListItem label="Label label label" {...args} />
);

export const ListItemStory = Template.bind({});
ListItemStory.args = {};

const TemplateImage: Story<Props> = (args) => (
  <Card>
    <List>
      <ListItem label="Label label label" {...args} />
      <ListItem label="Label label label" image="avatar.png" {...args} />
    </List>
  </Card>
);

export const ListItemImageStory = TemplateImage.bind({});
ListItemImageStory.args = {};

const ListItemChildrenTemplate: Story<Props> = (args) => (
  <Card>
    <List>
      <ListItem {...args} label="Label with children">
        <Text>Children text</Text>
      </ListItem>
      <ListItem
        {...args}
        label="Label with very very very very loooooooooooooooooong children text"
      >
        <Text>Very very very very loooooooooooooooooong children text</Text>
      </ListItem>
      <ListItem
        {...args}
        label="Label with very very very very loooooooooooooooooong children text"
      >
        <Text>Children Text</Text>
      </ListItem>
    </List>
  </Card>
);

export const ListItemChildrenStory = ListItemChildrenTemplate.bind({});
ListItemChildrenStory.args = {};

const ListItemCustomActionsTemplate: Story<Props> = (args) => (
  <Card>
    <List>
      <ListItem
        {...args}
        id="myid"
        selectedId={"myid"}
        label="Label with children"
        icon="rocket"
        customActions={[{ icon: "time", id: "schedule" }]}
        tags={[
          { label: "Tag 1", id: "tag 1" },
          { label: "Tag 3", id: "tag 3", color: "aquamarine" },
          { label: "Tag 2", id: "tag 2", color: "danger" },
        ]}
      >
        <Text>Children text</Text>
      </ListItem>
    </List>
  </Card>
);

export const ListItemCustomActionsStory = ListItemCustomActionsTemplate.bind(
  {}
);
ListItemCustomActionsStory.args = {};
