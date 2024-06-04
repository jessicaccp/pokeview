import React from "react";
import SearchBar from "../components/SearchBar";

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
        <div id='navbar'>
            <div id='navbar-left'>
                <div id='logo'></div>
                <div id='title'>PokéView</div>
                <div id='subtitle'>An interface for PokéAPI</div>
            </div>
            <div id='navbar-right'>
                <nav>
                    <ul>{linksList}</ul>
                </nav>
                <SearchBar />
            </div>
        </div>
    );
}

export default Navbar;