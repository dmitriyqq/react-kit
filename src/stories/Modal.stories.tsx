import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Modal, Props } from "../components/Modal";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { FormFieldsType } from "../model";

export default {
  title: "Modal",
  component: Modal,
} as Meta;

const Template: Story<Props> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const ModalStory = Template.bind({});
ModalStory.args = {
  title: "Modal example",
};

const ModalFormTemplate: Story<Props> = (args) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>({
    test: "",
    check: true,
    num: 420.69,
    myObject: {
      value: { customValue: 342 },
      id: "2321",
      label: "Custom object",
    },
    dateOfBirth: null,
  });

  const fields: FormFieldsType<any> = [
    {
      label: "Test text field",
      type: "text",
      name: "test",
      placeholder: "please input a text",
    },
    {
      label: "Test checkbox field",
      type: "bool",
      name: "check",
    },
    {
      label: "Test num field",
      type: "number",
      name: "num",
      placeholder: "Please enter a number",
    },
    {
      label: "Date of Birth",
      type: "date",
      name: "dateOfBirth",
      placeholder: "date of birth",
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
  ];

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <Form fields={fields} onChange={setValue} value={value} />
      </Modal>
    </>
  );
};

export const ModalFormStory = ModalFormTemplate.bind({});
ModalFormStory.args = {
  title: "Modal with form",
};
