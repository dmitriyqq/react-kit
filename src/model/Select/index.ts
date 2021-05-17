import { SelectOption } from "../../components/Select";

export const getOptionsFromStringArray = (
  array?: string[]
): SelectOption<string>[] =>
  (array ?? []).map((v) => ({ id: v, label: v, value: v }));
