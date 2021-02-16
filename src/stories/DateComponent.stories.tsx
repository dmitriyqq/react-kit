import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, DateComponent } from "../components/DateComponent";

export default {
  title: 'DateComponent',
  component: DateComponent,
} as Meta;

const Template: Story<Props> = (args) => (<DateComponent {...args} />);

export const DateComponentStory = Template.bind({});
DateComponentStory.args = {
  date: new Date(),
};
