import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "../utils";

export function Berries() {
  const apiUrl = "https://pokeapi.co/api/v2/berry";
  const [berryCount, setBerryCount] = useState(0);
  const [berriesData, setBerriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBerryCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${berryCount}`)
      .then((response) => response.json())
      .then((data) => setBerriesData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [berryCount]);

  if (isLoading || isEmpty(berriesData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="berries">
      <ul>
        {berriesData.results.map((berry, key) => (
          <li key={key}>
            <a href={`/berry/${berry.name}`} alt={berry.name}>
              {berry.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Berry() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/berry/${id}/`;
  const [berryData, setBerryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBerryData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isEmpty(berryData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="berry">
      <div id="berry-id">#{berryData.id}</div>
      <div id="berry-name">
        <h2>{berryData.name}</h2>
      </div>
      <div id="berry-growth-time">
        <h3>Growth time</h3>
        {berryData.growth_time}
      </div>
      <div id="berry-max-harvest">
        <h3>Max harvest</h3>
        {berryData.max_harvest}
      </div>
      <div id="berry-natural-gift-power">
        <h3>Natural gift power</h3>
        {berryData.natural_gift_power}
      </div>
      <div id="berry-size">
        <h3>Size</h3>
        {berryData.size}
      </div>
      <div id="berry-smoothness">
        <h3>Smoothness</h3>
        {berryData.smoothness}
      </div>
      <div id="berry-soil-dryness">
        <h3>Soil dryness</h3>
        {berryData.soil_dryness}
      </div>
      <div id="berry-firmness">
        <h3>Firmness</h3>
        <a
          href={`/berryfirmness/${berryData.firmness.name}`}
          alt={berryData.firmness.name}
        >
          {berryData.firmness.name}
        </a>
      </div>
      <div id="berry-flavors">
        <h3>Flavors</h3>
        {berryData.flavors.map((flavor, key) => (
          <li key={key}>
            <a
              href={`/berryflavor/${flavor.flavor.name}`}
              alt={flavor.flavor.name}
            >
              {flavor.flavor.name}
            </a>
            <h4>Potency</h4>
            {flavor.potency}
          </li>
        ))}
      </div>
      <div id="berry-item">
        <h3>Item</h3>
        <a href={`/item/${berryData.item.name}`} alt={berryData.item.name}>
          {berryData.item.name}
        </a>
      </div>
      <div id="berry-natural-gift-type">
        <h3>Natural gift type</h3>
        <a
          href={`/type/${berryData.natural_gift_type.name}`}
          alt={berryData.natural_gift_type.name}
        >
          {berryData.natural_gift_type.name}
        </a>
      </div>
    </div>
  );
}
