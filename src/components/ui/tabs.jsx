// src/components/ui/Tabs.js
import React, { useState } from 'react';

export const Tabs = ({ children }) => (
    <div className="space-y-2">{children}</div>
);

export const TabsList = ({ children }) => (
    <div className="flex space-x-2">{children}</div>
);

export const TabsTrigger = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
    >
        {label}
    </button>
);

export const TabsContent = ({ children, isActive }) => (
    isActive ? <div className="p-4 border-t border-gray-300">{children}</div> : null
);
