import React, { ChangeEvent, useEffect, useState } from "react";
import { SelectOption } from "./Select";
import { BaseTextInput } from "./TextInput";
import { Button } from "./Button";
import { List } from "./List/List";

export type OptionsProvider<T> = (query: string) => Promise<SelectOption<T>[]>;

export interface Props<T> {
  name: string;
  placeholder?: string;
  value?: SelectOption<T>;
  onInputChange?: (query: string) => void;
  onChange: (value: SelectOption<T> | null) => void;
  onOptionsReceived?: (options: SelectOption<T>[]) => void;
  optionsProvider: OptionsProvider<T>;
  disabled?: boolean;
}

export const Autocomplete = <T extends unknown>({
  name,
  onInputChange,
  onChange,
  optionsProvider,
  disabled,
  value,
  placeholder,
  onOptionsReceived,
}: Props<T>) => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<SelectOption<T>[]>([]);
  const [inputValue, setInputValue] = useState<string>(value?.label ?? "");

  useEffect(() => {
    if (value?.label) {
      setInputValue(value.label);
    }
  }, [value]);

  const listName = `${name}-list`;

  const updateOptions = async (query: string) => {
    setLoading(true);
    const newOptions = (await optionsProvider(query)) ?? [];
    // const resultOptions = newOptions.filter((option) => option.label !== query);
    setLoading(false);

    setInputValue(query);
    setOptions(newOptions);

    if (onOptionsReceived) {
      onOptionsReceived(newOptions);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target?.value ?? "";
    if (onInputChange) {
      setInputValue(newInputValue);
    }

    void updateOptions(newInputValue);

    const selectedOption = options.find(
      (option) => option.label === newInputValue
    );

    if (onChange && selectedOption && selectedOption !== value) {
      onChange(selectedOption);
    }
  };

  const handleClear = () => {
    setInputValue("");
    onChange(null);
  };

  return (
    <List style={{ width: "100%" }} mode="h">
      <BaseTextInput
        list={listName}
        name={name}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
      />
      <Button
        disabled={loading}
        icon={loading ? "loader" : "close"}
        onClick={handleClear}
      />
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
