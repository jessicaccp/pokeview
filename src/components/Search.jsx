import React, { useState } from "react";

export default function Search(props) {
  const [searchResults, setSearchResults] = useState("");

  function handleSearchComponent(event) {
    setSearchResults("");

    // Search by id
    // Detects all the integers in the string (type: null | Array)
    // For each number, tries to find an pokémon with this number as an id
    const numbers = event.target.value.match(/\d+/g);
    if (numbers) {
      numbers.forEach((number) => {
        if (
          props.pokemonData.find((pokemon) => pokemon.id === Number(number))
        ) {
          const pokemon = props.pokemonData.find(
            (pokemon) => pokemon.id === Number(number)
          );
          setSearchResults((prev) => [...prev, <p>{pokemon.name}</p>]);
        }
      });
    }
    // console.log(numbers);
    // if (Number.isInteger(event.target.value)) {
    //   console.log("is integer");
    //   console.log(
    //     props.pokemonData.find((x) => x.id === event.target.value).name
    //   );
    // }
    // if (event.target.value.length >= 3) {
    //   props.pokemonData.forEach((pokemon) => {
    //     if (Number.isInteger(event.target.value)) {
    //       // Search by id
    //       if (pokemon.id === event.target.value) {
    //         setSearchResults((prev) => [...prev, <p>{pokemon.name}</p>]);
    //       }
    //     } else {
    //       // Search by name
    //       if (pokemon.name.includes(event.target.value))
    //         setSearchResults((prev) => [...prev, <p>{pokemon.name}</p>]);
    //     }
    //   });
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
            onChange={handleSearchComponent}
          />
          <div id="search-buttons">
            <input type="button" value="Search" id="search-button" />
            <input type="button" value="Random!" id="random-button" />
          </div>
        </form>
        <section id="search-results">{searchResults}</section>
      </section>
    </>
  );
}
