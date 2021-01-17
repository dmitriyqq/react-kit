import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Loader } from '../components/Loader'

export default {
  title: 'Loader',
  component: Loader,
} as Meta;

const Template: Story = (args) => (
  <Loader {...args} />
);

export const LoaderStory = Template.bind({});
LoaderStory.args = {}