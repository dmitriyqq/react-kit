import React from "react";
import { FieldDefinition } from "../model/FieldItemData";
import { List } from "./List";
import { ThemeProps } from "../themes/theme";
import { DataFormField } from "./DataFormField";
import { Button } from "./Button";
import { FormField } from "./FormField";

export interface Props<T extends object> extends ThemeProps {
  value: T;
  fields: FieldDefinition<T, any>[];
  onChange: (value: T) => void;
  onSubmit: (value: T) => void;
}

export const Form = <T extends object>({
  value,
  fields,
  onChange,
  onSubmit,
}: Props<T>) => {
  const handleFieldChange = (name: string, fieldValue: any) => {
    const newValue = { ...value, [name]: fieldValue };
    onChange(newValue);
  };

  const handleSubmitClick = () => {
    onSubmit(value);
  };

  return (
    <List>
      {fields.map((field) => (
        <DataFormField
          {...field}
          name={field.name.toString()}
          key={field.name.toString()}
          value={value[field.name]}
          onChange={handleFieldChange}
          options={field.options}
        />
      ))}
      <FormField label="">
        <Button onClick={handleSubmitClick}>Submit</Button>
      </FormField>
    </List>
  );
};
