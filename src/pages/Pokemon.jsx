import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon(props) {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState([]);
  const [abilitiesData, setAbilitiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [gotError, setGotError] = useState(false);

  const gallery = () => {
    const images = [];

    // default
    if (pokemonData.sprites.front_female) {
      images.push(
        <img src={pokemonData.sprites.front_female} alt={pokemonData.name} />
      );
      images.push(
        <img src={pokemonData.sprites.back_female} alt={pokemonData.name} />
      );
    }
    if (pokemonData.sprites.front_shiny) {
      images.push(
        <img src={pokemonData.sprites.front_shiny} alt={pokemonData.name} />
      );
      images.push(
        <img src={pokemonData.sprites.back_shiny} alt={pokemonData.name} />
      );
    }
    if (pokemonData.sprites.front_shiny_female) {
      images.push(
        <img
          src={pokemonData.sprites.front_shiny_female}
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={pokemonData.sprites.back_shiny_female}
          alt={pokemonData.name}
        />
      );
    }

    //other
    //dream_world
    if (pokemonData.sprites.other.dream_world.front_default)
      images.push(
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
      );
    if (pokemonData.sprites.other.dream_world.front_female)
      images.push(
        <img
          src={pokemonData.sprites.other.dream_world.front_female}
          alt={pokemonData.name}
        />
      );
    //home
    if (pokemonData.sprites.other.home.front_default)
      images.push(
        <img
          src={pokemonData.sprites.other.home.front_default}
          alt={pokemonData.name}
        />
      );
    if (pokemonData.sprites.other.home.front_female)
      images.push(
        <img
          src={pokemonData.sprites.other.home.front_female}
          alt={pokemonData.name}
        />
      );
    if (pokemonData.sprites.other.home.front_shiny)
      images.push(
        <img
          src={pokemonData.sprites.other.home.front_shiny}
          alt={pokemonData.name}
        />
      );
    if (pokemonData.sprites.other.home.front_shiny_female)
      images.push(
        <img
          src={pokemonData.sprites.other.home.front_shiny_female}
          alt={pokemonData.name}
        />
      );
    //official-artwork
    if (pokemonData.sprites.other["official-artwork"].front_default)
      images.push(
        <img
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt={pokemonData.name}
        />
      );
    if (pokemonData.sprites.other["official-artwork"].front_shiny)
      images.push(
        <img
          src={pokemonData.sprites.other["official-artwork"].front_shiny}
          alt={pokemonData.name}
        />
      );
    //showdown
    if (pokemonData.sprites.other.showdown.front_default) {
      images.push(
        <img
          src={pokemonData.sprites.other.showdown.front_default}
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={pokemonData.sprites.other.showdown.back_default}
          alt={pokemonData.name}
        />
      );
    }
    if (pokemonData.sprites.other.showdown.front_female) {
      images.push(
        <img
          src={pokemonData.sprites.other.showdown.front_female}
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={pokemonData.sprites.other.showdown.back_female}
          alt={pokemonData.name}
        />
      );
    }
    if (pokemonData.sprites.other.showdown.front_shiny) {
      images.push(
        <img
          src={pokemonData.sprites.other.showdown.front_shiny}
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={pokemonData.sprites.other.showdown.back_shiny}
          alt={pokemonData.name}
        />
      );
    }
    if (pokemonData.sprites.other.showdown.front_shiny_female) {
      images.push(
        <img
          src={pokemonData.sprites.other.showdown.front_shiny_female}
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={pokemonData.sprites.other.showdown.back_shiny_female}
          alt={pokemonData.name}
        />
      );
    }
    //versions
    //generation-i
    //red-blue
    if (
      pokemonData.sprites.versions["generation-i"]["red-blue"].front_default
    ) {
      images.push(
        <img
          src={
            pokemonData.sprites.versions["generation-i"]["red-blue"]
              .front_default
          }
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={
            pokemonData.sprites.versions["generation-i"]["red-blue"]
              .back_default
          }
          alt={pokemonData.name}
        />
      );
    }
    if (pokemonData.sprites.versions["generation-i"]["red-blue"].front_gray) {
      images.push(
        <img
          src={
            pokemonData.sprites.versions["generation-i"]["red-blue"].front_gray
          }
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={
            pokemonData.sprites.versions["generation-i"]["red-blue"].back_gray
          }
          alt={pokemonData.name}
        />
      );
    }
    if (
      pokemonData.sprites.versions["generation-i"]["red-blue"].front_transparent
    ) {
      images.push(
        <img
          src={
            pokemonData.sprites.versions["generation-i"]["red-blue"]
              .front_transparent
          }
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={
            pokemonData.sprites.versions["generation-i"]["red-blue"]
              .back_transparent
          }
          alt={pokemonData.name}
        />
      );
    }
    //yellow
    if (pokemonData.sprites.versions["generation-i"].yellow.front_default) {
      images.push(
        <img
          src={
            pokemonData.sprites.versions["generation-i"].yellow.front_default
          }
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={pokemonData.sprites.versions["generation-i"].yellow.back_default}
          alt={pokemonData.name}
        />
      );
    }
    if (pokemonData.sprites.versions["generation-i"].yellow.front_gray) {
      images.push(
        <img
          src={pokemonData.sprites.versions["generation-i"].yellow.front_gray}
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={pokemonData.sprites.versions["generation-i"].yellow.back_gray}
          alt={pokemonData.name}
        />
      );
    }
    if (pokemonData.sprites.versions["generation-i"].yellow.front_transparent) {
      images.push(
        <img
          src={
            pokemonData.sprites.versions["generation-i"].yellow
              .front_transparent
          }
          alt={pokemonData.name}
        />
      );
      images.push(
        <img
          src={
            pokemonData.sprites.versions["generation-i"].yellow.back_transparent
          }
          alt={pokemonData.name}
        />
      );
    }
    return images;
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
    return (
      <>
        <audio controls preload>
          <source src={pokemonData.cries.latest} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
        <audio controls preload>
          <source src={pokemonData.cries.legacy} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      </>
    );
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

  // useEffect(() => {
  //   if (!isEmpty(pokemonData)) {
  //     pokemonData.abilities.forEach((ability) => {
  //       fetch(ability.ability.url)
  //         .then((response) => response.json())
  //         .then((data) => setAbilitiesData((prev) => [...prev, data]))
  //         .catch((error) => console.error(error));
  //     });
  //   }
  // }, [isLoading]);

  function isEmpty(array) {
    return Object.keys(array).length;
  }

  if (isLoading) return <p>Loading battle info...</p>;
  if (notFound) return <p>The pokémon has escaped! Keep searching!</p>;
  if (gotError) return <p>A wild ERROR appeared!</p>;

  return (
    <section id="pokemon-page">
      <h2>{pokemonData.name}</h2>
      <h3>#{pokemonData.id}</h3>

      <h3>Types</h3>
      <div id="types">{types()}</div>

      <h3>Stats</h3>
      <div id="stats">{stats()}</div>

      <h3>Info</h3>
      <div id="info">
        <p>Base experience: {pokemonData.base_experience}</p>
        <p>Height: {pokemonData.height}</p>
        <p>Is default? {pokemonData.is_default ? "Yes" : "No"}</p>
        <p>Order: {pokemonData.order}</p>
        <p>Weight: {pokemonData.weight}</p>
      </div>

      <h3>Cries</h3>
      <div id="cries">{cries()}</div>

      <h3>Abilities</h3>
      <div id="abilities">{abilities()}</div>

      <h3>Held items</h3>
      <div id="held-items">{heldItems()}</div>

      <h3>Games</h3>
      <div id="games">{games()}</div>
    </section>
  );
}
