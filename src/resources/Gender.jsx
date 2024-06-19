import { useState, useEffect } from "react";
import { isObjEmpty } from "../utils";
import { useParams } from "react-router-dom";

export default function Gender() {
  return (
    <div id="gender">
      <div id="gender-id">
        <p>#{genderData.id}</p>
      </div>
      <div id="gender-name">
        <h2>{genderData.name}</h2>
      </div>
      <div id="gender-pokemon-species-details">
        <h3>Pokemon species details</h3>
        <ul>
          {genderData.pokemon_species_details.map((pokemon, key) => (
            <li key={key}>
              <a
                href={`/pokemon-species/${pokemon.pokemon_species.name}`}
                alt={pokemon.pokemon_species.name}
              >
                {pokemon.pokemon_species.name}
              </a>{" "}
              - Rate: {pokemon.rate}
            </li>
          ))}
        </ul>
      </div>
      <div id="gender-required-for-evolution">
        <h3>Required for evolution</h3>
        <ul>
          {genderData.required_for_evolution.map((pokemon, key) => (
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
