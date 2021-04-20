import React, { FC } from "react";
import { Form } from "./Form/Form";
import { Text } from "./Text";
import {
  FieldDefinition,
  FormValue,
  getDefaultValue,
} from "../model/FieldItemData";
import {
  FilterField,
  FilterMod,
  FilterType,
  FilterValue,
} from "../model/Filters";
import { SelectOption } from "./Select";

export interface Props {
  value: FilterValue;
  internalValue: FormValue<FilterValue>;
  fields: FilterField<any>[];
  modesByType: Record<FilterType, SelectOption<FilterMod>[]>;
  onChange: (
    value: FilterValue,
    internalFilterValue: FormValue<FilterValue>
  ) => void;
  submitText?: string;
  onCreate: (value: FilterValue) => void;
}

export const AddFilterComponent: FC<Props> = ({
  fields,
  internalValue,
  value,
  onChange,
  modesByType,
  submitText,
  onCreate,
}) => {
  if (fields.length == 0) {
    return <Text>Нет опций для фильтров</Text>;
  }

  const selectedField =
    fields.find((f) => f.name == value.fieldName) ?? fields[0];

  const fieldDefinitions: FieldDefinition<FilterValue, any>[] = [
    {
      label: "Поле",
      name: "fieldName",
      type: "select",
      icon: "profile",
      options: fields.map(({ label, name }) => ({
        id: name,
        label,
        value: name,
      })),
    },
    {
      label: "Тип фильтра",
      name: "filterMode",
      type: "select",
      icon: "filter",
      initialValue: modesByType[selectedField.type][0],
      options: modesByType[selectedField.type],
      validator: (value: FilterValue) => {
        const modeOption = modesByType[selectedField.type].find(
          (o) => o.value === value.filterMode
        );
        return {
          valid: modeOption !== undefined,
          message:
            modeOption === undefined
              ? `Поле "${selectedField.label}" не поддерживает выбранный фильтр`
              : null,
        };
      },
    },
  ];

  if (
    value.filterMode !== FilterMod.Set &&
    value.filterMode !== FilterMod.Unset
  ) {
    fieldDefinitions.push({
      label: "Значение фильтра",
      name: "filterValue",
      optional: false,
      icon: "pencil",
      type:
        value.filterMode === FilterMod.Contains ? "text" : selectedField.type,
      options: selectedField.options,
      optionsProvider: selectedField.optionsProvider,
      initialValue: [],
    });
  }

  const handleChange = (
    newValue: FilterValue,
    newInternalValue: FormValue<FilterValue>
  ) => {
    const newField = fields.find((f) => f.name == newValue.fieldName);

    if (value.fieldName !== newValue?.fieldName && newField) {
      onChange(
        {
          ...newValue,
          filterMode: FilterMod.Set,
          filterValue: getDefaultValue(newField.type),
        },
        {
          ...newInternalValue,
          filterMode: {
            value: FilterMod.Set,
            label: "Установлено",
            id: FilterMod.Set.toString(),
          },
          filterValue: getDefaultValue(newField.type),
        }
      );
      return;
    }

    if (value.filterMode !== newValue?.filterMode && newField) {
      onChange(
        {
          ...newValue,
          filterValue: getDefaultValue(newField.type),
        },
        {
          ...newInternalValue,
          filterValue: getDefaultValue(newField.type),
        }
      );
      return;
    }

    onChange(newValue, newInternalValue);
  };

  return (
    <Form
      fields={fieldDefinitions}
      value={value}
      internalValue={internalValue}
      onChange={handleChange}
      onCreate={onCreate}
      submitText={submitText}
    />
  );
};
