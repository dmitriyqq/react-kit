import React, {useState} from "react";
import {
  DataFieldValue,
  FormValidator,
  FormValue,
  validateFields,
  getFormValue,
  FormFieldsType,
} from "../../model";
import {List} from "../List";
import {FormCreateButton} from "./FormCreateButton";
import {FormUpdateButton} from "./FormUpdateButton";
import {FormFields} from "./FormFields";

export interface Props<T extends object> {
  value: FormValue<T>;
  originalValue?: T;
  disabled?: boolean;
  fields: FormFieldsType<T>;
  onChange: (internalValue: FormValue<T>, formValue: T) => void;
  onCreate?: (value: T) => void;
  onUpdate?: (value: T) => void;
  validateForm?: FormValidator<T>;
  createText?: string;
  updateText?: string;
  gridArea?: string;
}

export const Form = <T extends object>
({
   value,
   fields,
   onChange,
   onCreate,
   onUpdate,
   disabled,
   originalValue,
   validateForm,
   createText,
   updateText,
   gridArea
 }: Props<T>) => {
  const [changed, setChanged] = useState(false);

  const updateForm = !disabled && originalValue !== undefined && onUpdate;
  const createForm = !disabled && originalValue === undefined && onCreate;
  const formValue = getFormValue(value, fields);

  const conditionalFields = fields.filter((field) =>
    field.condition ? field.condition(formValue) : true
  );

  const fieldsValid = validateFields(fields, formValue);
  const formValidation = validateForm
    ? validateForm(originalValue, value)
    : null;
  const formValid =
    fieldsValid && (formValidation === null || formValidation.valid);

  const handleFieldChange = (
    name: string,
    internalFieldValue: DataFieldValue<never>
  ) => {
    if (!onChange) {
      return;
    }

    const field = fields.find((f) => f.name === name);
    if (!field) {
      return;
    }

    const newInternalValue = {...value, [name]: internalFieldValue};
    const newValue = getFormValue(newInternalValue, fields);

    onChange(newInternalValue, newValue);

    if (updateForm) {
      setChanged(JSON.stringify(originalValue) !== JSON.stringify(newValue));
    }
  };

  const handleCreateClick = () => {
    if (onCreate && formValue && createForm) {
      onCreate(value);
    }
  };

  const handleUpdateClick = () => {
    if (onUpdate && changed && updateForm) {
      onUpdate(value);
    }
  };

  return (
    <List gridArea={gridArea}>
      <FormFields
        fields={conditionalFields}
        onChange={handleFieldChange}
        value={formValue}
        internalValue={value}
        disabled={disabled}
      />
      {createForm && (
        <FormCreateButton
          disabled={!formValid}
          createText={createText}
          onClick={handleCreateClick}
        />
      )}
      {updateForm && (
        <FormUpdateButton
          disabled={!formValid || !changed}
          updateText={updateText}
          onClick={handleUpdateClick}
        />
      )}
    </List>
  );
};
