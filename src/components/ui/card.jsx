// src/components/ui/Card.js
import React from 'react';

export const Card = ({ children }) => (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 w-full max-w-sm mx-auto my-4">
        {children}
    </div>
);

export const CardHeader = ({ children }) => (
    <div className="mb-2">
        {children}
    </div>
);

export const CardTitle = ({ children }) => (
    <h2 className="text-lg font-semibold text-gray-800">{children}</h2>
);

export const CardDescription = ({ children }) => (
    <p className="text-sm text-gray-500">{children}</p>
);

export const CardContent = ({ children }) => (
    <div className="my-2">
        {children}
    </div>
);

export const CardFooter = ({ children }) => (
    <div className="mt-4">
        {children}
    </div>
);
