import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, TimeComponent } from "../components/TimeComponent";

export default {
  title: 'TimeComponent',
  component: TimeComponent,
} as Meta;

const Template: Story<Props> = (args) => (<TimeComponent {...args} />);

export const TimeComponentStory = Template.bind({});
TimeComponentStory.args = {
  time: new Date(),
};
