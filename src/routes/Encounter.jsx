import React, { useEffect, useState } from "react";
import { isObjEmpty } from "../utils";
import { useParams } from "react-router-dom";

export function EncounterCondition() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/encounter-condition/${id}/`;
  const [encounterConditionData, setEncounterConditionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEncounterConditionData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isObjEmpty(encounterConditionData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="encounter-condition">
      <div id="encounter-condition-id">#{encounterConditionData.id}</div>
      <div id="encounter-condition-name">
        <h2>{encounterConditionData.name}</h2>
      </div>
      <div id="encounter-condition-names">
        <h3>Names</h3>
        <ul>
          {encounterConditionData.names.map((condition, key) => (
            <li key={key}>
              <a
                href={`/language/${condition.language.name}`}
                alt={condition.language.name}
              >
                {condition.language.name}
              </a>{" "}
              - {condition.name}
            </li>
          ))}
        </ul>
      </div>
      <div id="encounter-condition-values">
        <h3>Values</h3>
        <ul>
          {encounterConditionData.values.map((value, key) => (
            <li key={key}>
              <a
                href={`/encounter-condition-value/${value.name}`}
                alt={value.name}
              >
                {value.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function EncounterConditionValue() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/encounter-condition-value/${id}/`;
  const [encounterConditionValueData, setEncounterConditionValueData] =
    useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEncounterConditionValueData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isObjEmpty(encounterConditionValueData))
    return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="encounter-condition-value">
      <div id="encounter-condition-value-condition">
        <a
          href={`/encounter-condition/${encounterConditionValueData.name}`}
          alt={encounterConditionValueData.name}
        >
          {encounterConditionValueData.condition.name}
        </a>
      </div>
      <div id="encounter-condition-value-id">
        #{encounterConditionValueData.id}
      </div>
      <div id="encounter-condition-value-name">
        <h2>{encounterConditionValueData.name}</h2>
      </div>
      <div id="encounter-condition-value-names">
        <ul>
          {encounterConditionValueData.names.map((name, key) => (
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
    </div>
  );
}

export function EncounterMethod() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/encounter-method/${id}/`;
  const [encounterMethodData, setEncounterMethodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEncounterMethodData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isObjEmpty(encounterMethodData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="encounter-method">
      <div id="encounter-method-id">#{encounterMethodData.id}</div>
      <div id="encounter-method-name">
        <h2>{encounterMethodData.name}</h2>
      </div>
      <div id="encounter-method-names">
        <ul>
          {encounterMethodData.names.map((name, key) => (
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
      <div id="encounter-method-order">
        <h3>Order</h3>
        {encounterMethodData.order}
      </div>
    </div>
  );
}
