import {
  DataFieldValue,
  FieldDefinition,
  FormValue,
  ValidatorType,
} from "./FormTypes";

export const getValidationResult = <T extends object>(
  validator?: ValidatorType<T>,
  value?: T
): string | null => {
  const validationResult = validator ? validator(value) : null;
  return validationResult && !validationResult.valid
    ? validationResult.message ?? null
    : null;
};

export const validateFields = <T>(
  fields: FieldDefinition<T, DataFieldValue<any>>[],
  value: FormValue<T>
) => {
  let fieldsValid = true;

  for (const field of fields) {
    const validationResult = field.validator && field.validator(value);
    fieldsValid =
      fieldsValid && (validationResult ? validationResult.valid : true);
  }

  return fieldsValid;
};
