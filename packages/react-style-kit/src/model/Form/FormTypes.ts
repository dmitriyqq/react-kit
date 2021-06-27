import { SelectOption } from "../../components/Select";
import { OptionsProvider } from "../../components/Autocomplete";

export type FormValue<T> = Record<keyof T, DataFieldValue<any>>;

export type FieldItemDataType =
  | "text"
  | "number"
  | "range"
  | "date"
  | "bool"
  | "select"
  | "autocomplete"
  | "multipleSelect"
  | "multipleAutocomplete";

export type DataFieldValue<T> = T | null | SelectOption<T> | T[];

export interface FieldDefinition<T, V> {
  name: keyof T & string;
  label: string;
  type: FieldItemDataType;
  optional?: boolean;
  icon?: string;
  options?: SelectOption<V>[];
  initialValue?: SelectOption<T> | SelectOption<T>[] | null | V;
  placeholder?: string;
  validator?: ValidatorType<T>;
  condition?: (value: T) => boolean;
  optionsProvider?: OptionsProvider<V>;
  min?: number;
  max?: number;
  step?: number;
}

export type FormFieldsType<T> = FieldDefinition<T, DataFieldValue<any>>[];

export type ValidationMessage = { valid: boolean; message?: string | null };

export type ValidatorType<V> = (value?: V) => ValidationMessage;

export type FormValidator<T> = (
  originalValue?: T | null,
  newValue?: T
) => ValidationMessage;
