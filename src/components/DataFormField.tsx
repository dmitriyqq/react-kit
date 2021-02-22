import { TextFormField } from "./TextFormField";
import React, { FC } from "react";
import { FieldItemDataType } from "../model/FieldItemData";
import { NumberFormField } from "./NumberFormField";
import { CheckboxFormField } from "./CheckboxFormField";
import { SelectFormField } from "./SelectFormField";
import { SelectOption } from "./Select";

interface DataFormFieldProps {
  name: string;
  label: string;
  type: FieldItemDataType;
  options?: SelectOption<any>[];
  placeholder?: string;
  value: any;
  onChange: (fieldName: string, value: any) => void;
}

export const DataFormField: FC<DataFormFieldProps> = ({
  name,
  label,
  type,
  onChange,
  value,
  placeholder,
  options,
}) => {
  if (type === "text") {
    return (
      <TextFormField
        label={label}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    );
  }

  if (type === "number") {
    return (
      <NumberFormField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        label={label}
        name={name}
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
      />
    );
  }

  if (type === "select") {
    return (
      <SelectFormField
        value={value}
        onChange={onChange}
        label={label}
        name={name}
        placeholder={placeholder}
        options={options ?? []}
      />
    );
  }

  return null;
};
