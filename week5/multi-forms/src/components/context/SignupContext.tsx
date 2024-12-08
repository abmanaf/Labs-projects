import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SignupContextProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    plan: string;
    addOns: { [key: string]: boolean };
  };
  updateField: (field: string, value: any) => void;
  resetForm: () => void;
}

const SignupContext = createContext<SignupContextProps | undefined>(undefined);

export const SignupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    addOns: { storage: false, support: false },
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      plan: '',
      addOns: { storage: false, support: false },
    });
  };

  return (
    <SignupContext.Provider value={{ formData, updateField, resetForm }}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignupContext = (): SignupContextProps => {
  const context = useContext(SignupContext);
  if (!context) throw new Error('useSignupContext must be used within a SignupProvider');
  return context;
};
