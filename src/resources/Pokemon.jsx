import { useEffect, useState } from "react";
import PokemonMiniCard from "../components/PokemonMiniCard";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { isObjEmpty } from "../utils";

export default function Pokemon(props) {
  const [abilitiesData, setAbilitiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (props.data) {
      props.data.abilities.forEach((ability) => {
        fetch(ability.ability.url)
          .then((response) => response.json())
          .then((data) => setAbilitiesData((prev) => [...prev, data]))
          .catch((error) => {
            console.error(error);
            setIsError(true);
          });
      });
    }
  }, [props.data]);

  const gallery = () => {
    const images = [
      props.data.sprites.front_default,
      props.data.sprites.back_default,
      props.data.sprites.front_female,
      props.data.sprites.back_female,
      props.data.sprites.front_shiny,
      props.data.sprites.back_shiny,
      props.data.sprites.front_shiny_female,
      props.data.sprites.back_shiny_female,
      props.data.sprites.other.dream_world.front_default,
      props.data.sprites.other.dream_world.front_female,
      props.data.sprites.other.home.front_default,
      props.data.sprites.other.home.front_female,
      props.data.sprites.other.home.front_shiny,
      props.data.sprites.other.home.front_shiny_female,
      props.data.sprites.other["official-artwork"].front_default,
      props.data.sprites.other["official-artwork"].front_shiny,
      props.data.sprites.other.showdown.front_default,
      props.data.sprites.other.showdown.back_default,
      props.data.sprites.other.showdown.front_female,
      props.data.sprites.other.showdown.back_female,
      props.data.sprites.other.showdown.front_shiny,
      props.data.sprites.other.showdown.back_shiny,
      props.data.sprites.other.showdown.front_shiny_female,
      props.data.sprites.other.showdown.back_shiny_female,
      props.data.sprites.versions["generation-i"]["red-blue"].front_default,
      props.data.sprites.versions["generation-i"]["red-blue"].back_default,
      props.data.sprites.versions["generation-i"]["red-blue"].front_gray,
      props.data.sprites.versions["generation-i"]["red-blue"].back_gray,
      props.data.sprites.versions["generation-i"]["red-blue"].front_transparent,
      props.data.sprites.versions["generation-i"]["red-blue"].back_transparent,
      props.data.sprites.versions["generation-i"].yellow.front_default,
      props.data.sprites.versions["generation-i"].yellow.back_default,
      props.data.sprites.versions["generation-i"].yellow.front_gray,
      props.data.sprites.versions["generation-i"].yellow.back_gray,
      props.data.sprites.versions["generation-i"].yellow.front_transparent,
      props.data.sprites.versions["generation-i"].yellow.back_transparent,
      props.data.sprites.versions["generation-ii"].crystal.front_default,
      props.data.sprites.versions["generation-ii"].crystal.back_default,
      props.data.sprites.versions["generation-ii"].crystal.front_shiny,
      props.data.sprites.versions["generation-ii"].crystal.back_shiny,
      props.data.sprites.versions["generation-ii"].crystal
        .front_shiny_transparent,
      props.data.sprites.versions["generation-ii"].crystal
        .back_shiny_transparent,
      props.data.sprites.versions["generation-ii"].crystal.front_transparent,
      props.data.sprites.versions["generation-ii"].crystal.back_transparent,
      props.data.sprites.versions["generation-ii"].gold.front_default,
      props.data.sprites.versions["generation-ii"].gold.back_default,
      props.data.sprites.versions["generation-ii"].gold.front_shiny,
      props.data.sprites.versions["generation-ii"].gold.back_shiny,
      props.data.sprites.versions["generation-ii"].gold.front_transparent,
      props.data.sprites.versions["generation-ii"].silver.front_default,
      props.data.sprites.versions["generation-ii"].silver.back_default,
      props.data.sprites.versions["generation-ii"].silver.front_shiny,
      props.data.sprites.versions["generation-ii"].silver.back_shiny,
      props.data.sprites.versions["generation-ii"].silver.front_transparent,
      props.data.sprites.versions["generation-iii"].emerald.front_default,
      props.data.sprites.versions["generation-iii"].emerald.front_shiny,
      props.data.sprites.versions["generation-iii"]["firered-leafgreen"]
        .front_default,
      props.data.sprites.versions["generation-iii"]["firered-leafgreen"]
        .back_default,
      props.data.sprites.versions["generation-iii"]["firered-leafgreen"]
        .front_shiny,
      props.data.sprites.versions["generation-iii"]["firered-leafgreen"]
        .back_shiny,
      props.data.sprites.versions["generation-iii"]["ruby-sapphire"]
        .front_default,
      props.data.sprites.versions["generation-iii"]["ruby-sapphire"]
        .back_default,
      props.data.sprites.versions["generation-iii"]["ruby-sapphire"]
        .front_shiny,
      props.data.sprites.versions["generation-iii"]["ruby-sapphire"].back_shiny,
      props.data.sprites.versions["generation-iv"]["diamond-pearl"]
        .front_default,
      props.data.sprites.versions["generation-iv"]["diamond-pearl"]
        .back_default,
      props.data.sprites.versions["generation-iv"]["diamond-pearl"]
        .front_female,
      props.data.sprites.versions["generation-iv"]["diamond-pearl"].back_female,
      props.data.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny,
      props.data.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny,
      props.data.sprites.versions["generation-iv"]["diamond-pearl"]
        .front_shiny_female,
      props.data.sprites.versions["generation-iv"]["diamond-pearl"]
        .back_shiny_female,
      props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .front_default,
      props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .back_default,
      props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .front_female,
      props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .back_female,
      props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .front_shiny,
      props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .back_shiny,
      props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .front_shiny_female,
      props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .back_shiny_female,
      props.data.sprites.versions["generation-iv"].platinum.front_default,
      props.data.sprites.versions["generation-iv"].platinum.back_default,
      props.data.sprites.versions["generation-iv"].platinum.front_female,
      props.data.sprites.versions["generation-iv"].platinum.back_female,
      props.data.sprites.versions["generation-iv"].platinum.front_shiny,
      props.data.sprites.versions["generation-iv"].platinum.back_shiny,
      props.data.sprites.versions["generation-iv"].platinum.front_shiny_female,
      props.data.sprites.versions["generation-iv"].platinum.back_shiny_female,
      props.data.sprites.versions["generation-v"]["black-white"].front_default,
      props.data.sprites.versions["generation-v"]["black-white"].back_default,
      props.data.sprites.versions["generation-v"]["black-white"].front_female,
      props.data.sprites.versions["generation-v"]["black-white"].back_female,
      props.data.sprites.versions["generation-v"]["black-white"].front_shiny,
      props.data.sprites.versions["generation-v"]["black-white"].back_shiny,
      props.data.sprites.versions["generation-v"]["black-white"]
        .front_shiny_female,
      props.data.sprites.versions["generation-v"]["black-white"]
        .back_shiny_female,
      props.data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
      props.data.sprites.versions["generation-v"]["black-white"].animated
        .back_default,
      props.data.sprites.versions["generation-v"]["black-white"].animated
        .front_female,
      props.data.sprites.versions["generation-v"]["black-white"].animated
        .back_female,
      props.data.sprites.versions["generation-v"]["black-white"].animated
        .front_shiny,
      props.data.sprites.versions["generation-v"]["black-white"].animated
        .back_shiny,
      props.data.sprites.versions["generation-v"]["black-white"].animated
        .front_shiny_female,
      props.data.sprites.versions["generation-v"]["black-white"].animated
        .back_shiny_female,
      props.data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_default,
      props.data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_female,
      props.data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_shiny,
      props.data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_shiny_female,
      props.data.sprites.versions["generation-vi"]["x-y"].front_default,
      props.data.sprites.versions["generation-vi"]["x-y"].front_female,
      props.data.sprites.versions["generation-vi"]["x-y"].front_shiny,
      props.data.sprites.versions["generation-vi"]["x-y"].front_shiny_female,
      props.data.sprites.versions["generation-vii"].icons.front_default,
      props.data.sprites.versions["generation-vii"].icons.front_female,
      props.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
        .front_default,
      props.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
        .front_female,
      props.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
        .front_shiny,
      props.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
        .front_shiny_female,
      props.data.sprites.versions["generation-viii"].icons.front_default,
      props.data.sprites.versions["generation-viii"].icons.front_female,
    ];
    return images.map((image, key) => {
      if (image)
        return (
          <li key={key}>
            <img src={image} />
          </li>
        );
    });
  };

  const abilities = () => {
    return props.data.abilities.map((ability, key) => (
      <li key={key}>{ability.ability.name}</li>
    ));
  };

  const games = () => {
    return props.data.game_indices.map((game, key) => (
      <li key={key}>{game.version.name}</li>
    ));
  };

  const cries = () => {
    let audio = [];
    if (props.data.cries.latest)
      audio.push(
        <audio controls key={1}>
          <source src={props.data.cries.latest} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      );

    if (props.data.cries.legacy)
      audio.push(
        <audio controls key={2}>
          <source src={props.data.cries.legacy} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      );
    return audio;
  };

  const heldItems = () => {
    return props.data.held_items.map((item, key) => (
      <li key={key}>{item.item.name}</li>
    ));
  };

  const types = () => {
    return props.data.types.map((type, key) => (
      <li key={key}>{type.type.name}</li>
    ));
  };

  const stats = () => {
    return props.data.stats.map((stat, key) => (
      <li key={key}>
        {stat.stat.name}: {stat.base_stat}
      </li>
    ));
  };

  const forms = () => {
    return props.data.forms.map((form, key) => <li key={key}>{form.name}</li>);
  };

  // Handles page loading and error
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  if (notFound) return <p>The pokémon has escaped! Keep searching!</p>;

  return (
    <section id="pokemon-page">
      <div id="name-id">
        <h2>{props.data.name}</h2>
        <h3>#{props.data.id}</h3>
      </div>

      <div id="types">
        <h3>Types</h3>
        <ul>{types()}</ul>
      </div>

      <div id="stats">
        <h3>Stats</h3>
        <ul>{stats()}</ul>
      </div>

      <div id="info">
        <h3>Info</h3>
        <p>Base experience: {props.data.base_experience}</p>
        <p>Height: {props.data.height}</p>
        <p>Is default? {props.data.is_default ? "Yes" : "No"}</p>
        <p>Order: {props.data.order}</p>
        <p>Weight: {props.data.weight}</p>
      </div>

      <div id="cries">
        <h3>Cries</h3>
        <ul>{cries()}</ul>
      </div>

      <div id="abilities">
        <h3>Abilities</h3>
        <ul>{abilities()}</ul>
      </div>

      <div id="held-items">
        <h3>Held items</h3>
        <ul>{heldItems()}</ul>
      </div>

      <div id="games">
        <h3>Games</h3>
        <ul>{games()}</ul>
      </div>

      <div id="forms">
        <h3>Forms</h3>
        <ul>{forms()}</ul>
      </div>

      <div id="sprites">
        <h3>Sprites</h3>
        <ul>{gallery()}</ul>
      </div>
    </section>
  );
}

export function PokemonList(props) {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let isMounted = true;
    setData([]);
    props.data.results.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          if (isMounted) {
            setData((prev) => [...prev, data]);
          }
        })
        .catch((error) => console.error(error));
    });
    setIsLoading(false);
    return () => {
      isMounted = false;
    };
  }, [props.data.results]);

  useEffect(() => {
    setSortedData(data.sort((a, b) => a.id > b.id));
  }, [data]);

  useEffect(() => {
    setResult([]);
    sortedData.forEach((pokemon) => {
      setResult((prev) => [...prev, <PokemonMiniCard data={pokemon} />]);
    });
  }, [sortedData]);

  if (isLoading) return <Loading />;

  return (
    <div id="pokemon-list">
      <div id="search-result">
        <ul>
          {result.map((r, key) => {
            return <li key={key}>{r}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export function PokemonColor(props) {
  return <></>;
}

export function PokemonForm(props) {
  return <></>;
}

export function PokemonHabitat(props) {
  return <></>;
}

export function PokemonShape(props) {
  return <></>;
}

export function PokemonSpeciesId(props) {
  return <></>;
}
