import React, { useEffect, useState } from "react";
import Search from "../components/Search";

export default function SearchPage() {
  const [pokemonCount, setPokemonCount] = useState(0);
  const [pokemonUrls, setPokemonUrls] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Get number of pokémons
  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPokemonCount(data.count))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  // Get api url for all the pokémons' data
  useEffect(() => {
    setIsLoading(true);
    setPokemonUrls([]);
    fetch(`${apiUrl}?limit=${pokemonCount}`)
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((result) =>
          setPokemonUrls((prev) => [...prev, result.url])
        );
      })
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [pokemonCount]);

  // Get api data for all the pokémons
  useEffect(() => {
    setIsLoading(true);
    setPokemonData([]);
    if (pokemonUrls) {
      pokemonUrls.forEach((url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setPokemonData((prev) => [...prev, data]);
          })
          .catch((error) => {
            console.error(error);
            setIsError(true);
          });
      });
      setIsLoading(false);
    }
  }, [pokemonCount, pokemonUrls]);

  if (isLoading) return <p>Wait, we're catching pokémons!</p>;
  if (isError) return <p>A wild error appeared!</p>;

  return (
    <div id="home-page2">
      <Search pokemonData={pokemonData} />
    </div>
  );
}
