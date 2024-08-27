import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Component imports
import Navigational from './components/Navigational';
import Sidebar from './components/Sidebar';

// Context imports
import { ThemeProvider } from './contexts/ThemeContext';

// Page imports
import Armors from './pages/Armors';
import Characters from './pages/Characters'
import GettingStarted from './pages/GettingStarted';
import Ingredients from './pages/Ingredients';
import KeyItems from './pages/KeyItems';
import Materials from './pages/Materials';
import Medicines from './pages/KeyItems';
import Weapons from './pages/Weapons';


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
      <Router>

        <Navigational theme={theme} toggleTheme={toggleTheme} />
        <div className='body' style={{ display: 'flex', flexDirection: 'row' }}>
          <Sidebar />
          <div className="content" style={{ width: "100%" }}>
            <Routes>
              <Route path="/" element={<GettingStarted />} />
              <Route path="/armors" element={<Armors />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/ingredients" element={<Ingredients />} />
              <Route path="/key-items" element={<KeyItems />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/medicines" element={<Medicines />} />
              <Route path="/weapons" element={<Weapons />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
