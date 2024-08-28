import React from 'react'
import { Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext';


const Sidebar = () => {
    const { theme } = useTheme();


    return (
        <div style={{ width: "15%", height: "100vh", backgroundColor: theme === 'light' ? '#FFFFFF' : '#212529', position: 'fixed' }}>

            <Accordion defaultActiveKey={["0"]} bg={theme} data-bs-theme={theme} className="shadow-sm h-100" alwaysOpen>
                <Accordion.Item eventKey="0" >
                    <Accordion.Header>Info</Accordion.Header>
                    <Accordion.Body>
                        <Button as={Link} to="/" variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px auto' }} className={'shadow-sm'}>Getting Started</Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>API</Accordion.Header>
                    <Accordion.Body>
                        <Button as={Link} to="/armors" variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px auto' }} className={'shadow-sm'}>Armors</Button>
                        <Button as={Link} to="/characters" variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px auto' }} className={'shadow-sm'}>Characters</Button>
                        <Button as={Link} to="/ingredients" variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px auto' }} className={'shadow-sm'}>Ingredients</Button>
                        <Button as={Link} to="/key-items" variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px auto' }} className={'shadow-sm'}>Key Items</Button>
                        <Button as={Link} to="/materials" variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px auto' }} className={'shadow-sm'}>Materials</Button>
                        <Button as={Link} to="/medicines" variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px auto' }} className={'shadow-sm'}>Medicines</Button>
                        <Button as={Link} to="/weapons" variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px auto' }} className={'shadow-sm'}>Weapons</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )
}

export default Sidebar