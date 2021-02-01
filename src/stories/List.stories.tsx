import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { List } from '../components/List'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import {ThemeProps} from "../themes/theme";

export default {
  title: 'List',
  component: List,
} as Meta;

interface Props extends ThemeProps {}

const Template: Story<Props> = (args) => (
  <List {...args}>
    <Button theme={args.theme} color='primary'>Primary button</Button>
    <Button theme={args.theme} color='secondary'>Secondary button</Button>
    <Button theme={args.theme} color='danger'>Danger button</Button>
    <Text>Text item</Text>
    <Button theme={args.theme} color='warning'>Warning button</Button>
  </List>
);

export const LoaderStory = Template.bind({});
LoaderStory.args = {}