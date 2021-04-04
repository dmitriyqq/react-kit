import React, { useState } from "react";
import { FieldDefinition } from "../../model/FieldItemData";
import { List } from "../List/List";
import { DataFormField } from "./DataFormField";
import { Button } from "../Button";
import { FormField } from "./FormField";

export interface Props<T extends object> {
  value: T;
  originalValue?: T;
  disabled?: boolean;
  fields: FieldDefinition<T, any>[];
  onChange: (value: T) => void;
  onCreate: (value: T) => void;
  onUpdate: (value: T) => void;
  validateForm: (originalValue?: T | null, newValue?: T) => void;
  submitText?: string;
}

export const Form = <T extends object>({
  value,
  fields,
  onChange,
  onCreate,
  onUpdate,
  disabled,
  originalValue,
  validateForm,
  submitText,
}: Props<T>) => {
  const [changed, setChanged] = useState(false);
  const validateFields = () => {
    let fieldsValid = true;

    for (const field of fields) {
      const validationResult = field.validator && field.validator(value);
      fieldsValid =
        fieldsValid && (validationResult ? validationResult.valid : true);
    }

    return fieldsValid;
  };

  const fieldsValid = validateFields();
  const updateForm = !disabled && originalValue !== undefined && onUpdate;
  const createForm = !disabled && originalValue === undefined && onCreate;

  const handleFieldChange = (name: string, fieldValue: any) => {
    const newValue = { ...value, [name]: fieldValue };
    onChange(newValue);
    if (updateForm) {
      setChanged(JSON.stringify(originalValue) !== JSON.stringify(value));
    }
  };

  const handleCreateClick = () => {
    if (fieldsValid && onCreate) {
      onCreate(value);
    }
  };

  const handleUpdateClick = () => {
    if (
      changed &&
      fieldsValid &&
      (!validateForm || validateForm(originalValue, value))
    ) {
      onUpdate(value);
    }
  };

  const conditionalFields = fields.filter((field) =>
    field.condition
      ? (value[field.condition.fieldName] as unknown) ===
        field.condition.fieldValue
      : true
  );

  return (
    <List>
      {conditionalFields.map(
        ({ name, optionsProvider, options, validator, ...rest }) => {
          const validationResult = validator ? validator(value) : null;
          console.log("validationResult", validationResult);
          return (
            <DataFormField
              {...rest}
              name={name.toString()}
              key={name.toString()}
              value={value[name]}
              onChange={handleFieldChange}
              optionsProvider={optionsProvider}
              options={options}
              disabled={disabled}
              errorMessage={
                validationResult && !validationResult.valid
                  ? validationResult.message
                  : null
              }
            />
          );
        }
      )}
      {createForm && (
        <FormField label="">
          <Button disabled={!fieldsValid} onClick={handleCreateClick}>
            {submitText || "Create"}
          </Button>
        </FormField>
      )}
      {updateForm && (
        <FormField label="">
          <Button
            disabled={!fieldsValid || !changed}
            onClick={handleUpdateClick}
          >
            {submitText || "Update"}
            Update
          </Button>
        </FormField>
      )}
    </List>
  );
};
