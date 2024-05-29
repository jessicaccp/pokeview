import React from 'react';
import Navbar from './Navbar';

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