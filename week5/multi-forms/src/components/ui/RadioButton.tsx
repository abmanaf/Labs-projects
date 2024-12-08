import React from 'react';

interface RadioButtonProps {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, label, value, checked, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        style={{ marginRight: '10px', cursor: 'pointer' }}
      />
      <label style={{ fontSize: '16px' }}>{label}</label>
    </div>
  );
};

export default RadioButton;
