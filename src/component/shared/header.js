// Header.js
import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h4>Wood Connect</h4>
        </header>
    );
};

// Styling for the Header
const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '8px 0px 4px',
    textAlign: 'center',
};



export default Header;
