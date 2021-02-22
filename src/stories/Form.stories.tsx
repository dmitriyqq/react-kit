import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Form, Props } from "../components/Form";
import { NumberComponent } from "../components/NumberComponent";

export default {
  title: "Form",
  component: Form,
} as Meta;

interface TestFormData {
  test: string;
  check: boolean;
  num: number;
  myObject: { customValue: number };
}

const Template: Story<Props<TestFormData>> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (value: any) => {
    setValue(value);
  };

  return (
    <>
      <Form {...args} value={value} onChange={handleChange} />
      <NumberComponent num={value.num} />
    </>
  );
};

export const LoaderStory = Template.bind({});
LoaderStory.args = {
  fields: [
    {
      label: "Test text field",
      type: "text",
      name: "test",
      placeholder: "please input a text",
      validator: () => true,
    },
    {
      label: "Test checkbox field",
      type: "bool",
      name: "check",
      validator: () => true,
    },
    {
      label: "Test num field",
      type: "number",
      name: "num",
      placeholder: "Please enter a number",
      validator: () => true,
    },
    {
      label: "Test select field",
      type: "select",
      name: "myObject",
      options: [
        { value: { customValue: 42 }, id: "42", label: "42" },
        { value: { customValue: 43 }, id: "4354", label: "Test" },
        { value: { customValue: 342 }, id: "2321", label: "Custom object" },
      ],
    },
  ],
  value: {
    test: "",
    check: true,
    num: 420.69,
    myObject: { customValue: 342 },
  },
};
