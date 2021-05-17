import { FilterField, FilterType } from "../Filters";
import {
  FieldDefinition,
  FieldItemDataType,
  FormFieldsType,
  FormValue,
} from "./FormTypes";

const defaultValues: Record<string, any> = {
  text: "",
  bool: false,
  number: 0,
  select: null,
  autocomplete: null,
  multipleAutocomplete: [],
  multipleSelect: [],
  date: null,
};

export const getDefaultValue = (type: FieldItemDataType | FilterType): any => {
  return defaultValues[type];
};

export const buildDefaultValue = <T>(
  fields: (FieldDefinition<T, any> | FilterField<T>)[],
  value?: Record<string, any>
): T => {
  const obj: Record<string, any> = {};
  for (const field of fields) {
    obj[field.name] =
      (value && value[field.name]) ?? getDefaultValue(field.type);
  }

  return obj as T;
};

export const getFieldValueFromInternalFormValue = (
  internalValue: any,
  fieldType: FieldItemDataType
) => {
  const isSelect = ["select", "autocomplete"].includes(fieldType);
  const isMultipleSelect = ["multipleSelect", "multipleSelect"].includes(
    fieldType
  );

  if (isSelect) {
    return internalValue?.value ?? null;
  }

  if (isMultipleSelect) {
    return (internalValue ?? []).map((i: any) => i?.value);
  }

  return internalValue;
};

export const getFormValue = <T extends unknown>(
  internalValue: FormValue<T>,
  fields: FormFieldsType<T>
): T => {
  const value: Record<string, any> = {};

  for (const field of fields) {
    const name = field.name;
    const fieldType = field.type;
    const internalFieldValue = internalValue[name];
    value[name] = getFieldValueFromInternalFormValue(
      internalFieldValue,
      fieldType
    );
  }

  return value as T;
};
