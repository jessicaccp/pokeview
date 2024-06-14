import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResult from "./SearchResult";

export default function Search(props) {
  const [searchKeywords, setSearchKeywords] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [resultCards, setResultCards] = useState([]);
  const navigate = useNavigate();

  // Search by id
  // Detects all the integers in the string (type: null | Array)
  // For each number, tries to find an pokémon with this number as an id
  function searchById(keywords) {
    const numbers = keywords.match(/\d+/g);
    let matchList = [];

    if (numbers) {
      numbers.forEach((number) => {
        const pokemon = props.pokemonData.find(
          (pokemon) => pokemon.id === Number(number),
        );

        if (pokemon) {
          if (matchList.includes(pokemon) === false) {
            matchList.push(pokemon);
          }
        }
      });
    }

    return matchList;
  }

  // Search by name (at least 3 letters)
  // Detects all substrings in the string
  // For each substring of at least 3 letters, checks if
  // there is a pokémon name that includes the substring
  function searchByName(keywords) {
    const substrings = keywords.split(" ");
    const matchList = [];
  
    substrings.forEach((substring) => {
      if (substring.length >= 3) {
        props.pokemonData.forEach((pokemon) => {
          if (pokemon.name.includes(substring)) {
            if (matchList.includes(pokemon) === false) {
              matchList.push(pokemon);
            }
          }
        });
      }
    });

    return matchList;
  }

  function handleResultCards(results) {
    let cardList = [];

    if (results) {
      cardList = results.map((result, key) => <SearchResult result={result} key={key} />);
    }

    return cardList;
  }

  useEffect(() => {
    setSearchResults([...searchById(searchKeywords), ...searchByName(searchKeywords)]);
  }, [searchKeywords]);

  useEffect(() => {
    setResultCards(handleResultCards(searchResults));
  }, [searchResults]);

  // Gets a random pokémon from pokemonData (type: object)
  function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * props.pokemonData.length);
    return props.pokemonData[randomIndex];
  }

  // Navigates to the individual page of the random pokémon
  function handleRandomClick() {
    const pokemon = getRandomPokemon();
    navigate(`/pokemon/${pokemon.name}`);
  }

  // Set the search results based on the keywords
  function handleSearchChange(event) {
    if (event.target.value === "") navigate(`/`);
    else navigate(`/?search=${event.target.value}`);

    setSearchKeywords(event.target.value);

    // Center the search form if there are no results
    // const searchComponents = document.getElementById("search-component");
    // if (searchComponents) {
    //   if (event.target.value === "") {
    //     searchComponents.style.justifyContent = "center";
    //   } else {
    //     searchComponents.style.justifyContent = "normal";
    //   }
    // }
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
            // autoFocus
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
