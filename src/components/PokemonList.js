import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
    let pageContent = '';

    const [pokemonData, setPokemonData] = useState([]);
    const [limit, setLimit] = useState(12);
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);

    // get api data
    useEffect(() => {
        setPokemonData([])
        fetch(`${apiUrl}?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(data => {
            setCount(data.count);
            data.results.forEach(
                result => {
                    fetch(`${result.url}`)
                    .then(resultResponse => resultResponse.json())
                    .then(resultData => setPokemonData(prev => [...prev, resultData]));
                }
            );
        })
        .catch(error => console.error(error.message));
    }, [apiUrl, limit, offset]);

    function getPageContent() {
        pageContent = pokemonData.map(
            pokemon => <PokemonCard
                key={pokemon.id}
                id={pokemon.id} 
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                stats={pokemon.stats.map(
                    (stat, key) => <li key={key}>{stat.stat.name}: {stat.base_stat}</li>
                )}
                types={pokemon.types.map(
                    (type, key) => <li key={key}>{type.type.name}</li>
                )} />
        );
        pageContent.sort((a, b) => a.key - b.key);
    }

    function goToPreviousPage() {
        if (offset > 0) {
            if (offset - limit < 0) {
                setOffset(0);
            }
            else {
                setOffset(offset - limit);
            }
        }
    }

    function goToNextPage() {
        if (offset < count) {
            setOffset(offset + limit);
        }
    }

    getPageContent();
    return(
        <>
            <div id='filter-by'></div>
            <div id='order-by'></div>
            <div id='pagination'>
                <button className='prev' onClick={goToPreviousPage}></button>
                <button className='next' onClick={goToNextPage}></button>
            </div>
            <div id='pokemon-list'>
                {pageContent}
            </div>
        </>
    );

}

export default PokemonList;