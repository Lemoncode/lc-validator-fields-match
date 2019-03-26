import { validateFieldsMatch, VALIDATION_TYPE } from './fields-match';
import { FieldValidationResult } from 'lc-form-validation';

describe('validateFieldsMatch test', () => {
  describe('customParams =>', () => {
    it('should invalidate when customParam does not belong viewmodel', () => {
      // Arrange
      const viewModel = { password: 'correct', confirmPassword: 'correct' };
      // Act
      const result = validateFieldsMatch(viewModel.confirmPassword, viewModel, 'wrong');
      // Assert
      expect(result).toEqual({
        errorMessage: 'Fields do not match',
        key: '',
        succeeded: false,
        type: VALIDATION_TYPE,
      } as FieldValidationResult);
    });

    it('should validate when customParam is belong viewmodel and it is match', () => {
      // Arrange
      const viewModel = { password: 'correct', confirmPassword: 'correct' };
      // Act
      const result = validateFieldsMatch(viewModel.confirmPassword, viewModel, 'password');
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    describe('nested object =>', () => {
      it('should invalidate when nested customParam does not belong to viewmodel', () => {
        // Arrange
        const viewModel = { subObject: { password: 'correct', confirmPassword: 'correct' } };
        // Act
        const result = validateFieldsMatch(viewModel.subObject.confirmPassword, viewModel, 'subObject.wrong');
        // Assert
        expect(result).toEqual({
          errorMessage: 'Fields do not match',
          key: '',
          succeeded: false,
          type: VALIDATION_TYPE,
        } as FieldValidationResult);
      });

      it('should invalidate when nested customParam does not match', () => {
        // Arrange
        const viewModel = { subObject: { password: 'correct', confirmPassword: 'wrong' } };
        // Act
        const result = validateFieldsMatch(viewModel.subObject.confirmPassword, viewModel, 'subObject.password');
        // Assert
        expect(result).toEqual({
          errorMessage: 'Fields do not match',
          key: '',
          succeeded: false,
          type: VALIDATION_TYPE,
        } as FieldValidationResult);
      });

      it('should validate when match inputs', () => {
        // Arrange
        const viewModel = { subObject: { password: 'correct', confirmPassword: 'correct' } };
        // Act
        const result = validateFieldsMatch(viewModel.subObject.confirmPassword, viewModel, 'subObject.password');
        // Assert
        expect(result.succeeded).toBeTruthy();
      });

      it('should validate when match inputs (complex object)', () => {
        // Arrange
        const viewModel = {
          name: 'Test',
          data: {
            personal: {
              email: 'correct',
            },
          },
        };
        // Act
        const result = validateFieldsMatch(viewModel.data.personal.email, viewModel, 'data.personal.email');
        // Assert
        expect(result.succeeded).toBeTruthy();
      });
    });
  });

  it('should invalidate when undefined input', () => {
    // Arrange
    const viewModel = { password: 'correct', confirmPassword: undefined };
    // Act
    const result = validateFieldsMatch(viewModel.confirmPassword, viewModel, 'password');
    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate when null input', () => {
    // Arrange
    const viewModel = { password: 'correct', confirmPassword: null };
    // Act
    const result = validateFieldsMatch(viewModel.confirmPassword, viewModel, 'password');
    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate when do not match inputs', () => {
    // Arrange
    const viewModel = { password: 'correct', confirmPassword: 'wrong' };
    // Act
    const result = validateFieldsMatch(viewModel.confirmPassword, viewModel, 'password');
    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should validate when match inputs', () => {
    // Arrange
    const viewModel = { password: 'correct', confirmPassword: 'correct' };
    // Act
    const result = validateFieldsMatch(viewModel.confirmPassword, viewModel, 'password');
    // Assert
    expect(result.succeeded).toBeTruthy();
  });
});
