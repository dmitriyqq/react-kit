import { TextType } from "../themes";

export type ListItemDataType = "text" | "number" | "datetime" | "fraction";

export interface ListItemData {
  type: ListItemDataType;
  label?: string;
  text?: string;
  date?: Date;
  num?: number;
  numerator?: number;
  denominator?: number;
  dateTime?: Date;
  time?: Date;
  variant?: TextType;
  color?: string;
  id?: string;
  tags?: TagType[];
  icon?: string;
  image?: string;
}

export interface CustomAction {
  icon: string;
  id: string;
}

export type TagType = {
  label: string;
  color?: string;
  id: string;
};
