import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

/**
 * This component renders a page with a list of pokémons cards based on the searchbar value.
 *
 * @returns {ReactNode} A React element that renders a list of pokémon cards.
 */
export default function Pokemons() {
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
      <div id="pokemon-card-list">{pokemonCards}</div>
    </>
  );
}
