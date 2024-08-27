import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Sidebar = () => {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);

    // Toggle the sidebar collapse state
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            {/* Button to toggle the sidebar */}
            <Button
                onClick={toggleSidebar}
                style={{
                    position: 'fixed',
                    top: '10px',
                    left: '10px',
                    zIndex: 1000
                }}>
                {collapsed ? 'Expand' : 'Collapse'}
            </Button>

            <div
                style={{
                    width: collapsed ? '50px' : '200px',
                    height: '100vh',
                    backgroundColor: theme === 'light' ? '#FFFFFF' : '#212529',
                    position: 'sticky',
                    top: 0,
                    padding: collapsed ? '10px 0' : '10px',
                    borderRight: theme === 'light' ? '1px solid #ddd' : '1px solid #444',
                    overflow: 'hidden',
                    transition: 'width 0.3s ease',
                }}
            >
                <Nav className="flex-column" variant={theme === 'light' ? 'pills' : 'dark'}>
                    <Nav.Link as={Link} to="/" style={{ color: theme === 'light' ? '#000' : '#fff', margin: '10px 0', textAlign: 'center' }}>
                        {collapsed ? 'GS' : 'Getting Started'}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/armors" style={{ color: theme === 'light' ? '#000' : '#fff', margin: '10px 0', textAlign: 'center' }}>
                        {collapsed ? 'A' : 'Armors'}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/characters" style={{ color: theme === 'light' ? '#000' : '#fff', margin: '10px 0', textAlign: 'center' }}>
                        {collapsed ? 'C' : 'Characters'}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/ingredients" style={{ color: theme === 'light' ? '#000' : '#fff', margin: '10px 0', textAlign: 'center' }}>
                        {collapsed ? 'I' : 'Ingredients'}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/key-items" style={{ color: theme === 'light' ? '#000' : '#fff', margin: '10px 0', textAlign: 'center' }}>
                        {collapsed ? 'KI' : 'Key Items'}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/materials" style={{ color: theme === 'light' ? '#000' : '#fff', margin: '10px 0', textAlign: 'center' }}>
                        {collapsed ? 'M' : 'Materials'}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/medicines" style={{ color: theme === 'light' ? '#000' : '#fff', margin: '10px 0', textAlign: 'center' }}>
                        {collapsed ? 'Md' : 'Medicines'}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/weapons" style={{ color: theme === 'light' ? '#000' : '#fff', margin: '10px 0', textAlign: 'center' }}>
                        {collapsed ? 'W' : 'Weapons'}
                    </Nav.Link>
                </Nav>
            </div>
        </>
    );
};

export default Sidebar;
