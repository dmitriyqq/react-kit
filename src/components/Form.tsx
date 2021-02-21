import React from "react";
import { FieldItemDataType } from "../model/FieldItemData";
import { List } from "./List";
import { ThemeProps } from "../themes/theme";
import { DataFormField } from "./DataFormField";

export interface Props<T extends object> extends ThemeProps {
  value: T;
  fields: {
    name: keyof T;
    label: string;
    type: FieldItemDataType;
    validator: (value: any) => boolean;
  }[];
  onChange: (value: T) => void;
}

export const Form = <T extends object>({
  value,
  fields,
  onChange,
  theme,
}: Props<T>) => {
  const handleFieldChange = (name: string, fieldValue: any) => {
    console.log("field changed", name, value);
    const newValue = { ...value, [name]: fieldValue };
    onChange(newValue);
  };

  return (
    <List>
      {fields.map((field) => (
        <DataFormField
          key={field.name.toString()}
          value={value[field.name]}
          onChange={handleFieldChange}
          theme={theme}
          {...field}
          name={field.name.toString()}
        />
      ))}
    </List>
  );
};
