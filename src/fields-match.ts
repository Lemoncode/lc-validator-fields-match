import { FieldValidationResult } from 'lc-form-validation';

const defaultInvalidMessage = 'Fields do not match';

const isString = (input: any) => typeof input === 'string' || input instanceof String;
const isKeyOfVm = (vm: any, path: string) => path.split('.').reduce((o, key) => (o && o[key] ? o[key] : null), vm);

export const VALIDATION_TYPE = 'FIELDS_MATCH';

export const validateFieldsMatch = (value: string, vm: any, key: string): FieldValidationResult => {
  const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
  let fieldsAreEqual = false;

  if (value && value.length === 0) {
    fieldValidationResult.errorMessage = 'The field is empty';
  } else {
    if (!isKeyOfVm(vm, key)) {
      fieldValidationResult.errorMessage = 'The field pass by customParams is wrong';
    } else {
      const obj = isKeyOfVm(vm, key);
      if (isString(value) && isString(obj)) {
        fieldsAreEqual = value === obj;
        fieldValidationResult.errorMessage = fieldsAreEqual ? '' : defaultInvalidMessage;
      }
    }
  }

  fieldValidationResult.type = VALIDATION_TYPE;
  fieldValidationResult.succeeded = fieldsAreEqual;

  return fieldValidationResult;
};
