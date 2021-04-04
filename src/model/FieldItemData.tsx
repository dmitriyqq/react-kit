import { SelectOption } from "../components/Select";
import { OptionsProvider } from "../components/Autocomplete";

export type FieldItemDataType =
  | "text"
  | "number"
  | "date"
  | "bool"
  | "select"
  | "autocomplete";

export type ValidatorType<V> = (
  value: V
) => { valid: boolean; message?: string | null };

export interface FieldDefinition<T, V> {
  name: keyof T;
  label: string;
  type: FieldItemDataType;
  options?: SelectOption<V>[];
  placeholder?: string;
  validator?: ValidatorType<V>;
  condition?: { fieldName: keyof T; fieldValue: string };
  optionsProvider?: OptionsProvider<string>;
}
