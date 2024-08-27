import React from 'react'
import logoLight from '../assets/logoLight.jpg';
import logoDark from '../assets/logoDark.jpg';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../contexts/ThemeContext';

const Navigational = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Navbar bg={theme} data-bs-theme={theme} sticky="top" className={'shadow-sm'}>
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={theme === 'light' ? logoLight : logoDark}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Black Myth: Wu Kong API logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Docs</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
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
                        checked={theme === "light" ? false : true}
                        onChange={toggleTheme}
                        size={120}
                    />
                </Container>
            </Container>
        </Navbar>
    )
}

export default Navigational