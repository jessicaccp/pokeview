import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "../utils";

export function EvolutionsChain() {
  const apiUrl = "https://pokeapi.co/api/v2/evolution-chain";
  const [evolutionChainCount, setEvolutionChainCount] = useState(0);
  const [evolutionChainsData, setEvolutionChainsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEvolutionChainCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${evolutionChainCount}`)
      .then((response) => response.json())
      .then((data) => setEvolutionChainsData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [evolutionChainCount]);

  if (isLoading || isEmpty(evolutionChainsData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="evolution-chains">
      <ul>
        {evolutionChainsData.results.map((chain, key) => (
          <li key={key}>
            <a href={`/evolution-chain/${key + 1}`} alt={key + 1}>
              {key + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EvolutionChain() {
  return (
    <div id="evolution-chain">
      <div id="evolution-chain-baby-trigger-item"></div>
      <div id="evolution-chain-chain"></div>
      <div id="evolution-chain-id"></div>
    </div>
  );
}

export function EvolutionsTrigger() {
  const apiUrl = "https://pokeapi.co/api/v2/evolution-trigger";
  const [evolutionTriggerCount, setEvolutionTriggerCount] = useState(0);
  const [evolutionTriggersData, setEvolutionTriggersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEvolutionTriggerCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${evolutionTriggerCount}`)
      .then((response) => response.json())
      .then((data) => setEvolutionTriggersData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [evolutionTriggerCount]);

  if (isLoading || isEmpty(evolutionTriggersData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="evolution-triggers">
      <ul>
        {evolutionTriggersData.results.map((trigger, key) => (
          <li key={key}>
            <a href={`/evolution-trigger/${trigger.name}`} alt={trigger.name}>
              {trigger.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EvolutionTrigger() {
  return (
    <div id="evolution-trigger">
      <div id="evolution-trigger-id"></div>
      <div id="evolution-trigger-name"></div>
      <div id="evolution-trigger-names"></div>
      <div id="evolution-trigger-pokemon-species"></div>
    </div>
  );
}
