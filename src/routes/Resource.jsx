import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { isObjEmpty } from "../utils";
import NotFound from "../components/NotFound";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Resource() {
  const { resource, id } = useParams();
  const resourceList = [
    "ability",
    "berry",
    "berry-firmness",
    "berry-flavor",
    "characteristic",
    "contest-effect",
    "contest-type",
    "egg-group",
    "encounter-condition",
    "encounter-condition-value",
    "encounter-method",
    "evolution-chain",
    "evolution-trigger",
    "gender",
    "generation",
    "growth-rate",
    "item",
    "item-attribute",
    "item-category",
    "item-fling-effect",
    "item-pocket",
    "language",
    "location",
    "location-area",
    "machine",
    "move",
    "move-ailment",
    "move-battle-style",
    "move-category",
    "move-damage-class",
    "move-learn-method",
    "move-target",
    "nature",
    "pal-park-area",
    "pokeathlon-stat",
    "pokedex",
    "pokemon",
    "pokemon-color",
    "pokemon-form",
    "pokemon-habitat",
    "pokemon-shape",
    "pokemon-species",
    "region",
    "stat",
    "super-contest-effect",
    "type",
    "version",
    "version-group",
  ];

  if (resourceList.includes(resource)) {
    if (id === undefined) {
      return <ResourceList resource={resource} />;
    } else {
      return <Resource resource={resource} id={id} />;
    }
  }

  return <NotFound />;
}

export function ResourceList(props) {
  const apiUrl = `https://pokeapi.co/api/v2/${props.resource}`;
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${count}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [count]);

  if (isLoading || isObjEmpty(data)) return <Loading />;
  if (isError) return <Error />;

  return (
    <div id={`${props.resource}-list`}>
      <ul>
        {data.results.map((item, key) => (
          <li key={key}>
            <a
              href={`/${props.resource}/${item.name || key + 1}`}
              alt={item.name || key + 1}
            >
              {item.name || key + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ResourceCard(props) {
  const apiUrl = `https://pokeapi.co/api/v2/${props.resource}/${props.id}`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) return response.json();
        setIsLoading(false);
        throw new Error("id not valid");
      })
      .then((data) => setData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  // Handles page loading and error
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <>
      {props.resource}
      {props.id}
    </>
  );
}
