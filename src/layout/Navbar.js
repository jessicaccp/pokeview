import React from 'react';

function Navbar() {
    const links = [
        { title: 'Home', url: '' },
        { title: 'About', url: 'about' },
        { title: 'Data', url: 'data' }
    ];

    const linksList = links.map(link => <li><a href={link.url}>{link.title}</a></li>);

    return (
            <nav>
                <ul>{linksList}</ul>
            </nav>
    );
}

export default Navbar;