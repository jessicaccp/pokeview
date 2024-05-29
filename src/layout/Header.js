import React from 'react';

function Header() {
    const page = {
        title: 'PokéView',
        subtitle: 'A interface for PokéAPI'
    };

    return (
        <header>
            <h1>{page.title}</h1>
            <h2>{page.subtitle}</h2>
        </header>
    );
}

export default Header;