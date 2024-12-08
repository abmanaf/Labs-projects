import { isFormComplete } from "../../utils/validationU";

describe('isFormComplete', () => {
  it('should return true when all fields are filled', () => {
    const formData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
    };
    expect(isFormComplete(formData)).toBe(true);
  });

  it('should return false when any field is empty', () => {
    const formData = {
      name: '',
      email: 'john.doe@example.com',
      phone: '1234567890',
    };
    expect(isFormComplete(formData)).toBe(false);
  });
});
