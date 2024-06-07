import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon(props) {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (response.ok) return response.json();
        else {
          setNotFound(true);
          console.error(`Error while fetching: ${response.status}`);
        }
      })
      .then((data) => setPokemonData(data))
      .then(() => setIsLoading(false))
      .catch((error) => {
        setNotFound(true);
        console.error(error);
      });
  }, [id]);

  if (isLoading) return <p>Loading</p>;
  if (notFound) return <p>Not found</p>;

  console.log(pokemonData);

  return (
    <div id="pokemon-card">
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />

      {/* <ul>
        <li>Stats</li>
      </ul>

      <ul>
        <li>abilities</li>
        {pokemonData.abilities.map((data) => (
          <>
            <li>ability name</li>
            <li>{data.ability.name}</li>
            <li>ability url</li>
            <li>{data.ability.url}</li>
            <li>is hidden</li>
            <li>{data.is_hidden}</li>
            <li>slot</li>
            <li>{data.slot}</li>
          </>
        ))}
        <li>base_experience</li>
        <li>{pokemonData.base_experience}</li>
        <li>cries</li>
        <li>{pokemonData.cries.latest}</li>
        <li>{pokemonData.cries.legacy}</li>
        <li>forms {pokemonData.forms}</li>
        <li>game_indices {pokemonData.game_indices}</li>
        <li>height</li>
        <li>{pokemonData.height}</li>
        <li>held_items {pokemonData.held_items}</li>
        <li>id</li>
        <li>{pokemonData.id}</li>
        <li>is_default</li>
        <li>{pokemonData.is_default}</li>
        <li>location_area_encounters</li>
        <li>{pokemonData.location_area_encounters}</li>
        <li>moves {pokemonData.moves}</li>
        <li>name</li>
        <li>{pokemonData.name}</li>
        <li>order</li>
        <li>{pokemonData.order}</li>
        <li>past_abilities {pokemonData.past_abilities}</li>
        <li>past_types {pokemonData.past_types}</li>
        <li>species {pokemonData.species}</li>
        <li>sprites {pokemonData.sprites}</li>
        <li>stats {pokemonData.stats}</li>
        <li>types {pokemonData.types}</li>
        <li>weight</li>
        <li>{pokemonData.weight}</li>
      </ul> */}
    </div>
  );
}
