import React from 'react';
import './inputField.css';

interface InputFieldProps {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

export const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  name, 
  value, 
  onChange, 
  min, 
  max 
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type="number"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
  </div>
);
