import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { isObjEmpty } from "../utils";

export function EvolutionChain() {
  return (
    <div id="evolution-chain">
      <div id="evolution-chain-baby-trigger-item">
        <h3>Baby trigger item</h3>
        <p>
          <a
            href={`/item/${evolutionChainData.baby_trigger_item.name}`}
            alt={evolutionChainData.baby_trigger_item.name}
          >
            {evolutionChainData.baby_trigger_item.name}
          </a>
        </p>
      </div>
      <div id="evolution-chain-chain">
        <h3>Chain</h3>
      </div>
      <div id="evolution-chain-id"></div>
    </div>
  );
}

export function EvolutionTrigger() {
  return (
    <div id="evolution-trigger">
      <div id="evolution-trigger-id">
        <p>#{evolutionTriggerData.id}</p>
      </div>
      <div id="evolution-trigger-name">
        <h2>{evolutionTriggerData.name}</h2>
      </div>
      <div id="evolution-trigger-names">
        <h3>Names</h3>
        <ul>
          {evolutionTriggerData.names.map((name, key) => (
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
      <div id="evolution-trigger-pokemon-species">
        <h3>Pokemon species</h3>
        <ul>
          {evolutionTriggerData.pokemon_species.map((pokemon, key) => (
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
