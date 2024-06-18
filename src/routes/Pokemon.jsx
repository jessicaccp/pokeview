import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

/**
 * This component renders a page with a list of pokémons cards based on the searchbar value.
 *
 * @returns {ReactNode} A React element that renders a list of pokémon cards.
 */
export function Pokemons() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";

  // Get info of every pokémon when the page loads
  useEffect(() => {
    setPokemonData([]);
    setIsLoading(true);
    setIsError(false);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        fetch(`${apiUrl}?limit=${data.count}`)
          .then((response) => response.json())
          .then((data) => {
            data.results.forEach((result) => {
              fetch(result.url)
                .then((response) => response.json())
                .then((data) => setPokemonData((prev) => [...prev, data]))
                .catch((error) => {
                  console.error(error);
                  setIsError(true);
                });
            });
          })
          .catch((error) => {
            console.error(error);
            setIsError(true);
          });
      })
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, []);

  let pokemonCards = "";
  if (!isEmpty(pokemonData)) {
    pokemonCards = getCards(pokemonData);
  }

  function getCards(pokemons) {
    let cards = pokemons.map((pokemon) => (
      <PokemonCard
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        abilities={pokemon.abilities.map((ability) => [
          ability.ability.name,
          ability.ability.url,
          ability.is_hidden,
          ability.slot,
        ])}
        base_experience={pokemon.base_experience}
        cries={[pokemon.cries.latest, pokemon.cries.legacy]}
        forms={pokemon.forms.map((form) => [form.name, form.url])}
        game_indices={pokemon.game_indices.map((game_indice) => [
          game_indice.game_index,
          game_indice.version.name,
          game_indice.version.url,
        ])}
        height={pokemon.height}
        held_items={pokemon.held_items.map((held_item) => [
          held_item.item.name,
          held_item.item.url,
          held_item.version_details.map((version) => [
            version.rarity,
            version.version.name,
            version.version.url,
          ]),
        ])}
        is_default={pokemon.is_default}
        location_area_encounters={pokemon.location_area_encounters}
        moves={pokemon.moves.map((move) => [
          move.move.name,
          move.move.url,
          move.version_group_details.map((version) => [
            version.level_learned_at,
            version.move_learn_method.name,
            version.move_learn_method.url,
            version.version_group.name,
            version.version_group.url,
          ]),
        ])}
        order={pokemon.order}
        // past_abilities={pokemon.past_abilities}
        // past_types={pokemon.past_types}
        species={[pokemon.species.name, pokemon.species.url]}
        sprites={[
          pokemon.sprites.back_default,
          pokemon.sprites.back_female,
          pokemon.sprites.back_shiny,
          pokemon.sprites.back_shiny_female,
          pokemon.sprites.front_default,
          pokemon.sprites.front_female,
          pokemon.sprites.front_shiny,
          pokemon.sprites.front_shiny_female,
          pokemon.sprites.other.dream_world.front_default,
          pokemon.sprites.other.dream_world.front_female,
          pokemon.sprites.other.home.front_default,
          pokemon.sprites.other.home.front_female,
          pokemon.sprites.other.home.front_shiny,
          pokemon.sprites.other.home.front_shiny_female,
          // pokemon.sprites.other.official-artwork.front_default,
          // pokemon.sprites.other.official-artwork.front_shiny,
          pokemon.sprites.other.showdown.back_default,
          pokemon.sprites.other.showdown.back_female,
          pokemon.sprites.other.showdown.back_shiny,
          pokemon.sprites.other.showdown.back_shiny_female,
          pokemon.sprites.other.showdown.front_default,
          pokemon.sprites.other.showdown.front_female,
          pokemon.sprites.other.showdown.front_shiny,
          pokemon.sprites.other.showdown.front_shiny_female,
          pokemon.sprites.other.showdown.back_default,
          pokemon.sprites.other.showdown.back_female,
          pokemon.sprites.other.showdown.back_shiny,
          // pokemon.sprites.versions
        ]}
        stats={pokemon.stats.map((stat) => [
          stat.base_stat,
          stat.effort,
          stat.stat.name,
          stat.stat.url,
        ])}
        types={pokemon.types.map((type) => [
          type.slot,
          type.type.name,
          type.type.url,
        ])}
        weight={pokemon.weight}
      />
    ));
    return cards.sort((a, b) => a.key - b.key);
  }

  /**
   * Checks if an object is empty.
   * @param {Object} object
   * @returns {boolean}
   */
  function isEmpty(object) {
    if (Object.keys(object).length === 0) return true;
    return false;
  }

  if (isLoading) return <p>Wait while we're catching the pokémons...</p>;
  if (isError) return <p>A wild error appeared!</p>;

  return (
    <>
      <div id="card-list">{pokemonCards}</div>
    </>
  );
}

