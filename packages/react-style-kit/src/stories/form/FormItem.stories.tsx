import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { FormField, Props } from "../../components/Form/FormField";
import { List } from "../../components/List/List";
import { Card } from "../../components/Card/Card";
import { Checkbox } from "../../components/Checkbox";
import { TextInput } from "../../components/TextInput";

export default {
  title: "FormItem",
  component: FormField,
} as Meta;

const Template: Story<Props> = (args) => (
  <FormField {...args}>
    <Checkbox value={true} />
  </FormField>
);

export const FormItemStory = Template.bind({});
FormItemStory.args = {
  label: "Label label label label",
  icon: "arrow-right-s",
};

export const FormItemWithErrorMessageStory = Template.bind({});
FormItemWithErrorMessageStory.args = {
  label: "Label label label label",
  icon: "arrow-right-s",
  errorMessage: "This field is prohibited",
};

const TemplateImage: Story<Props> = (args) => (
  <Card {...args}>
    <List>
      <FormField {...args}>
        <Checkbox value={true} />
      </FormField>
      <FormField {...args}>
        <TextInput value={""} />
      </FormField>
    </List>
  </Card>
);

export const FormItemImageStory = TemplateImage.bind({});
FormItemImageStory.args = {
  label: "Label label label label",
  icon: "rocket",
};
