import React, { useEffect, useState } from "react";

function Pokemon(props) {
  const pokeapi = "https://pokeapi.co/api/v2/";

  const usePokemonData = (id = 0, name = "") => {
    const [pokemonData, setPokemonData] = useState();
    const url = `${pokeapi}pokemon/`;
    const pokemon = id !== 0 ? `${id}` : `${name}`;

    useEffect(() => {
      const abortController = new AbortController();

      fetch(`${url}${pokemon}`, { signal: abortController.signal })
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => {
          console.error(error.message);
          setPokemonData(null);
        });

      return () => {
        abortController.abort();
      };
    }, [url, pokemon]);

    return pokemonData ? pokemonData : "Loading pokémon data";
  };

  const result = usePokemonData(props.id, props.name);
  return (
    <>
      <li>{result.name}</li>
      <li>{result.id}</li>
    </>
  );
}

export default Pokemon;
