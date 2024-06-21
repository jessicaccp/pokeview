import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { isObjEmpty } from "../utils";
import NotFound from "../components/NotFound";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Ability from "../resources/Ability";
import Berry, { BerryFirmness, BerryFlavor } from "../resources/Berry";
import Characteristic from "../resources/Characteristic";
import {
  ContestEffect,
  ContestType,
  SuperContestEffect,
} from "../resources/Contest";
import { EggGroup } from "../resources/Egg";
import {
  EncounterCondition,
  EncounterConditionValue,
  EncounterMethod,
} from "../resources/Encounter";
import { EvolutionChain, EvolutionTrigger } from "../resources/Evolution";
import Gender from "../resources/Gender";
import Generation from "../resources/Generation";
import GrowthRate from "../resources/GrowthRate";
import Item, {
  ItemAttribute,
  ItemCategory,
  ItemFlingEffect,
  ItemPocket,
} from "../resources/Item";
import Language from "../resources/Language";
import Location, { LocationArea } from "../resources/Location";
import Machine from "../resources/Machine";
import Move, {
  MoveAilment,
  MoveBattleStyle,
  MoveCategory,
  MoveDamageClass,
  MoveLearnMethod,
  MoveTarget,
} from "../resources/Move";
import Nature from "../resources/Nature";
import PalParkArea from "../resources/PalParkArea";
import PokeathlonStat from "../resources/Pokeathlon";
import Pokedex from "../resources/Pokedex";
import Pokemon, {
  PokemonColor,
  PokemonForm,
  PokemonHabitat,
  PokemonList,
  PokemonShape,
  PokemonSpeciesId,
} from "../resources/Pokemon";
import Region from "../resources/Region";
import Stat from "../resources/Stat";
import Type from "../resources/Type";
import Version, { VersionGroup } from "../resources/Version";

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
      return <ResourceCard resource={resource} id={id} />;
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
  if (isError) return <Loading />;
  if (props.resource === "pokemon") return <PokemonList data={data} />;

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

  // Verifies if the id is valid and get the data
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
  if (isLoading || isObjEmpty(data)) return <Loading />;
  if (isError) return <Loading />;

  // Forwards data to respective resource card
  switch (props.resource) {
    case "ability":
      return <Ability data={data} />;
    case "berry":
      return <Berry data={data} />;
    case "berry-firmness":
      return <BerryFirmness data={data} />;
    case "berry-flavor":
      return <BerryFlavor data={data} />;
    case "characteristic":
      return <Characteristic data={data} />;
    case "contest-effect":
      return <ContestEffect data={data} />;
    case "contest-type":
      return <ContestType data={data} />;
    case "egg-group":
      return <EggGroup data={data} />;
    case "encounter-condition":
      return <EncounterCondition data={data} />;
    case "encounter-condition-value":
      return <EncounterConditionValue data={data} />;
    case "encounter-method":
      return <EncounterMethod data={data} />;
    case "evolution-chain":
      return <EvolutionChain data={data} />;
    case "evolution-trigger":
      return <EvolutionTrigger data={data} />;
    case "gender":
      return <Gender data={data} />;
    case "generation":
      return <Generation data={data} />;
    case "growth-rate":
      return <GrowthRate data={data} />;
    case "item":
      return <Item data={data} />;
    case "item-attribute":
      return <ItemAttribute data={data} />;
    case "item-category":
      return <ItemCategory data={data} />;
    case "item-fling-effect":
      return <ItemFlingEffect data={data} />;
    case "item-pocket":
      return <ItemPocket data={data} />;
    case "language":
      return <Language data={data} />;
    case "location":
      return <Location data={data} />;
    case "location-area":
      return <LocationArea data={data} />;
    case "machine":
      return <Machine data={data} />;
    case "move":
      return <Move data={data} />;
    case "move-ailment":
      return <MoveAilment data={data} />;
    case "move-battle-style":
      return <MoveBattleStyle data={data} />;
    case "move-category":
      return <MoveCategory data={data} />;
    case "move-damage-class":
      return <MoveDamageClass data={data} />;
    case "move-learn-method":
      return <MoveLearnMethod data={data} />;
    case "move-target":
      return <MoveTarget data={data} />;
    case "nature":
      return <Nature data={data} />;
    case "pal-park-area":
      return <PalParkArea data={data} />;
    case "pokeathlon-stat":
      return <PokeathlonStat data={data} />;
    case "pokedex":
      return <Pokedex data={data} />;
    case "pokemon":
      return <Pokemon data={data} />;
    case "pokemon-color":
      return <PokemonColor data={data} />;
    case "pokemon-form":
      return <PokemonForm data={data} />;
    case "pokemon-habitat":
      return <PokemonHabitat data={data} />;
    case "pokemon-shape":
      return <PokemonShape data={data} />;
    case "pokemon-species":
      return <PokemonSpeciesId data={data} />;
    case "region":
      return <Region data={data} />;
    case "stat":
      return <Stat data={data} />;
    case "super-contest-effect":
      return <SuperContestEffect data={data} />;
    case "type":
      return <Type data={data} />;
    case "version":
      return <Version data={data} />;
    case "version-group":
      return <VersionGroup data={data} />;
    default:
      return <NotFound />;
  }
}
