import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
// Componenet imports
import Navigational from './components/Navigational';

// Context imports
import { ThemeProvider } from './contexts/ThemeContext';


function App() {
  const [theme, setTheme] = useState('light');  // State to manage theme

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.style.backgroundColor = newTheme === 'light' ? '#f8f9fa' : '#343a40';
    document.body.style.color = newTheme === 'light' ? '#000' : '#fff';
  };



  return (
    <ThemeProvider>
      <div className={`App ${theme}`}>
        <Navigational theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
