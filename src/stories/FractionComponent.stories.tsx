import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, FractionComponent } from "../components/FractionComponent";

export default {
  title: 'FractionComponent',
  component: FractionComponent,
} as Meta;

const Template: Story<Props> = (args) => (<FractionComponent {...args} />);

export const FractionComponentStory = Template.bind({});
FractionComponentStory.args = {
  num: 7,
  denum: 10,
};
