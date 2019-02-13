import { FieldValidationFunction, FieldValidationResult } from 'lc-form-validation';

const defaultInvalidMessage = 'Fields do not match';

const isString = (input: any) => typeof input === 'string' || input instanceof String;

export interface Fields {
  first: string;
  second: string;
}

export const VALIDATION_TYPE = 'FIELDS-MATCH';

export const validateFieldsMatch: FieldValidationFunction = ({ first, second }) => {
  const result = new FieldValidationResult();
  let isValid = false;

  if (isString(first) && first.length && isString(second) && second.length) {
    isValid = first === second;
  }

  result.type = VALIDATION_TYPE;
  result.succeeded = isValid;
  result.errorMessage = isValid ? '' : defaultInvalidMessage;

  return result;
};
