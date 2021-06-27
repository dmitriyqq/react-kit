import React, { FC } from "react";
import { Form } from "./Form";
import { Text } from "./Text";
import {
  FormFieldsType,
  FormValue,
  getDefaultValue,
  getFormValue,
  FilterField,
  FilterMod,
  FilterType,
  FilterValue,
} from "../model";
import { SelectOption } from "./Select";

export interface Props {
  value: FormValue<FilterValue>;
  fields: FilterField<any>[];
  modesByType: Record<FilterType, SelectOption<FilterMod>[]>;
  modeStr: Record<FilterMod, string>;
  onChange: (
    internalFilterValue: FormValue<FilterValue>,
    value: FilterValue
  ) => void;
  createText?: string;
  onCreate: (value: FilterValue) => void;
}

const createFieldDefinitions = (
  fields: FilterField<any>[],
  modesByType: Record<FilterType, SelectOption<FilterMod>[]>,
  value: FormValue<FilterValue>
): FormFieldsType<FilterValue> => {
  const selectedField =
    fields.find((f) => f.name == value?.fieldName?.value) ?? fields[0];

  const fieldDefinitions: FormFieldsType<FilterValue> = [
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
      validator: (value?: FilterValue) => {
        const modeOption = modesByType[selectedField.type].find(
          (o) => o.value === value?.filterMode
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
    value?.filterMode?.value !== FilterMod.Set &&
    value?.filterMode?.value !== FilterMod.Unset
  ) {
    fieldDefinitions.push({
      label: "Значение фильтра",
      name: "filterValue",
      optional: false,
      icon: "pencil",
      type:
        value.filterMode === FilterMod.Contains ? "text" : selectedField.type,
      options: selectedField?.options ?? [],
      optionsProvider: selectedField.optionsProvider,
      initialValue: [],
    });
  }

  return fieldDefinitions;
};

export const AddFilterComponent: FC<Props> = ({
  fields,
  value,
  onChange,
  modesByType,
  modeStr,
  createText,
  onCreate,
}) => {
  if (fields.length == 0) {
    return <Text>Нет опций для фильтров</Text>;
  }

  const fieldDefinitions = createFieldDefinitions(fields, modesByType, value);

  const handleChange = (
    internalValue: FormValue<FilterValue>
  ) => {
    const newField = fields.find((f) => f.name == internalValue.fieldName?.value);

    let newInternalValue = internalValue;
    if (value.fieldName?.id !== internalValue?.fieldName?.id && newField) {
      newInternalValue = {
        ...internalValue,
        filterMode: {
          id: FilterMod.Set.toString(),
          label: modeStr[FilterMod.Set],
          value: FilterMod.Set,
        },
        filterValue: getDefaultValue(newField.type),
      };
    } else if (value.filterMode?.id !== internalValue?.filterMode?.id && newField) {
      newInternalValue = {
        ...internalValue,
        filterValue: getDefaultValue(newField.type),
      };
    }

    const newFinalValue = getFormValue(internalValue, fieldDefinitions);

    onChange(newInternalValue, newFinalValue);
  };

  return (
    <Form
      fields={fieldDefinitions}
      value={value}
      onChange={handleChange}
      onCreate={onCreate}
      createText={createText}
    />
  );
};
