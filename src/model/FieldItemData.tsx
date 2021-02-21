export type FieldItemDataType = "text" | "number" | "datetime" | "bool";

export interface FieldDefinition {
  name: string;
  label: string;
  type: FieldItemDataType;
  validator: (value: any) => boolean;
}
