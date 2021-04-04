import React, { ChangeEvent, useState } from "react";
import { SelectOption } from "./Select";
import { BaseTextInput } from "./TextInput";
import { Button } from "./Button";
import { List } from "./List/List";

export type OptionsProvider<T> = (query: string) => SelectOption<T>[];

export interface Props<T> {
  name: string;
  value: T | null;
  onInputChange?: (query: string) => void;
  onChange: (value: SelectOption<T> | null) => void;
  optionsProvider: OptionsProvider<T>;
  disabled?: boolean;
  initialValue?: string;
}

export const Autocomplete = <T extends unknown>({
  name,
  onInputChange,
  onChange,
  optionsProvider,
  disabled,
  initialValue,
}: Props<T>) => {
  const [inputValue, setInputValue] = useState(initialValue ?? "");
  const [options, setOptions] = useState<SelectOption<T>[]>([]);
  const listName = `${name}-list`;

  const updateOptions = async (query: string) => {
    const newOptions = (await optionsProvider(query)) ?? [];

    setOptions(newOptions.filter((option) => option.label !== query));
    setInputValue(query);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value ?? "";
    if (onInputChange) {
      onInputChange(value);
      setInputValue(value);
      void updateOptions(value);
    }
    handleSelect(event);
  };

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event?.target?.value || "";
    const selectedOption = options.find((option) => id === option.id);

    if (onChange && selectedOption) {
      onChange(selectedOption);
      setInputValue(selectedOption.label);
    }
  };

  const handleClear = () => {
    setInputValue("");
    onChange(null);
  };

  return (
    <List mode="h">
      <BaseTextInput
        list={listName}
        name={name}
        value={inputValue}
        onChange={handleChange}
        onSelect={handleSelect}
        disabled={disabled}
      />
      <Button icon="close" onClick={handleClear} />
      <datalist id={listName}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </datalist>
    </List>
  );
};
