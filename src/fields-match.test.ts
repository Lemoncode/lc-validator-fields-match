import { validateFieldsMatch } from './fields-match';

describe('validateFieldsMatch', () => {
  it('should invalidate when undefined input', () => {
    // Arrange
    const viewModel = { password: undefined, confirmPassword: undefined };
    // Act
    const result = validateFieldsMatch(viewModel.confirmPassword, viewModel, 'password');
    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate when null input', () => {
    // Arrange
    const viewModel = { password: null, confirmPassword: null };

    // Act
    const result = validateFieldsMatch(viewModel.confirmPassword, viewModel, 'password');

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate when do not match inputs', () => {
    // Arrange
    const viewModel = { password: '12345', confirmPassword: '12346' };

    // Act
    const result = validateFieldsMatch(viewModel.confirmPassword, viewModel, 'password');

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should validate when match inputs', () => {
    // Arrange
    const viewModel = { password: '12345', confirmPassword: '12345' };

    // Act
    const result = validateFieldsMatch(viewModel.confirmPassword, viewModel, 'password');

    // Assert
    expect(result.succeeded).toBeTruthy();
  });
});
