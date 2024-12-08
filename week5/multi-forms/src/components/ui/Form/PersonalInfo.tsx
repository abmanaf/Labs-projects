import React from 'react';
import Input from '../Input';

interface PersonalInfoProps {
  data: {
    name: string;
    email: string;
    phone: string;
  };
  updateData: (field: string, value: string) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data, errors, updateData }) => {
  return (
    <div className="personal-info-container">
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <Input
          label="Name"
          type="text"
          value={data.name}
          onChange={(e) => updateData('name', e.target.value)}
          required
          placeholder="e.g., Stephen King"
          error={errors.name}
        />
        <Input
          label="Email"
          type="email"
          value={data.email}
          onChange={(e) => updateData('email', e.target.value)}
          required
          placeholder="e.g., stephenking@example.com"
          error={errors.email}
        />
        <Input
          label="Phone Number"
          type="number"
          value={data.phone}
          onChange={(e) => updateData('phone', e.target.value)}
          required
          placeholder="e.g., +1 234 567 890"
          error={errors.phone}
        />
      </form>
    </div>
  );
};


export default PersonalInfo;