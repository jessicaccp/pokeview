import React, { useEffect, useState } from "react";

export default function Pokemons() {
  const [fetchUrl, setFetchUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const [count, setCount] = useState(0);
  const [alreadyCount, setAlreadyCount] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [gotError, setGotError] = useState(false);

  // get total count of pokémon from pokéapi
  useEffect(() => {
    if (alreadyCount === false) {
      fetch(fetchUrl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setGotError(true);
            throw new Error(`Error while fetching: ${response.status}`);
          }
        })
        .then((data) => {
          if (data) {
            setCount(data.count);
            setAlreadyCount(true);
          } else {
            setGotError(true);
            throw new Error(`Error while setting Count value`);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [alreadyCount, fetchUrl]);

  // get all pokémon data from pokéapi
  useEffect(() => {
    if (alreadyCount) {
      setIsLoading(true);
      fetch(`${fetchUrl}?limit=${count}`)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .then(() => setIsLoading(false))
        .then(console.log("got data"))
        .catch((error) => console.error(error));
    }
  }, [count]);

  if (isLoading) return <p>Loading...</p>;
  if (gotError) return <p>Got error</p>;

  return (
    <>
      <div id="pokemon-card-list"></div>
    </>
  );
}
