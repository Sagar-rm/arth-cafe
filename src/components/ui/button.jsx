// src/components/ui/Button.js
import React from 'react';

const Button = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
    >
        {children}
    </button>
);

export default Button;
