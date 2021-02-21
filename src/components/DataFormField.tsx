import { TextFormField } from "./TextFormField";
import React from "react";
import { FieldItemDataType } from "../model/FieldItemData";
import { FormFieldProps } from "./FormField";
import { NumberFormField } from "./NumberFormField";
import { CheckboxFormField } from "./CheckboxFormField";

interface DataFormFieldProps extends FormFieldProps {
  value: any;
  onChange: (fieldName: string, value: any) => void;
  type: FieldItemDataType;
}

export const DataFormField = <T extends unknown>({
  name,
  label,
  type,
  onChange,
  value,
  theme,
}: DataFormFieldProps) => {
  if (type === "text") {
    return (
      <TextFormField
        label={label}
        name={name}
        onChange={onChange}
        value={value}
        theme={theme}
      />
    );
  }

  if (type === "number") {
    return (
      <NumberFormField
        value={value}
        onChange={onChange}
        label={label}
        name={name}
        theme={theme}
      />
    );
  }

  if (type === "bool") {
    return (
      <CheckboxFormField
        value={value}
        onChange={onChange}
        label={label}
        name={name}
        theme={theme}
      />
    );
  }

  return null;
};
