import './App.css';
import logoLight from './assets/logoLight.jpg';
import logoDark from './assets/logoDark.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');  // State to manage theme

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.style.backgroundColor = newTheme === 'light' ? '#f8f9fa' : '#343a40';
    document.body.style.color = newTheme === 'light' ? '#000' : '#fff';
  };

  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    toggleTheme()
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar bg={theme} data-bs-theme={theme} sticky="top" className={'shadow-sm'}>
        <Container>
          <Navbar.Brand href="#">
            <img
              src={theme == 'light' ? logoLight : logoDark}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Black Myth: Wu Kong API logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/docs">Docs</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Nav>
              {/* GitHub Link */}
              <Nav.Link href="https://github.com/chengl1113/black-myth-wu-kong-api" target="_blank">
                <FaGithub size={24} className={theme === 'light' ? 'text-dark' : 'text-light'} />
              </Nav.Link>
              {/* Light Mode Toggle */}

            </Nav>
          </Navbar.Collapse>
          <Container style={{ width: "auto" }}>
            <DarkModeSwitch
              style={{ width: 24, height: 24 }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={120}
            />
          </Container>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
