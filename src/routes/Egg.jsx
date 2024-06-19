import React, { useEffect, useState } from "react";
import { isObjEmpty } from "../utils";
import { useParams } from "react-router-dom";

export function EggGroup() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/egg-group/${id}/`;
  const [eggGroupData, setEggGroupData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEggGroupData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isObjEmpty(eggGroupData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="egg-group">
      <div id="egg-group-id">#{eggGroupData.id}</div>
      <div id="egg-group-name">
        <h2>{eggGroupData.name}</h2>
      </div>
      <div id="egg-group-names">
        <h3>Names</h3>
        <ul>
          {eggGroupData.names.map((name, key) => (
            <li key={key}>
              <a
                href={`/language/${name.language.name}`}
                alt={name.language.name}
              >
                {name.language.name}
              </a>{" "}
              - {name.name}
            </li>
          ))}
        </ul>
      </div>
      <div id="egg-group-pokemon-species">
        <h3>Pokémon species</h3>
        <ul>
          {eggGroupData.pokemon_species.map((pokemon, key) => (
            <li key={key}>
              <a href={`/pokemon-species/${pokemon.name}`} alt={pokemon.name}>
                {pokemon.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
