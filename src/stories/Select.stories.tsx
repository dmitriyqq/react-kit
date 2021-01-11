import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, Props } from '../components/Select';

export default {
  title: 'Select',
  component: Select,
} as Meta;

const Template: Story<Props> = (args) => (
  <Select {...args} variant='header' color='secondary'/>
);

export const SelectStory = Template.bind({});
SelectStory.args = {
  variant: 'header',
  color: 'primary',
  options: [
    { label: 'option 1', value: 'option 1'},
    { label: 'option 2', value: 'option 2'},
    { label: 'option 3', value: 'option 3'},
  ],
};
