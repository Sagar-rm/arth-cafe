// src/components/ui/Input.js
import React from 'react';

const Input = ({
    placeholder,
    type = 'text',
    label,
    id,
    error,
    ...props
}) => (
    <div className="mb-4">
        {label && (
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
        )}
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                error ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${id}-error` : undefined}
            {...props}
        />
        {error && (
            <p id={`${id}-error`} className="mt-1 text-sm text-red-500">
                {error}
            </p>
        )}
    </div>
);

export default Input;
