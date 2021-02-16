import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, NumberComponent } from "../components/NumberComponent";

export default {
  title: 'NumberComponent',
  component: NumberComponent,
} as Meta;

const Template: Story<Props> = (args) => (<NumberComponent {...args} />);

export const NumberComponentInteger = Template.bind({});
NumberComponentInteger.args = {
  isInteger: true,
  num: 1337
};

export const NumberRoundingComponent = Template.bind({});
NumberRoundingComponent.args = {
  num: 420.690001,
  rounding: 2
};

