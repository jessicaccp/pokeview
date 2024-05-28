import React from 'react';
import Navbar from './Navbar';
import '../assets/css/Header.css';

function Header() {
    const projectName = 'PokéView';

    return (
        <>
            <header>
                <h1>{projectName}</h1>
                <Navbar />
            </header>
        </>
    );
}

export default Header;