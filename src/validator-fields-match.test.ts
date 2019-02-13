import { validateFieldsMatch } from './validator-fields-match';
import { FieldValidationResult } from 'lc-form-validation';

describe('validateFieldsMatch', () => {
  it('should invalidate when undefined or null input', () => {
    const firstField = undefined;
    const secondField = undefined;

    let result = validateFieldsMatch({ first: firstField, second: secondField }, null, null) as FieldValidationResult;
    expect(result.succeeded).toBeFalsy();
    const testFields = {
      first: null,
      second: null,
    };
    result = validateFieldsMatch(testFields, null, null) as FieldValidationResult;
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate null input', () => {
    // Arrange
    const firstField = null;
    const secondField = null;

    // Act
    const result = validateFieldsMatch({ first: firstField, second: secondField }, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate empty input', () => {
    // Arrange
    const firstField = '';
    const secondField = '';

    // Act
    const result = validateFieldsMatch({ first: firstField, second: secondField }, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate when do not match inputs', () => {
    // Arrange
    const firstField = '12345';
    const secondField = '67890';

    // Act
    const result = validateFieldsMatch({ first: firstField, second: secondField }, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should validate when match inputs', () => {
    // Arrange
    const firstField = '12345678';
    const secondField = '12345678';

    // Act
    const result = validateFieldsMatch({ first: firstField, second: secondField }, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeTruthy();
  });
});
