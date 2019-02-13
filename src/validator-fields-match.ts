import { FieldValidationFunction, FieldValidationResult } from 'lc-form-validation';

const isString = (input: any) => typeof input === 'string' || input instanceof String;
const defaultInvalidMessage = 'Fields do not match';

export interface Fields {
  first: string;
  second: string;
}

export const validateFieldsMatch: FieldValidationFunction<Fields> = ({ first, second }) => {
  const result = new FieldValidationResult();
  let isValid = false;

  if (isString(first) && first.length && isString(second) && second.length) {
    isValid = first === second;
  }

  result.succeeded = isValid;
  result.errorMessage = isValid ? '' : defaultInvalidMessage;

  return result;
};
