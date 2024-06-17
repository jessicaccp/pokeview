import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "../utils";

export function Abilities() {
  const apiUrl = "https://pokeapi.co/api/v2/ability";
  const [abilityCount, setAbilityCount] = useState(0);
  const [abilitiesData, setAbilitiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setAbilityCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${abilityCount}`)
      .then((response) => response.json())
      .then((data) => setAbilitiesData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [abilityCount]);

  if (isLoading || isEmpty(abilitiesData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="abilities">
      <ul>
        {abilitiesData.results.map((ability, key) => (
          <li key={key}>
            <a href={`/ability/${ability.name}`} alt={ability.name}>
              {ability.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Ability() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/ability/${id}/`;
  const [abilityData, setAbilityData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setAbilityData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isEmpty(abilityData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="ability">
      <div id="ability-id">#{abilityData.id}</div>
      <div id="ability-name">
        <h2>{abilityData.name}</h2>
      </div>
      <div id="ability-is-main-series">
        <h3>Is main series?</h3>
        {abilityData.is_main_series ? <p>True</p> : <p>False</p>}
      </div>
      <div id="ability-generation">
        <h3>Generation</h3>
        <a
          href={`/generation/${abilityData.generation.name}`}
          alt={abilityData.generation.name}
        >
          {abilityData.generation.name}
        </a>
      </div>
      <div id="ability-names">
        <h3>Names</h3>
        {abilityData.names.map((name, key) => (
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
      </div>
      <div id="ability-effect-entries">
        <h3>Effect entries</h3>
        {abilityData.effect_entries.map((entry, key) => (
          <li key={key}>
            <a
              href={`/language/${entry.language.name}`}
              alt={entry.language.name}
            >
              {entry.language.name}
            </a>{" "}
            <p>
              <h4>Effect</h4>
              {entry.effect}
            </p>
            <p>
              <h4>Short effect</h4>
              {entry.short_effect}
            </p>
          </li>
        ))}
      </div>
      <div id="ability-effect-changes">
        <h3>Effect changes</h3>
        {abilityData.effect_changes.map((change, key) => (
          <>
            <li key={key}>
              <a
                href={`/versiongroup/${change.version_group.name}`}
                alt={change.version_group.name}
              >
                {change.version_group.name}
              </a>
            </li>
            <ul>
              <h4>Effect entries</h4>
              {change.effect_entries.map((entry, key) => (
                <li key={key}>
                  <a
                    href={`/language/${entry.language.name}`}
                    alt={entry.language.name}
                  >
                    {entry.language.name}
                  </a>{" "}
                  - {entry.effect}
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
      <div id="ability-flavor-text-entries">
        <h3>Flavor text entries</h3>
        {abilityData.flavor_text_entries.map((entry, key) => (
          <li key={key}>
            <a
              href={`/language/${entry.language.name}`}
              alt={entry.language.name}
            >
              {entry.language.name}
            </a>{" "}
            -{" "}
            <a
              href={`/versiongroup/${entry.version_group.name}`}
              alt={entry.version_group.name}
            >
              {entry.version_group.name}
            </a>{" "}
            - {entry.flavor_text}
          </li>
        ))}
      </div>
      <div id="ability-pokemon">
        <h3>Pokémon</h3>
        {abilityData.pokemon.map((pokemon, key) => (
          <li key={key}>
            <a
              href={`/pokemon/${pokemon.pokemon.name}`}
              alt={pokemon.pokemon.name}
            >
              {pokemon.pokemon.name}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}
