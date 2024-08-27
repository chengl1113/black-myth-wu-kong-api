import React from 'react';
import Table from 'react-bootstrap/Table';
import { useTheme } from '../contexts/ThemeContext';

const SchemaTable = ({ schema }) => {
    const { theme } = useTheme();

    return (
        <div>
            <Table striped bordered hover variant={theme}>
                <thead>
                    <tr>
                        <th>ATTRIBUTE</th>
                        <th>TYPE</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    {schema.map((s, index) => (
                        <tr key={index}>
                            <td>{s[0]}</td>
                            <td style={{ textAlign: "center" }}>{s[1]}</td>
                            <td style={{ textAlign: "end" }}>{s[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default SchemaTable;
