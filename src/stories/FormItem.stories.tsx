import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormItem, Props } from '../components/FormItem'
import {List} from "../components/List";
import {Card} from "../components/Card";
import {Checkbox} from "../components/Checkbox";
import {TextInput} from "../components/TextInput";

export default {
    title: 'FormItem',
    component: FormItem,
} as Meta;

const Template: Story<Props> = (args) => (
    <FormItem {...args}><Checkbox value={true} onChange={() => {}} theme={args.theme}/></FormItem>
);

export const ListItemStory = Template.bind({});
ListItemStory.args = {
    label: 'Label label label label',
    icon: 'arrow-right-s'
}

const TemplateImage: Story<Props> = (args) => (
    <Card {...args} >
        <List>
            <FormItem {...args}><Checkbox value={true} onChange={() => {}} theme={args.theme}/></FormItem>
            <FormItem {...args}><TextInput value={''} onChange={() => {}} theme={args.theme}/></FormItem>
        </List>
    </Card>
);

export const ListItemImageStory = TemplateImage.bind({});
ListItemImageStory.args = {
    label: 'Label label label label',
    icon: 'rocket'
}