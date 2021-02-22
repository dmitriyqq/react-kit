import { SelectOption } from "../components/Select";

export type FieldItemDataType =
  | "text"
  | "number"
  | "datetime"
  | "bool"
  | "select";

export interface FieldDefinition<T, V> {
  name: keyof T;
  label: string;
  type: FieldItemDataType;
  options?: SelectOption<V>[];
  placeholder?: string;
  validator?: (fieldName: string, value: V) => boolean;
}
