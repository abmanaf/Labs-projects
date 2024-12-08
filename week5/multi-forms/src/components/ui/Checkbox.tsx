import React from 'react';

interface CheckboxProps {
  label: string;
  note: string;
  price: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, note, price, checked, onChange }) => {
  return (
    <div className='checkbox-container'
      style={{
        border: checked ? '1px solid var(--bg-confirm-b)' : '1px solid #ccc',
        backgroundColor: checked ? 'var(--very-light-gray)' : '#fff',
        transition: 'border-color 0.2s ease, background-color 0.2s ease',
      }}
      onClick={(e) => {
        e.stopPropagation();
        onChange({
          target: {
            checked: !checked,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{
          marginRight: '15px',
          cursor: 'pointer',
        }}
      />
      <div className='description' style={{ flex: 1 }}>
        <label>{label}</label>
        <p>{note}</p>
      </div>
      <span className='per-month-year'>{price}</span>
    </div>
  );
};

export default Checkbox;
