import React from 'react'
import Table from 'react-bootstrap/Table';
import { useTheme } from '../contexts/ThemeContext';

const RouteTable = ({ url, description }) => {
    const { theme } = useTheme();

    return (
        <div>
            <Table striped bordered hover variant={theme}>
                <thead>
                    <tr>
                        <th>METHOD</th>
                        <th>URL</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GET</td>
                        <td><a style={{
                            color: "#B3966F", wordBreak: "break-all",
                            overflowWrap: "break-word"
                        }} href={url} target="_blank" rel="noopener noreferrer">{url}</a></td>
                        <td>{description} <strong>Black Myth: Wukong</strong></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default RouteTable
