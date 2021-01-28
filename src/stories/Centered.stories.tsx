import React, { ReactChild, ReactChildren } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Centered } from '../components/Centered'
import { Button } from '../components/Button'

export default {
  title: 'Centered',
  component: Centered,
} as Meta;

interface Props {
  children: ReactChild | ReactChildren
}

const Template: Story<Props> = (args) => (
  <Centered {...args} />
);

export const CenteredStory = Template.bind({});
CenteredStory.args = {
  children: <Button>Test centered layout</Button>
}