import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, DateTimeComponent } from "../components/DateTimeComponent";

export default {
  title: 'DateTimeComponent',
  component: DateTimeComponent,
} as Meta;

const Template: Story<Props> = (args) => (<DateTimeComponent {...args} />);

export const DateTimeComponentStory = Template.bind({});
DateTimeComponentStory.args = {
  dateTime: new Date(),
};
