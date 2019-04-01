/**
 * Validate if two fields match.
 * @param value Input value to match
 * @param vm The viewmodel object (form)
 * @param key The field path in the viewmodel to compare
 */
import FieldValidationResult from 'lc-form-validation';

export declare const VALIDATION_TYPE: string;
export function validateFieldsMatch(value: string, vm: any, key: string): FieldValidationResult;
