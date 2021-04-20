import { SelectOption } from "../components/Select";
import { OptionsProvider } from "../components/Autocomplete";

export type FilterType =
  | "text"
  | "number"
  | "date"
  | "multipleSelect"
  | "multipleAutocomplete"
  | "bool";

export enum FilterMod {
  Set = "SET",
  Unset = "UNSET",
  Equal = "EQ",
  NotEqual = "NE",
  GreaterThen = "GT",
  GreaterThenOrEqual = "GTE",
  LessThen = "LT",
  LessThenOrEqual = "LT",
  Contains = "CON",
}

export interface FilterField<T> {
  label: string;
  name: string;
  type: FilterType;
  options?: SelectOption<T>[];
  optionsProvider?: OptionsProvider<T>;
}

const textFilterModes = [
  { label: "Установлено", id: FilterMod.Set, value: FilterMod.Set },
  { label: "Не установлено", id: FilterMod.Unset, value: FilterMod.Unset },
  { label: "Равно", id: FilterMod.Equal, value: FilterMod.Equal },
  { label: "Не равно", id: FilterMod.NotEqual, value: FilterMod.NotEqual },
  { label: "Содержит", id: FilterMod.Contains, value: FilterMod.Contains },
];

const dateAndNumberFilterModes = [
  { label: "Установлено", id: FilterMod.Set, value: FilterMod.Set },
  { label: "Не установлено", id: FilterMod.Unset, value: FilterMod.Unset },
  { label: "Равно", id: FilterMod.Equal, value: FilterMod.Equal },
  { label: "Не равно", id: FilterMod.NotEqual, value: FilterMod.NotEqual },
  {
    label: "Больше",
    id: FilterMod.GreaterThen,
    value: FilterMod.GreaterThen,
  },
  {
    label: "Больше или равно",
    id: FilterMod.GreaterThenOrEqual,
    value: FilterMod.GreaterThenOrEqual,
  },
  { label: "Меньше", id: FilterMod.LessThen, value: FilterMod.LessThen },
  {
    label: "Меньше или равно",
    id: FilterMod.LessThenOrEqual,
    value: FilterMod.LessThenOrEqual,
  },
];

export const builtInModesByType: Record<
  FilterType,
  SelectOption<FilterMod>[]
> = {
  bool: [
    { label: "Установлено", id: FilterMod.Set, value: FilterMod.Set },
    { label: "Не установлено", id: FilterMod.Unset, value: FilterMod.Unset },
    { label: "Равно", id: FilterMod.Equal, value: FilterMod.Equal },
  ],
  text: textFilterModes,
  multipleSelect: textFilterModes,
  multipleAutocomplete: textFilterModes,
  number: dateAndNumberFilterModes,
  date: dateAndNumberFilterModes,
};

export interface FilterValue {
  fieldName: string;
  filterMode: FilterMod;
  filterValue?: string | string[];
}

export enum SortByMode {
  ASC = "asc",
  DESC = "desc",
}

export type SortByField = {
  label: string;
  name: string;
};

export interface SortByValue {
  fieldName: string;
  sortByMode: SortByMode;
}

export const builtInFilterModeStr: Record<FilterMod, string> = {
  [FilterMod.Set]: "Установлено",
  [FilterMod.Unset]: "Не установлено",
  [FilterMod.Equal]: "Равно",
  [FilterMod.NotEqual]: "Не равно",
  [FilterMod.LessThen]: "<",
  [FilterMod.LessThenOrEqual]: "<=",
  [FilterMod.GreaterThen]: ">",
  [FilterMod.GreaterThenOrEqual]: ">=",
  [FilterMod.Contains]: "Содержит",
};

export const builtInSortByModeStr: Record<SortByMode, string> = {
  [SortByMode.ASC]: "Возрастание",
  [SortByMode.DESC]: "Убывание",
};

export interface QueryOptionsValue {
  filtersValue: FilterValue[];
  sortByValue: SortByValue;
}
