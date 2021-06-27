import React, { useState } from "react";
import { List } from "./List";
import { Select, SelectOption } from "./Select";
import { Chip } from "./Chip";
import { Button } from "./Button";

export interface Props<T> {
  value?: SelectOption<T>[];
  onChange: (value: SelectOption<T>[]) => void;
  options: SelectOption<T>[];
  placeholder?: string;
  disabled?: boolean;
}

export const MultipleSelect = <T extends any>({
  value,
  onChange,
  placeholder,
  disabled,
  options,
}: Props<T>) => {
  const [internalValue, setInternalValue] = useState<SelectOption<T> | null>(
    null
  );

  const valueProp = value ?? [];

  const availableOptions = options.filter(
    (o) => !valueProp.find((v) => v.id === o.id)
  );

  const handleAdd = () => {
    const option =
      internalValue && availableOptions.find((o) => o.id === internalValue?.id)
        ? internalValue
        : availableOptions[0];

    if (option) {
      setInternalValue(null);
      onChange([...valueProp, option]);
    }
  };

  const handleDelete = (id: string) => {
    onChange(valueProp.filter((o) => o.id !== id));
  };

  const selectedValues = valueProp.map((option) => (
    <Chip
      key={option.id}
      id={option.id}
      onDelete={disabled ? undefined : handleDelete}
    >
      {option.label}
    </Chip>
  ));

  return (
    <List mode="v">
      <List style={{ height: "100%" }} mode="h" justify="center">
        <Select
          onChange={setInternalValue}
          value={internalValue}
          options={availableOptions}
          placeholder={placeholder}
          disabled={disabled}
          allowNull={false}
        />
        <Button
          disabled={availableOptions.length === 0}
          onClick={handleAdd}
          icon="check"
        />
      </List>
      <List mode="h" wrapItems={true}>
        {selectedValues}
      </List>
    </List>
  );
};
