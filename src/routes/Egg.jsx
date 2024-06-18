import React, { useEffect, useState } from "react";
import { isEmpty } from "../utils";
import { useParams } from "react-router-dom";

export function EggGroups() {
  const apiUrl = "https://pokeapi.co/api/v2/egg-group";
  const [eggGroupCount, setEggGroupCount] = useState(0);
  const [eggGroupsData, setEggGroupsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEggGroupCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${eggGroupCount}`)
      .then((response) => response.json())
      .then((data) => setEggGroupsData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [eggGroupCount]);

  if (isLoading || isEmpty(eggGroupsData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="egg-groups">
      <ul>
        {eggGroupsData.results.map((group, key) => (
          <li key={key}>
            <a href={`/egg-group/${group.name}`} alt={group.name}>
              {group.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

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

  if (isLoading || isEmpty(eggGroupData)) return <p>Loading</p>;
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
