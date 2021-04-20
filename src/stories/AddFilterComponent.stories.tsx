import React, { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { AddFilterComponent, Props } from "../components/AddFilterComponent";
import { FormValue, getOptionsFromStringArray } from "../model/FieldItemData";
import { FilterMod, FilterValue, builtInModesByType } from "../model/Filters";
import { fields, optionsProvider } from "./autocompleteData";

export default {
  title: "AddFilterComponent",
  component: AddFilterComponent,
} as Meta;

const Template: Story<Props> = (args) => {
  const [value, setValue] = useState<FilterValue>({
    fieldName: "name",
    filterMode: FilterMod.Set,
    filterValue: "name",
  });
  const [internalValue, setInternalValue] = useState<FormValue<FilterValue>>({
    fieldName: { value: "name", id: "name", label: "Имя" },
    filterMode: {
      value: FilterMod.Set,
      id: FilterMod.Set.toString(),
      label: "установлено",
    },
    filterValue: "name",
  });

  const handleChange = (
    value: FilterValue,
    internalValue: FormValue<FilterValue>
  ) => {
    setValue(value);
    setInternalValue(internalValue);
  };

  return (
    <>
      <AddFilterComponent
        {...args}
        value={value}
        internalValue={internalValue}
        onChange={handleChange}
      />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
};

export const AddFilterStory = Template.bind({});
AddFilterStory.args = {
  modesByType: builtInModesByType,
  fields,
};
