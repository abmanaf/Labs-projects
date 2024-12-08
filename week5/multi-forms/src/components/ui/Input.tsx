import React from 'react';
interface InputProps {
    label: string;
    type: 'text' | 'email' | 'password' | 'number';
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
  }
  
  const Input: React.FC<InputProps> = ({
    label,
    type,
    value,
    placeholder,
    onChange,
    required = false,
    error,
  }) => {
    return (
      <div className="input-field" style={{ marginBottom: '15px' }}>
        <div className='label-error'>
        <label
          style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
        >
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
        {error && (
          <span style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
            {error}
          </span>
        )}
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          style={{
            border: error ? '2px solid red' : '1px solid #ccc',
          }}
        />
      </div>
    );
  };
  
  export default Input;
  