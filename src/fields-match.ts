import { FieldValidationResult } from 'lc-form-validation';

const defaultInvalidMessage = 'Fields do not match';

const isString = (input: any) => typeof input === 'string' || input instanceof String;
const getNestedKey = (nestedObj: any, path: string) =>
  path.split('.').reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined), nestedObj);

export const VALIDATION_TYPE = 'FIELDS_MATCH';

export const validateFieldsMatch = (value: string, vm: any, key: string): FieldValidationResult => {
  const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
  let fieldsAreEqual = false;

  const nestedKeyResult = getNestedKey(vm, key);
  if (nestedKeyResult === undefined) {
    console.warn(`FieldMatch Validator: field id ${key} to compare not found`);
  } else {
    if (isString(value) && isString(nestedKeyResult)) {
      fieldsAreEqual = value === nestedKeyResult;
    } else {
      console.warn('FieldMatch Validator: an error has ocurred');
    }
  }

  fieldValidationResult.errorMessage = fieldsAreEqual ? '' : defaultInvalidMessage;
  fieldValidationResult.type = VALIDATION_TYPE;
  fieldValidationResult.succeeded = fieldsAreEqual;

  return fieldValidationResult;
};
