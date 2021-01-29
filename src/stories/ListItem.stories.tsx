import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { ListItem, Props } from '../components/ListItem'
import {List} from "../components/List";
import {Card} from "../components/Card";

export default {
  title: 'ListItem',
  component: ListItem,
} as Meta;

const Template: Story<Props> = (args) => (
  <ListItem label='Label label label' {...args} />
);

export const ListItemStory = Template.bind({});
ListItemStory.args = {}

const TemplateImage: Story<Props> = (args) => (
    <Card {...args} >
        <List>
          <ListItem label='Label label label' {...args}/>
          <ListItem label='Label label label' image='avatar.png' {...args} />
        </List>
    </Card>
);

export const ListItemImageStory = TemplateImage.bind({});
ListItemImageStory.args = {}