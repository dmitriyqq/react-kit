import {
  builtInFilterModeStr,
  builtInModesByType,
  FilterField,
  FilterMod,
  FilterType,
  FilterValue,
} from "../model/Filters";
import { SelectOption } from "./Select";
import { AddFilterComponent } from "./AddFilterComponent";
import React, { CSSProperties, FC, useState } from "react";
import { List } from "./List/List";
import { Chip } from "./Chip";
import { FormValue, getDefaultValue } from "../model/FieldItemData";
import { TextListItem } from "./List/TextListItem";

export interface Props {
  fields: FilterField<any>[];
  value: FilterValue[];
  modesByType: Record<FilterType, SelectOption<FilterMod>[]>;
  onChange: (value: FilterValue[]) => void;
  submitText?: string;
  modeStr: Record<FilterMod, string>;
  className?: string;
  style?: CSSProperties;
}

const getAvailableFields = (
  fields: FilterField<any>[],
  value: FilterValue[]
): FilterField<any>[] =>
  fields.filter((f) => value.find((v) => v.fieldName === f.name) === undefined);

const getDefaultField = (
  availableFields: FilterField<any>[]
): FilterField<any> | null => {
  return availableFields.length > 0 ? availableFields[0] : null;
};

const getDefaultFieldName = (field: FilterField<any> | null) =>
  field
    ? {
        value: field.name,
        id: field.name,
        label: field.label,
      }
    : null;

const getDefaultFilterFieldValue = (
  defaultField: FilterField<any> | null
): any => {
  return defaultField ? getDefaultValue(defaultField?.type) : undefined;
};

export const Filters: FC<Props> = ({
  fields,
  modesByType = builtInModesByType,
  value,
  onChange,
  submitText,
  modeStr = builtInFilterModeStr,
  style,
  className,
}) => {
  const valueProp = value ?? [];

  const getDefaultFilterMode = () => ({
    id: FilterMod.Set.toString(),
    label: modeStr[FilterMod.Set],
    value: FilterMod.Set,
  });

  const getDefaultInternalFilterValue = (
    availableFields: FilterField<any>[]
  ): FormValue<FilterValue> => {
    const defaultField = getDefaultField(availableFields);

    return {
      fieldName: getDefaultFieldName(defaultField),
      filterMode: getDefaultFilterMode(),
      filterValue: getDefaultFilterFieldValue(defaultField),
    };
  };

  const getDefaultFilterValue = (
    availableFields: FilterField<any>[]
  ): FilterValue => {
    const defaultField = getDefaultField(availableFields);

    return {
      fieldName: getDefaultFieldName(defaultField)?.value ?? "",
      filterMode: getDefaultFilterMode()?.value ?? FilterMod.Set,
      filterValue: getDefaultFilterFieldValue(defaultField),
    };
  };

  const [open, setOpen] = useState(false);
  const initialAvailableFields = getAvailableFields(fields, valueProp);
  const [internalFilterValue, setInternalFilterValue] = useState<
    FormValue<FilterValue>
  >(getDefaultInternalFilterValue(initialAvailableFields));
  const [filterValue, setFilterValue] = useState<FilterValue>(
    getDefaultFilterValue(initialAvailableFields)
  );

  const resetValue = (newValue: FilterValue[]) => {
    const availableFields = getAvailableFields(fields, newValue);
    setInternalFilterValue(getDefaultInternalFilterValue(availableFields));
    setFilterValue(getDefaultFilterValue(availableFields));
  };

  const handleCreate = () => {
    if (filterValue) {
      const newValue = [...valueProp, filterValue];
      onChange(newValue);
      resetValue(newValue);
    }
  };

  const handleDelete = (id: string) => {
    const newValue = value.filter((v) => v.fieldName !== id);
    onChange(newValue);
    resetValue(newValue);
  };

  const handleFilterChange = (
    newValue: FilterValue,
    newInternalValue: FormValue<FilterValue>
  ) => {
    setFilterValue(newValue);
    setInternalFilterValue(newInternalValue);
  };

  const chips = valueProp.map((v, i) => {
    const fieldDescription = fields.find((o) => o.name === v.fieldName);

    const filterDisplayValue = `${fieldDescription?.label}: ${
      modeStr[v.filterMode]
    } ${
      v.filterMode === FilterMod.Set || v.filterMode === FilterMod.Unset
        ? ""
        : `"${v.filterValue}"`
    }`;

    return (
      <Chip key={v.fieldName} onDelete={handleDelete} id={v.fieldName}>
        {filterDisplayValue}
      </Chip>
    );
  });

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const customAction = [
    { id: "toggleFilters", icon: open ? "arrow-up-s" : "arrow-down-s" },
  ];

  return (
    <List mode="v" style={style} className={className}>
      <TextListItem
        text="Фильтры"
        icon="filter"
        customActions={customAction}
        onAction={toggleOpen}
      />
      {initialAvailableFields?.length > 0 && open && (
        <AddFilterComponent
          fields={initialAvailableFields}
          modesByType={modesByType}
          value={filterValue}
          internalValue={internalFilterValue}
          onChange={handleFilterChange}
          onCreate={handleCreate}
          submitText={submitText}
        />
      )}
      <List mode="h" wrapItems={true}>
        {chips}
      </List>
    </List>
  );
};
