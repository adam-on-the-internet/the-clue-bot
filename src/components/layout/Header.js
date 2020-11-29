import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>The Clue Bot</h1>
            <div>
                <Link to="/" style={linkStyle}>Home</Link>
                |
                <Link to="/about" style={linkStyle}>About</Link>
                |
                <Link to="/stats" style={linkStyle}>Stats</Link>
            </div>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: 5,
};

export default Header;
