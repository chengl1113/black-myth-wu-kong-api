import React from 'react';
import logoLight from '../assets/logoLight.jpg';
import logoDark from '../assets/logoDark.jpg';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const Navigational = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Navbar bg={theme} data-bs-theme={theme} sticky="top" className="shadow-sm" expand="lg">
            <Container>
                {/* Left Side: Website Logo and Links */}
                <Navbar.Brand href="#">
                    <img
                        src={theme === 'light' ? logoLight : logoDark}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Black Myth: Wukong API logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Docs Link */}
                        <Nav.Link as={Link} to="/">Getting Started</Nav.Link>

                        {/* API Dropdown */}
                        <NavDropdown title="API Routes" id="api-dropdown" menuVariant={theme}>
                            <NavDropdown.Item as={Link} to="/armors">Armors</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/characters">Characters</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ingredients">Ingredients</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/key-items">Key Items</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/materials">Materials</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/medicines">Medicines</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/weapons">Weapons</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {/* Right Side: GitHub Link and Light Mode Toggle */}
                    <Nav className="ms-auto d-flex align-items-center">
                        {/* GitHub Link */}
                        <Nav.Link href="https://github.com/chengl1113/black-myth-wu-kong-api" target="_blank">
                            <FaGithub size={24} className={theme === 'light' ? 'text-dark' : 'text-light'} />
                        </Nav.Link>
                        {/* Light Mode Toggle */}
                        <DarkModeSwitch
                            style={{ marginLeft: '10px', width: 24, height: 24 }}
                            checked={theme === "light" ? false : true}
                            onChange={toggleTheme}
                            size={120}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigational;
