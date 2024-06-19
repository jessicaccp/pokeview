import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isObjEmpty } from "../utils";

export function ContestEffect() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/contest-effect/${id}/`;
  const [contestEffectData, setContestEffectData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setContestEffectData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isObjEmpty(contestEffectData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="contest-effect">
      <div id="contest-effect-appeal">
        <h3>Appeal</h3>
        {contestEffectData.appeal}
      </div>
      <div id="contest-effect-effect-entries">
        <h3>Effect entries</h3>
        {contestEffectData.effect_entries.map((entry, key) => (
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
      </div>
      <div id="contest-effect-flavor-text-entries">
        <h3>Flavor text entries</h3>
        {contestEffectData.flavor_text_entries.map((entry, key) => (
          <li key={key}>
            <a
              href={`/language/${entry.language.name}`}
              alt={entry.language.name}
            >
              {entry.language.name}
            </a>{" "}
            - {entry.flavor_text}
          </li>
        ))}
      </div>
      <div id="contest-effect-id">#{contestEffectData.id}</div>
      <div id="contest-effect-jam">
        <h3>Jam</h3>
        {contestEffectData.jam}
      </div>
    </div>
  );
}

export function ContestType() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/contest-type/${id}/`;
  const [contestTypeData, setContestTypeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setContestTypeData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isObjEmpty(contestTypeData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="contest-type">
      <div id="contest-type-berry-flavor">
        <h3>Berry flavor</h3>
        <a
          href={`/berry-flavor/${contestTypeData.berry_flavor.name}`}
          alt={contestTypeData.berry_flavor.name}
        >
          {contestTypeData.berry_flavor.name}
        </a>
      </div>
      <div id="contest-type-id">#{contestTypeData.id}</div>
      <div id="contest-type-name">
        <h2>{contestTypeData.name}</h2>
      </div>
      <div id="contest-type-names">
        <h3>Names</h3>
        {contestTypeData.names.map((name, key) => (
          <li key={key}>
            <a
              href={`/language/${name.language.name}`}
              alt={name.language.name}
            >
              {name.language.name}
            </a>{" "}
            - {name.name} - {name.color}
          </li>
        ))}
      </div>
    </div>
  );
}

export function SuperContestEffect() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/super-contest-effect/${id}/`;
  const [superContestEffectData, setSuperContestEffectData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setSuperContestEffectData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isObjEmpty(superContestEffectData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="super-contest-effect">
      <div id="super-contest-effect-appeal">
        <h3>Appeal</h3>
        {superContestEffectData.appeal}
      </div>
      <div id="super-contest-effect-flavor-text-entries">
        <h3>Flavor text entries</h3>
        <ul>
          {superContestEffectData.flavor_text_entries.map((entry, key) => (
            <li key={key}>
              <a
                href={`/language/${entry.language.name}`}
                alt={entry.language.name}
              >
                {entry.language.name}
              </a>{" "}
              - {entry.flavor_text}
            </li>
          ))}
        </ul>
      </div>
      <div id="super-contest-effect-id">#{superContestEffectData.id}</div>
      <div id="super-contest-effect-moves">
        <h3>Moves</h3>
        <ul>
          {superContestEffectData.moves.map((move, key) => (
            <li key={key}>
              <a href={`/move/${move.name}`} alt={move.name}>
                {move.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
