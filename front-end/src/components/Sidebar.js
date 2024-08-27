import React from 'react'
import { Accordion, Button } from 'react-bootstrap';

import { useTheme } from '../contexts/ThemeContext';


const Sidebar = () => {
    const { theme } = useTheme();


    return (
        <div style={{ width: "15%", height: "100vh", backgroundColor: theme === 'light' ? '#FFFFFF' : '#212529' }}>

            <Accordion defaultActiveKey={["0"]} bg={theme} data-bs-theme={theme} className="shadow-sm h-100" alwaysOpen>
                <Accordion.Item eventKey="0" >
                    <Accordion.Header>Info</Accordion.Header>
                    <Accordion.Body>
                        <Button variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px' }} className={'shadow-sm'}>Getting Started</Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>API</Accordion.Header>
                    <Accordion.Body>
                        <Button variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px' }} className={'shadow-sm'}>Armors</Button>
                        <Button variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px' }} className={'shadow-sm'}>Characters</Button>
                        <Button variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px' }} className={'shadow-sm'}>Ingredients</Button>
                        <Button variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px' }} className={'shadow-sm'}>Key Items</Button>
                        <Button variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px' }} className={'shadow-sm'}>Materials</Button>
                        <Button variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px' }} className={'shadow-sm'}>Medicines</Button>
                        <Button variant={theme === 'light' ? 'light' : 'secondary'} style={{ width: "100%", margin: '10px' }} className={'shadow-sm'}>Weapons</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )
}

export default Sidebar