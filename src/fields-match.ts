import { FieldValidationResult } from 'lc-form-validation';

const defaultInvalidMessage = 'Fields do not match';

const isString = (input: any) => typeof input === 'string' || input instanceof String;

export const VALIDATION_TYPE = 'FIELDS-MATCH';

export const validateFieldsMatch = (value: string, vm: any, key: typeof vm): FieldValidationResult => {
  const result = new FieldValidationResult();
  let isValid = false;

  if (isString(value) && isString(vm[key])) {
    isValid = value === vm[key];
  }

  result.type = VALIDATION_TYPE;
  result.succeeded = isValid;
  result.errorMessage = isValid ? '' : defaultInvalidMessage;

  return result;
};
