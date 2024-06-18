import React, { useEffect, useState } from "react";
import { isEmpty } from "../utils";
import { useParams } from "react-router-dom";

export function EncounterConditions() {
  const apiUrl = "https://pokeapi.co/api/v2/encounter-condition";
  const [encounterConditionCount, setEncounterConditionCount] = useState(0);
  const [encounterConditionsData, setEncounterConditionsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEncounterConditionCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${encounterConditionCount}`)
      .then((response) => response.json())
      .then((data) => setEncounterConditionsData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [encounterConditionCount]);

  if (isLoading || isEmpty(encounterConditionsData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="encounter-conditions">
      <ul>
        {encounterConditionsData.results.map((condition, key) => (
          <li key={key}>
            <a
              href={`/encounter-condition/${condition.name}`}
              alt={condition.name}
            >
              {condition.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

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

  if (isLoading || isEmpty(encounterConditionData)) return <p>Loading</p>;
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

export function EncounterConditionValues() {
  const apiUrl = "https://pokeapi.co/api/v2/encounter-condition-value";
  const [encounterConditionValueCount, setEncounterConditionValueCount] =
    useState(0);
  const [encounterConditionValuesData, setEncounterConditionValuesData] =
    useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEncounterConditionValueCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${encounterConditionValueCount}`)
      .then((response) => response.json())
      .then((data) => setEncounterConditionValuesData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [encounterConditionValueCount]);

  if (isLoading || isEmpty(encounterConditionValuesData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="encounter-condition-values">
      <ul>
        {encounterConditionValuesData.results.map((value, key) => (
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

  if (isLoading || isEmpty(encounterConditionValueData)) return <p>Loading</p>;
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

export function EncountersMethod() {
  const apiUrl = "https://pokeapi.co/api/v2/encounter-method";
  const [encounterMethodCount, setEncounterMethodCount] = useState(0);
  const [encounterMethodsData, setEncounterMethodsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEncounterMethodCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${encounterMethodCount}`)
      .then((response) => response.json())
      .then((data) => setEncounterMethodsData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [encounterMethodCount]);

  if (isLoading || isEmpty(encounterMethodsData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="encounter-methods">
      <ul>
        {encounterMethodsData.results.map((method, key) => (
          <li key={key}>
            <a href={`/encounter-method/${method.name}`} alt={method.name}>
              {method.name}
            </a>
          </li>
        ))}
      </ul>
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

  if (isLoading || isEmpty(encounterMethodData)) return <p>Loading</p>;
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
      <div id="encounter-method-order"></div>
    </div>
  );
}
