import { Form } from "./Form";
import { CSSProperties, FC, useState } from "react";
import { FormFieldsType, FormValue } from "../model";
import React from "react";
import {
  builtInSortByModeStr,
  SortByField,
  SortByMode,
  SortByValue,
} from "../model";
import { List, TextListItem } from "./List";

export interface Props {
  fields: SortByField[];
  value: SortByValue;
  onChange: (value: SortByValue) => void;
  createText?: string;
  className?: string;
  style?: CSSProperties;
  sortByModeStr?: Record<SortByMode, string>;
}

export const SortByComponent: FC<Props> = ({
  fields,
  value,
  onChange,
  createText,
  style,
  className,
  sortByModeStr = builtInSortByModeStr,
}) => {
  const [internalValue, setInternalValue] = useState<FormValue<SortByValue>>({
    sortByMode: {
      value: value.sortByMode,
      id: value.sortByMode.toString(),
      label: sortByModeStr[value.sortByMode],
    },
    fieldName: {
      value: value.fieldName,
      id: value.fieldName,
      label: fields.find((f) => f.name === value.fieldName)?.name ?? "unknown",
    },
  });
  const [open, setOpen] = useState(false);
  const icon = value.sortByMode === SortByMode.DESC ? "sort-desc" : "sort-asc";
  const fieldsDefinition: FormFieldsType<SortByValue> = [
    {
      name: "fieldName",
      label: "Поле",
      type: "select",
      options: fields.map((field) => ({
        id: field.name,
        label: field.label,
        value: field.name,
      })),
    },
    {
      name: "sortByMode",
      label: "Порядок",
      type: "select",
      options: [
        {
          id: "asc",
          label: sortByModeStr[SortByMode.ASC],
          value: SortByMode.ASC,
        },
        {
          id: "desc",
          label: sortByModeStr[SortByMode.DESC],
          value: SortByMode.DESC,
        },
      ],
    },
  ];

  const customAction = [
    { id: "toggleFilters", icon: open ? "arrow-up-s" : "arrow-down-s" },
  ];

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleChange = (
    newValue: SortByValue,
    newInternalValue: FormValue<SortByValue>
  ) => {
    setInternalValue(newInternalValue);
    onChange(newValue);
  };

  return (
    <List mode="v" style={style} className={className}>
      <TextListItem
        text={"Сортировка"}
        icon={icon}
        customActions={customAction}
        onAction={toggleOpen}
      />

      {fields.length > 0 && open && (
        <Form<SortByValue>
          fields={fieldsDefinition}
          onChange={handleChange}
          value={internalValue}
          createText={createText}
        />
      )}
    </List>
  );
};
