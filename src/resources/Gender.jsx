export default function Gender(props) {
  return (
    <div id="gender">
      <div id="gender-id">
        <p>#{props.data.id}</p>
      </div>
      <div id="gender-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="gender-pokemon-species-details">
        <h3>Pokemon species details</h3>
        <ul>
          {props.data.pokemon_species_details.map((pokemon, key) => (
            <li key={key}>
              <a
                href={`/pokeview/pokemon-species/${pokemon.pokemon_species.name}`}
                alt={pokemon.pokemon_species.name}
              >
                {pokemon.pokemon_species.name}
              </a>{" "}
              - Rate: {pokemon.rate}
            </li>
          ))}
        </ul>
      </div>
      <div id="gender-required-for-evolution">
        <h3>Required for evolution</h3>
        <ul>
          {props.data.required_for_evolution.map((pokemon, key) => (
            <li key={key}>
              <a
                href={`/pokeview/pokemon-species/${pokemon.name}`}
                alt={pokemon.name}
              >
                {pokemon.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
