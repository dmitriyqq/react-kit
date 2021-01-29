import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextInput, Props } from '../components/TextInput'

export default {
    title: 'TextInput',
    component: TextInput,
} as Meta;

const Template: Story<Props> = (args) => (
    <TextInput {...args}/>
);

export const TextInputStory = Template.bind({});
TextInputStory.args = {}
