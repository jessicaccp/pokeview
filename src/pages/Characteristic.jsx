import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "../utils";

export function Characteristics() {
  const apiUrl = "https://pokeapi.co/api/v2/characteristic";
  const [characteristicCount, setCharacteristicCount] = useState(0);
  const [characteristicsData, setCharacteristicsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCharacteristicCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${characteristicCount}`)
      .then((response) => response.json())
      .then((data) => setCharacteristicsData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [characteristicCount]);

  if (isLoading || isEmpty(characteristicsData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="characteristics">
      <ul>
        {characteristicsData.results.map((characteristic, key) => (
          <li key={key}>
            <a href={`/characteristic/${key + 1}`} alt={key + 1}>
              {key + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Characteristic() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/characteristic/${id}/`;
  const [characteristicData, setCharacteristicData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCharacteristicData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isEmpty(characteristicData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="characteristic">
      <div id="characteristic-descriptions">
        <h3>Descriptions</h3>
        {characteristicData.descriptions.map((description, key) => (
          <li key={key}>
            <a
              href={`/language/${description.language.name}`}
              alt={description.language.name}
            >
              {description.language.name}
            </a>{" "}
            - {description.description}
          </li>
        ))}
      </div>
      <div id="characteristic-gene-modulo">
        <h3>Gene Modulo</h3>
        {characteristicData.gene_modulo}
      </div>
      <div id="characteristic-highest-stat">
        <h3>Highest stat</h3>
        <a
          href={`stat/${characteristicData.highest_stat.name}`}
          alt={characteristicData.highest_stat.name}
        >
          {characteristicData.highest_stat.name}
        </a>
      </div>
      <div id="characteristic-id">#{characteristicData.id}</div>
      <div id="characteristic-possible-values">
        {characteristicData.possible_values.map((value, key) => (
          <li key={key}>{value}</li>
        ))}
      </div>
    </div>
  );
}