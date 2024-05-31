import React, { cache, useEffect, useState } from "react";

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

    if (pokemonData) {
        
    }

    return(
        <>
        <ul>{pageContent}</ul>
        </>
    );

}

export default PokemonList;