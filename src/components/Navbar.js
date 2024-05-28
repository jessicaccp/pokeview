import React from 'react';

function Navbar() {
    const links = [
        { title: 'Home', url: '' },
        { title: 'About', url: 'about' },
        { title: 'PokeAPI', url: 'https://pokeapi.co/' }
    ];

    const linksList = links.map(link => <li><a href={link.url}>{link.title}</a></li>);

    return (
        <div id='navbar'>
            <nav>
                <ul>{linksList}</ul>
            </nav>
        </div>
    );
}

export default Navbar;