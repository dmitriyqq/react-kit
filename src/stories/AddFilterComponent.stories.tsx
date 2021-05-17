import { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { AddFilterComponent, Props } from "../components/AddFilterComponent";
import {builtInFilterModeStr, FormValue} from "../model";
import { FilterMod, FilterValue, builtInModesByType } from "../model/Filters";
import { fields } from "./autocompleteData";

export default {
  title: "AddFilterComponent",
  component: AddFilterComponent,
} as Meta;

const Template: Story<Props> = (args) => {
  const [internalValue, setInternalValue] = useState<FormValue<FilterValue>>({
    fieldName: { value: "name", id: "name", label: "Имя" },
    filterMode: {
      value: FilterMod.Set,
      id: FilterMod.Set.toString(),
      label: "Установлено",
    },
    filterValue: null,
  });
  const [value, setValue] = useState<FilterValue>({
    fieldName: "name",
    filterMode: FilterMod.Set,
    filterValue: null,
  });

  const handleChange = (
    internalValue: FormValue<FilterValue>,
    value: FilterValue
  ) => {
    setValue(value);
    setInternalValue(internalValue);
  };

  return (
    <>
      <AddFilterComponent
        {...args}
        value={internalValue}
        onChange={handleChange}
      />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
};

export const AddFilterStory = Template.bind({});
AddFilterStory.args = {
  modesByType: builtInModesByType,
  modeStr: builtInFilterModeStr,
  fields,
};
