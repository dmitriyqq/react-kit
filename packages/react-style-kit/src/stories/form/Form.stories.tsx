import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Form, Props } from "../../components/Form/Form";
import { NumberComponent } from "../../components/NumberComponent";
import { FieldDefinition, FormValue } from "../../model";
import { data, optionsProvider } from "../autocompleteData";

export default {
  title: "Form",
  component: Form,
} as Meta;

interface TestFormData {
  test: string;
  check: boolean;
  num: number;
  myObject: { customValue: number };
  dateOfBirth: Date | null;
}

const Template: Story<Props<TestFormData>> = (args) => {
  const [value, setValue] = useState<TestFormData>(args.value);

  const handleChange = (value: TestFormData) => {
    setValue(value);
  };

  return (
    <>
      <Form {...args} value={value} onChange={handleChange} />
      <NumberComponent num={Number(value.num)} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
};

export const FormStory = Template.bind({});
FormStory.args = {
  fields: [
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
  ],
  value: {
    test: "",
    check: true,
    num: 420.69,
    myObject: {
      value: { customValue: 342 },
      id: "2321",
      label: "Custom object",
    },
    dateOfBirth: null,
  },
};

interface ConditionalTestFormData {
  warehouseAmountType: "have" | "ordered" | "needToOrder";
  amount: number;
  locationType?: "store" | "warehouse" | "global" | "transit";
  placeId?: string | null;
}

const ConditionalFormTemplate: Story<Props<ConditionalTestFormData>> = (
  args
) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Form {...args} value={value} onChange={handleChange} />
    </>
  );
};

export const ConditionalFormStory = ConditionalFormTemplate.bind({});
ConditionalFormStory.args = {
  fields: [
    {
      label: "Warehouse amount type",
      type: "select",
      name: "warehouseAmountType",
      options: [
        { value: "have", id: "have", label: "Have in stock" },
        { value: "ordered", id: "ordered", label: "Ordered" },
        { value: "needToOrder", id: "needToOrder", label: "Need to order" },
      ],
    },
    {
      label: "Location",
      type: "select",
      name: "locationType",
      options: [
        { value: "store", id: "have", label: "Store" },
        { value: "warehouse", id: "ordered", label: "Warehouse" },
        { value: "global", id: "global", label: "Global" },
        { value: "transit", id: "transit", label: "Transit" },
      ],
    },
    {
      label: "Warehouse",
      type: "select",
      name: "placeId",
      condition: (value) => value?.locationType === "warehouse",
      options: [
        {
          value: "iv_warehouse",
          id: "iv_warehouse",
          label: "Ivanovo Warehouse",
        },
        {
          value: "kh_warehouse",
          id: "kh_warehouse",
          label: "Kohma Warehouse",
        },
      ],
    },
    {
      label: "Store",
      type: "select",
      name: "placeId",
      condition: (value) => value?.locationType === "store",
      options: [
        {
          value: "iv_store",
          id: "iv_store",
          label: "Ivanovo Store",
        },
        {
          value: "iv_store",
          id: "kh_store",
          label: "Kohma Store",
        },
      ],
    },
    {
      label: "Amount",
      type: "number",
      name: "amount",
      placeholder: "Amount",
    },
  ],
  value: {
    warehouseAmountType: { value: "have", id: "have", label: "Have in stock" },
    locationType: { value: "global", id: "global", label: "Global" },
    amount: 100,
    placeId: null,
  },
};

interface FormWithValidatorProps {
  name: string;
  email: string;
  phone: string;
  age: number;
  eula: boolean;
}

const ValidationFormTemplate: Story<Props<FormWithValidatorProps>> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Form {...args} value={value} onChange={handleChange} />
    </>
  );
};

const validateEmail = (value?: FormWithValidatorProps) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const valid = re.test(value?.email ?? "");
  return { valid, message: !valid ? "Invalid email" : null };
};

const validatePhone = (value?: FormWithValidatorProps) => {
  const re = /^(\+7)[ ]\((\d{3})\)[ ](\d{3}-\d{2}-\d{2})$/;
  const valid = re.test(value?.phone ?? "");
  return {
    valid,
    message: !valid ? "Phone must be like +7 (123) 123-12-31" : null,
  };
};

const validateName = (value?: FormWithValidatorProps) => {
  const re = /^[А-Я]([А-Яа-я]+)$/;
  const valid = re.test(value?.name ?? "");
  return { valid, message: !valid ? "Invalid name" : null };
};

const fields: FieldDefinition<FormWithValidatorProps, any>[] = [
  {
    name: "name",
    type: "text",
    label: "Username",
    validator: validateName,
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    validator: validateEmail,
  },
  {
    name: "phone",
    type: "text",
    label: "Phone",
    validator: validatePhone,
  },
  {
    name: "age",
    type: "number",
    label: "Age",
    validator: (value?: FormWithValidatorProps) => {
      const valid = !!value?.age && value.age >= 21;
      return { valid, message: valid ? null : "Age should be 21 or above" };
    },
  },
  {
    name: "eula",
    type: "bool",
    label: "Accept Terms",
    validator: (value?: FormWithValidatorProps) => {
      const valid = !!value?.eula && value.eula === true;
      return { valid, message: valid ? null : "Must agree with terms" };
    },
  },
];

export const ValidationFormStory = ValidationFormTemplate.bind({});
ValidationFormStory.args = {
  fields,
  value: {
    name: "",
    email: "",
    phone: "",
    age: 10,
    eula: false,
  },
};

export const UpdateValidationFormStory = ValidationFormTemplate.bind({});
UpdateValidationFormStory.args = {
  fields,
  value: {
    name: "Дима",
    email: "dima@email.com",
    phone: "+7 (920) 222-22-22",
    age: 21,
    eula: true,
  },
  originalValue: {
    name: "Дима",
    email: "dima@email.com",
    phone: "+7 (920) 222-22-22",
    age: 21,
    eula: true,
  },
};

interface MultipleValue {
  autocomplete: string | null;
  multiSelect: string[];
  multiAutocomplete: string[];
}

const MultipleFieldsFormTemplate: Story<Props<MultipleValue>> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Form {...args} value={value} onChange={handleChange} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
};
export const MultipleFieldsFormStory = MultipleFieldsFormTemplate.bind({});
MultipleFieldsFormStory.args = {
  fields: [
    {
      label: "автодополнение",
      name: "autocomplete",
      type: "autocomplete",
      optionsProvider,
    },
    {
      label: "множественный выбор",
      name: "multiSelect",
      type: "multipleSelect",
      options: data,
    },
    {
      label: "множественный выбор автодополнение",
      name: "multiAutocomplete",
      type: "multipleAutocomplete",
      optionsProvider,
    },
  ],
  value: {
    autocomplete: null,
    multiSelect: [],
    multiAutocomplete: [],
  },
};
