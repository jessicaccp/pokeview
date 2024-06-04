import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
    let pageContent = '';

    const [pokemonData, setPokemonData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pokemonPerPage, setPokemonPerPage] = useState(12);

    useEffect(() => {
        fetch(`${apiUrl}?limit=${pokemonPerPage}&offset=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(
                result => {
                    fetch(`${result.url}`)
                    .then(resultResponse => resultResponse.json())
                    .then(resultData => setPokemonData(prev => [...prev, resultData]));
                }
            );
        });
    }, [apiUrl, pokemonPerPage, currentPage]);

    if (pokemonData.length === pokemonPerPage) {
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

    return(
        <>
            <div id='filter-by'></div>
            <div id='order-by'></div>
            <div id='pokemon-list'>
                {pageContent}
            </div>
        </>
    );

}

export default PokemonList;