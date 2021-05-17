import { DataFormField } from "./DataFormField";
import {
  DataFieldValue,
  FormFieldsType,
  FormValue,
  getValidationResult,
} from "../../model";
import React from "react";

interface Props<T> {
  disabled?: boolean;
  fields: FormFieldsType<T>;
  value: T;
  internalValue: FormValue<T>;
  onChange: (name: string, internalFieldValue: DataFieldValue<any>) => void;
}

export const FormFields = <T extends object>({
  disabled,
  value,
  internalValue,
  onChange,
  fields,
}: Props<T>) => (
  <>
    {fields.map(({ name, optionsProvider, options, validator, ...rest }) => (
      <DataFormField
        {...rest}
        name={name}
        key={name}
        value={internalValue[name]}
        onChange={onChange}
        optionsProvider={optionsProvider}
        options={options}
        disabled={disabled}
        errorMessage={getValidationResult(validator, value)}
      />
    ))}
  </>
);
