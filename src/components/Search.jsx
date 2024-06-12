import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResult from "./SearchResult";

export default function Search(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [resultCards, setResultCards] = useState([]);
  const navigate = useNavigate();

  // Center the search form if there are no results
  const searchComponents = document.getElementById("search-component");
  if (searchComponents) {
    if (searchResults.length > 0)
      searchComponents.style.justifyContent = "normal";
    else searchComponents.style.justifyContent = "center";
  }

  // Changes the content displayed at the bottom of the
  // page every time the results are modified
  useEffect(() => {
    if (searchResults) {
      setResultCards([]);
      searchResults.forEach((result, key) => {
        setResultCards((prev) => [
          ...prev,
          <SearchResult result={result} key={key} />,
        ]);
      });
    }
  }, [searchResults]);

  // Gets a random pokémon from pokemonData (type: object)
  function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * props.pokemonData.length);
    return props.pokemonData[randomIndex];
  }

  // Navigates to the individual page of the random pokémon
  function handleRandomClick() {
    const pokemon = getRandomPokemon();
    // console.log(pokemon.name);
    navigate(`/pokemon/${pokemon.name}`);
  }

  // Set the search results based on the keywords
  function handleSearchChange(event) {
    setSearchResults([]);

    // Search by id
    // Detects all the integers in the string (type: null | Array)
    // For each number, tries to find an pokémon with this number as an id
    const numbers = event.target.value.match(/\d+/g);
    if (numbers) {
      numbers.forEach((number) => {
        const pokemon = props.pokemonData.find(
          (pokemon) => pokemon.id === Number(number)
        );

        if (pokemon) {
          if (searchResults.includes(pokemon) === false) {
            setSearchResults((prev) => [...prev, pokemon]);
          }
        }
      });
    }

    // Search by name (at least 3 letters)
    // Detects all substrings in the string
    // For each substring of at least 3 letters, checks if
    // there is a pokémon name that includes the substring
    const substrings = event.target.value.split(" ");
    substrings.forEach((substring) => {
      if (substring.length >= 3) {
        props.pokemonData.forEach((pokemon) => {
          if (pokemon.name.includes(substring)) {
            if (searchResults.includes(pokemon) === false) {
              setSearchResults((prev) => [...prev, pokemon]);
            }
          }
        });
      }
    });
  }

  return (
    <>
      <section id="search-component">
        <form role="search">
          <input
            type="search"
            placeholder="Search pokémons"
            name="search"
            id="search-input"
            onChange={handleSearchChange}
            autoFocus
          />
          <div id="search-buttons">
            {/* <input type="button" value="Search" id="search-button" /> */}
            <input
              type="button"
              value="Random!"
              id="random-button"
              onClick={handleRandomClick}
            />
          </div>
        </form>
        <section id="search-results">{resultCards}</section>
      </section>
    </>
  );
}
