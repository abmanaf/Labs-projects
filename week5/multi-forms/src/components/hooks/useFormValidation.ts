export const useFormValidation = () => {
    const validateEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    const validatePhone = (phone: string) =>
      /^\d{10,15}$/.test(phone);
  
    const validateName = (name: string) => name.trim().length > 0;
  
    return {
      validateEmail,
      validatePhone,
      validateName,
    };
  };
  