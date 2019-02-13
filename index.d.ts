/**
 * TODO:
 * Validates an input value as a spanish National Identity Number (DNI)
 * @param value Input value to be interpreted as DNI
 */
import FieldValidationResult from 'lc-form-validation';

export declare const VALIDATION_TYPE : string;
export function validateFieldsMatch(value: string, vm: any, key: typeof vm): FieldValidationResult;