export default function Pokemon(props) {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState([]);
  const [abilitiesData, setAbilitiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [gotError, setGotError] = useState(false);

  const gallery = () => {
    const images = [
      pokemonData.sprites.front_default,
      pokemonData.sprites.back_default,
      pokemonData.sprites.front_female,
      pokemonData.sprites.back_female,
      pokemonData.sprites.front_shiny,
      pokemonData.sprites.back_shiny,
      pokemonData.sprites.front_shiny_female,
      pokemonData.sprites.back_shiny_female,
      pokemonData.sprites.other.dream_world.front_default,
      pokemonData.sprites.other.dream_world.front_female,
      pokemonData.sprites.other.home.front_default,
      pokemonData.sprites.other.home.front_female,
      pokemonData.sprites.other.home.front_shiny,
      pokemonData.sprites.other.home.front_shiny_female,
      pokemonData.sprites.other["official-artwork"].front_default,
      pokemonData.sprites.other["official-artwork"].front_shiny,
      pokemonData.sprites.other.showdown.front_default,
      pokemonData.sprites.other.showdown.back_default,
      pokemonData.sprites.other.showdown.front_female,
      pokemonData.sprites.other.showdown.back_female,
      pokemonData.sprites.other.showdown.front_shiny,
      pokemonData.sprites.other.showdown.back_shiny,
      pokemonData.sprites.other.showdown.front_shiny_female,
      pokemonData.sprites.other.showdown.back_shiny_female,
      pokemonData.sprites.versions["generation-i"]["red-blue"].front_default,
      pokemonData.sprites.versions["generation-i"]["red-blue"].back_default,
      pokemonData.sprites.versions["generation-i"]["red-blue"].front_gray,
      pokemonData.sprites.versions["generation-i"]["red-blue"].back_gray,
      pokemonData.sprites.versions["generation-i"]["red-blue"]
        .front_transparent,
      pokemonData.sprites.versions["generation-i"]["red-blue"].back_transparent,
      pokemonData.sprites.versions["generation-i"].yellow.front_default,
      pokemonData.sprites.versions["generation-i"].yellow.back_default,
      pokemonData.sprites.versions["generation-i"].yellow.front_gray,
      pokemonData.sprites.versions["generation-i"].yellow.back_gray,
      pokemonData.sprites.versions["generation-i"].yellow.front_transparent,
      pokemonData.sprites.versions["generation-i"].yellow.back_transparent,
      pokemonData.sprites.versions["generation-ii"].crystal.front_default,
      pokemonData.sprites.versions["generation-ii"].crystal.back_default,
      pokemonData.sprites.versions["generation-ii"].crystal.front_shiny,
      pokemonData.sprites.versions["generation-ii"].crystal.back_shiny,
      pokemonData.sprites.versions["generation-ii"].crystal
        .front_shiny_transparent,
      pokemonData.sprites.versions["generation-ii"].crystal
        .back_shiny_transparent,
      pokemonData.sprites.versions["generation-ii"].crystal.front_transparent,
      pokemonData.sprites.versions["generation-ii"].crystal.back_transparent,
      pokemonData.sprites.versions["generation-ii"].gold.front_default,
      pokemonData.sprites.versions["generation-ii"].gold.back_default,
      pokemonData.sprites.versions["generation-ii"].gold.front_shiny,
      pokemonData.sprites.versions["generation-ii"].gold.back_shiny,
      pokemonData.sprites.versions["generation-ii"].gold.front_transparent,
      pokemonData.sprites.versions["generation-ii"].silver.front_default,
      pokemonData.sprites.versions["generation-ii"].silver.back_default,
      pokemonData.sprites.versions["generation-ii"].silver.front_shiny,
      pokemonData.sprites.versions["generation-ii"].silver.back_shiny,
      pokemonData.sprites.versions["generation-ii"].silver.front_transparent,
      pokemonData.sprites.versions["generation-iii"].emerald.front_default,
      pokemonData.sprites.versions["generation-iii"].emerald.front_shiny,
      pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
        .front_default,
      pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
        .back_default,
      pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
        .front_shiny,
      pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
        .back_shiny,
      pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
        .front_default,
      pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
        .back_default,
      pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
        .front_shiny,
      pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
        .back_shiny,
      pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
        .front_default,
      pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
        .back_default,
      pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
        .front_female,
      pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
        .back_female,
      pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
        .front_shiny,
      pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny,
      pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
        .front_shiny_female,
      pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
        .back_shiny_female,
      pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .front_default,
      pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .back_default,
      pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .front_female,
      pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .back_female,
      pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .front_shiny,
      pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .back_shiny,
      pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .front_shiny_female,
      pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .back_shiny_female,
      pokemonData.sprites.versions["generation-iv"].platinum.front_default,
      pokemonData.sprites.versions["generation-iv"].platinum.back_default,
      pokemonData.sprites.versions["generation-iv"].platinum.front_female,
      pokemonData.sprites.versions["generation-iv"].platinum.back_female,
      pokemonData.sprites.versions["generation-iv"].platinum.front_shiny,
      pokemonData.sprites.versions["generation-iv"].platinum.back_shiny,
      pokemonData.sprites.versions["generation-iv"].platinum.front_shiny_female,
      pokemonData.sprites.versions["generation-iv"].platinum.back_shiny_female,
      pokemonData.sprites.versions["generation-v"]["black-white"].front_default,
      pokemonData.sprites.versions["generation-v"]["black-white"].back_default,
      pokemonData.sprites.versions["generation-v"]["black-white"].front_female,
      pokemonData.sprites.versions["generation-v"]["black-white"].back_female,
      pokemonData.sprites.versions["generation-v"]["black-white"].front_shiny,
      pokemonData.sprites.versions["generation-v"]["black-white"].back_shiny,
      pokemonData.sprites.versions["generation-v"]["black-white"]
        .front_shiny_female,
      pokemonData.sprites.versions["generation-v"]["black-white"]
        .back_shiny_female,
      pokemonData.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
      pokemonData.sprites.versions["generation-v"]["black-white"].animated
        .back_default,
      pokemonData.sprites.versions["generation-v"]["black-white"].animated
        .front_female,
      pokemonData.sprites.versions["generation-v"]["black-white"].animated
        .back_female,
      pokemonData.sprites.versions["generation-v"]["black-white"].animated
        .front_shiny,
      pokemonData.sprites.versions["generation-v"]["black-white"].animated
        .back_shiny,
      pokemonData.sprites.versions["generation-v"]["black-white"].animated
        .front_shiny_female,
      pokemonData.sprites.versions["generation-v"]["black-white"].animated
        .back_shiny_female,
      pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_default,
      pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_female,
      pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_shiny,
      pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_shiny_female,
      pokemonData.sprites.versions["generation-vi"]["x-y"].front_default,
      pokemonData.sprites.versions["generation-vi"]["x-y"].front_female,
      pokemonData.sprites.versions["generation-vi"]["x-y"].front_shiny,
      pokemonData.sprites.versions["generation-vi"]["x-y"].front_shiny_female,
      pokemonData.sprites.versions["generation-vii"].icons.front_default,
      pokemonData.sprites.versions["generation-vii"].icons.front_female,
      pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
        .front_default,
      pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
        .front_female,
      pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
        .front_shiny,
      pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
        .front_shiny_female,
      pokemonData.sprites.versions["generation-viii"].icons.front_default,
      pokemonData.sprites.versions["generation-viii"].icons.front_female,
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
    return pokemonData.abilities.map((ability, key) => (
      <li key={key}>{ability.ability.name}</li>
    ));
  };

  const games = () => {
    return pokemonData.game_indices.map((game, key) => (
      <li key={key}>{game.version.name}</li>
    ));
  };

  const cries = () => {
    let audio = [];
    if (pokemonData.cries.latest)
      audio.push(
        <audio controls preload>
          <source src={pokemonData.cries.latest} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      );

    if (pokemonData.cries.legacy)
      audio.push(
        <audio controls preload>
          <source src={pokemonData.cries.legacy} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      );
    return audio;
  };

  const heldItems = () => {
    return pokemonData.held_items.map((item, key) => (
      <li key={key}>{item.item.name}</li>
    ));
  };

  const types = () => {
    return pokemonData.types.map((type, key) => (
      <li key={key}>{type.type.name}</li>
    ));
  };

  const stats = () => {
    return pokemonData.stats.map((stat, key) => (
      <li key={key}>
        {stat.stat.name}: {stat.base_stat}
      </li>
    ));
  };

  const forms = () => {
    return pokemonData.forms.map((form, key) => <li key={key}>{form.name}</li>);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          if (response.status === 404) {
            setNotFound(true);
          } else {
            setGotError(true);
          }
          console.error(`Error while fetching: ${response.status}`);
        }
      })
      .then((data) => setPokemonData(data))
      .then(() => setIsLoading(false))
      .catch((error) => {
        setGotError(true);
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    if (!isEmpty(pokemonData)) {
      pokemonData.abilities.forEach((ability) => {
        fetch(ability.ability.url)
          .then((response) => response.json())
          .then((data) => setAbilitiesData((prev) => [...prev, data]))
          .catch((error) => console.error(error));
      });
    }
  }, [isLoading]);

  function isEmpty(array) {
    return Object.keys(array).length === 0 ? true : false;
  }

  if (isLoading) return <p>Loading battle info...</p>;
  if (notFound) return <p>The pokémon has escaped! Keep searching!</p>;
  if (gotError) return <p>A wild ERROR appeared!</p>;

  return (
    <section id="pokemon-page">
      <div id="name-id">
        <h2>{pokemonData.name}</h2>
        <h3>#{pokemonData.id}</h3>
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
        <p>Base experience: {pokemonData.base_experience}</p>
        <p>Height: {pokemonData.height}</p>
        <p>Is default? {pokemonData.is_default ? "Yes" : "No"}</p>
        <p>Order: {pokemonData.order}</p>
        <p>Weight: {pokemonData.weight}</p>
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

export function PokemonColors() {
  return <></>;
}

export function PokemonColor() {
  return <></>;
}

export function PokemonForms() {
  return <></>;
}

export function PokemonForm() {
  return <></>;
}

export function PokemonHabitats() {
  return <></>;
}

export function PokemonHabitat() {
  return <></>;
}

export function PokemonShapes() {
  return <></>;
}

export function PokemonShape() {
  return <></>;
}

export function PokemonSpecies() {
  return <></>;
}

export function PokemonSpeciesId() {
  return <></>;
}
