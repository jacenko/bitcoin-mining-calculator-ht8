import React from 'react';

const InputField = ({ label, name, value, onChange, placeholder, type = 'number', step }) => {
  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        step={step}
        required
      />
    </div>
  );
};

export default InputField;