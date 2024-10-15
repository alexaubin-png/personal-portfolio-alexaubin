// DarkModeContext.jsx
import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

   useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
}, [isDarkMode]);
const value = useMemo(() => ({ isDarkMode, toggleMode }), [isDarkMode]);
    return (
        <DarkModeContext.Provider value={value}>
        {children}
    </DarkModeContext.Provider>
);
};
