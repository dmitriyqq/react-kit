import { List } from "./List/List";
import { SelectOption } from "./Select";
import { Button } from "./Button";
import React, { useState } from "react";
import { Autocomplete, OptionsProvider } from "./Autocomplete";
import { Chip } from "./Chip";

export interface Props<T> {
  name: string;
  value: SelectOption<T>[];
  onChange: (value: SelectOption<T>[]) => void;
  optionsProvider: OptionsProvider<T>;
  placeholder?: string;
  disabled?: boolean;
}

export const MultipleAutocomplete = <T extends any>({
  value,
  onChange,
  placeholder,
  disabled,
  optionsProvider,
  name,
}: Props<T>) => {
  const [internalValue, setInternalValue] = useState<SelectOption<T> | null>(
    null
  );
  const [availableOptions, setAvailableOptions] = useState<SelectOption<T>[]>(
    []
  );

  const handleNewOptions = (options: SelectOption<T>[]) => {
    const newAvailableOptions = options.filter(
      (o) => !value.find((v) => v.id === o.id)
    );
    setAvailableOptions(newAvailableOptions);
  };

  const handleAdd = () => {
    const option = availableOptions.find((o) => o.id === internalValue?.id);

    if (internalValue?.id && option) {
      setInternalValue(null);
      onChange([...value, option]);
    }
  };

  const handleDelete = (id: string) => {
    onChange(value.filter((o) => o.id !== id));
  };

  const selectedValues = value.map((option) => (
    <Chip
      key={option.id}
      id={option.id}
      onDelete={disabled ? undefined : handleDelete}
    >
      {option.label}
    </Chip>
  ));

  return (
    <List mode="v" align="stretch">
      <List mode="h">
        <Autocomplete<T>
          name={name}
          onChange={setInternalValue}
          optionsProvider={optionsProvider}
          placeholder={placeholder}
          disabled={disabled}
          onOptionsReceived={handleNewOptions}
        />
        <Button
          disabled={availableOptions.length === 0 || internalValue === null}
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
