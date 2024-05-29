import React from 'react';

export function Navbar() {
    const links = [
        { id: 1, title: 'Home', url: '' },
        { id: 2, title: 'About', url: 'about' },
        { id: 3, title: 'Data', url: 'data' }
    ];

    const linksList = links.map(link => <li key={link.id}><a href={link.url}>{link.title}</a></li>);

    return (
            <nav>
                <ul>{linksList}</ul>
            </nav>
    );
}

export function Header() {
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

export function Main(props) {
    return (
        <main>{props.data}</main>
    );
}

export function Footer() {
    const links = {
        jessica: 'https://jessicaccp.github.io/',
        react: 'https://react.dev/',
        pokeapi: 'https://pokeapi.co/'
    };

    return (
        <footer>
            <p>
                Created by <a href={links.jessica}>Jessica Patricio</a> with <a href={links.react}>React</a> and fed by <a href={links.pokeapi}>PokéAPI</a>.
            </p>
        </footer>
    );
}