import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon } from '../components/Icon'
import { Text } from '../components/Text'
import { ColorType, TextType, ThemeProps } from '../themes/theme'
import { Button } from '../components/Button'

export default {
  title: 'Icon',
  component: Icon,
} as Meta;

interface Props extends ThemeProps {
  color: ColorType
  variant: TextType
  icon: string
}

const Template: Story<Props> = (args) => (
    <Text {...args}>Иконка <Icon {...args} /></Text>
);

export const IconStory = Template.bind({});
IconStory.args = {
  icon: '24-hours',
  color: 'primary',
  variant: 'label',
}

const ButtonTemplate: Story<Props> = (args) => (
  <Button theme={args.theme}>Тест<Icon {...args} /></Button>
);

export const ButtonIconStory = ButtonTemplate.bind({})
ButtonIconStory.args = {
  icon: '24-hours',
  color: 'white',
  variant: 'label',
}

const ButtonOnlyTemplate: Story<Props> = (args) => (
  <Button theme={args.theme}><Icon {...args} /></Button>
);

export const ButtonOnlyIconStory = ButtonOnlyTemplate.bind({})
ButtonOnlyIconStory.args = {
  icon: '24-hours',
  color: 'white',
  variant: 'label',
}