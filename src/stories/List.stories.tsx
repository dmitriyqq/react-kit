import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { List } from '../components/List'
import { Button } from '../components/Button'
import { Text } from '../components/Text'

export default {
  title: 'List',
  component: List,
} as Meta;

const Template: Story = (args) => (
  <List {...args}>
    <Button color='primary'>Primary button</Button>
    <Button color='secondary'>Secondary button</Button>
    <Button color='danger'>Danger button</Button>
    <Text>Text item</Text>
    <Button color='warning'>Warning button</Button>
  </List>
);

export const LoaderStory = Template.bind({});
LoaderStory.args = {}