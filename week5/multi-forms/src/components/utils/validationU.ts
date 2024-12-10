export const isFormComplete = (formData: any) => {
    const { name, email, phone } = formData;
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      phone.trim() !== ''
    );
  };
  