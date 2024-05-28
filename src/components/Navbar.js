import React from 'react';
import '../assets/css/Navbar.css';

function Navbar() {
    const links = [
        { title: 'Home', url: '' },
        { title: 'About', url: 'about' },
        { title: 'PokeAPI', url: 'https://pokeapi.co/' }
    ];

    const linksList = links.map(link => <li><a href={link.url}>{link.title}</a></li>);

    return (
            <nav>
                <ul>{linksList}</ul>
            </nav>
    );
}

export default Navbar;