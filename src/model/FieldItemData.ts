import { SelectOption } from "../components/Select";
import { OptionsProvider } from "../components/Autocomplete";
import { FilterField, FilterType } from "./Filters";

export type FormValue<T> = Record<keyof T, any>;

export type FieldItemDataType =
  | "text"
  | "number"
  | "date"
  | "bool"
  | "select"
  | "autocomplete"
  | "multipleSelect"
  | "multipleAutocomplete";

export type ValidatorType<V> = (
  value: V
) => { valid: boolean; message?: string | null };

export const getOptionsFromStringArray = (
  array?: string[]
): SelectOption<string>[] =>
  (array ?? []).map((v) => ({ id: v, label: v, value: v }));

export interface FieldDefinition<T, V> {
  name: keyof T & string;
  label: string;
  type: FieldItemDataType;
  optional?: boolean;
  icon?: string;
  options?: SelectOption<V>[];
  initialValue?: SelectOption<T> | SelectOption<T>[] | null | V;
  placeholder?: string;
  validator?: ValidatorType<V>;
  condition?: { fieldName: keyof T; fieldValue: string };
  optionsProvider?: OptionsProvider<V>;
}

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

export const getValueFromInternalFormValue = (
  internalValue: any,
  fieldType: FieldItemDataType
) => {
  const isSelect = fieldType && ["select", "autocomplete"].includes(fieldType);
  const isMultipleSelect =
    fieldType && ["multipleSelect", "multipleSelect"].includes(fieldType);

  if (isSelect) {
    return internalValue?.value ?? null;
  } else if (isMultipleSelect) {
    return (internalValue ?? []).map((i: any) => i.value);
  } else {
    return internalValue;
  }
};

export const getFormValue = <T extends unknown>(
  internalValue: FormValue<T>,
  fields: FieldDefinition<T, any>[]
): T => {
  const value: Record<string, any> = {};

  for (const field of fields) {
    const name = field.name;
    const fieldType = field.type;
    const internalFieldValue = internalValue[name];
    value[name] = getValueFromInternalFormValue(internalFieldValue, fieldType);
  }

  return value as T;
};
