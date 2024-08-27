import React, { useState, useContext, createContext } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        document.body.style.backgroundColor = newTheme === 'light' ? '#f8f9fa' : '#343a40';
        document.body.style.color = newTheme === 'light' ? '#000' : '#fff';
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
