import React from "react";

function Footer() {
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

export default Footer;