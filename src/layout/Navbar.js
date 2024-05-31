import React from "react";

function Navbar() {
    const links = [
        { id: 1, title: 'Home', url: '/' },
        { id: 2, title: 'About', url: 'about' },
        { id: 3, title: 'Data', url: 'data' },
        { id: 4, title: 'Credits', url: 'credits' },
        { id: 5, title: 'API', url: 'https://pokeapi.co' }
    ];

    const linksList = links.map(link => <li key={link.id}><a href={link.url}>{link.title}</a></li>);

    return (
            <nav>
                <ul>{linksList}</ul>
            </nav>
    );
}

export default Navbar;