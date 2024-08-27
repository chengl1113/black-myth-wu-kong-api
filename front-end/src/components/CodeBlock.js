import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from 'react-bootstrap';

const CodeBlock = ({ jsonString }) => {
    const [copySuccess, setCopySuccess] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(jsonString)
            .then(() => setCopySuccess('Copied!'))
            .catch(() => setCopySuccess('Failed to copy'));

        // Reset the message after a short delay
        setTimeout(() => setCopySuccess(''), 2000);
    };

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div
            style={{ position: 'relative' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {isHovered && (
                <Button
                    onClick={handleCopy}
                    variant='secondary'
                    style={{
                        position: 'absolute',
                        top: '2%',
                        right: '5%',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '5px 10px',
                        cursor: 'pointer'
                    }}
                >
                    Copy
                </Button>
            )}
            {copySuccess && <span style={{ position: 'absolute', top: '10px', right: '70px', color: 'green' }}>{copySuccess}</span>}
            <SyntaxHighlighter language="javascript" style={twilight} customStyle={{ fontSize: '14px' }}>
                {jsonString}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
