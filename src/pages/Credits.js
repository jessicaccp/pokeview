import React from 'react';

function Credits() {
    const links = [
        {id: 1, title: 'Pokeball Icon', url: 'https://icon-icons.com/pt/icone/pokeball-pokemon-go-jogo/67533'},
        {id: 2, title: 'Favicon Converter', url: 'https://favicon.io/favicon-converter/'}
    ];

    const linksList = links.map(link => <li key={link.id}><a href={link.url}>{link.title}</a></li>);

    return (
        <>
            <h1>Credits</h1>
            <ul>{linksList}</ul>
        </>
    );
}

export default Credits;