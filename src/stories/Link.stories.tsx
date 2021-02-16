import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Link, Props } from '../components/Link'

export default {
  title: 'Link',
  component: Link,
} as Meta;

const Template: Story<Props> = (args) => (
  <Link {...args}/>
);

export const LinkStory = Template.bind({});
LinkStory.args = {
  children: 'link text',
  to: '/pathname',
  color: 'danger',
  variant: 'regular',
}