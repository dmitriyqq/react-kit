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
}

const Template: Story<Props<TestFormData>> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (value: any) => {
    setValue(value);
  };

  return (
    <>
      <Form {...args} value={value} onChange={handleChange} />
      <NumberComponent num={value.num} theme={args.theme} />
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
      validator: () => true,
    },
  ],
  value: {
    test: "",
    check: true,
    num: 420.69,
  },
};
