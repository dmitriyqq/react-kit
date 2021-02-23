import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { FormField, Props } from "../components/Form/FormField";
import { List } from "../components/List/List";
import { Card } from "../components/Card";
import { Checkbox } from "../components/Checkbox";
import { TextInput } from "../components/TextInput";

export default {
  title: "FormItem",
  component: FormField,
} as Meta;

const Template: Story<Props> = (args) => (
  <FormField {...args}>
    <Checkbox value={true} theme={args.theme} />
  </FormField>
);

export const FormItemStory = Template.bind({});
FormItemStory.args = {
  label: "Label label label label",
  icon: "arrow-right-s",
};

const TemplateImage: Story<Props> = (args) => (
  <Card {...args}>
    <List>
      <FormField {...args}>
        <Checkbox value={true} theme={args.theme} />
      </FormField>
      <FormField {...args}>
        <TextInput value={""} theme={args.theme} />
      </FormField>
    </List>
  </Card>
);

export const FormItemImageStory = TemplateImage.bind({});
FormItemImageStory.args = {
  label: "Label label label label",
  icon: "rocket",
};
