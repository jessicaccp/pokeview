export function EggGroup(props) {
  return (
    <div id="egg-group">
      <div id="egg-group-id">#{props.data.id}</div>
      <div id="egg-group-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="egg-group-names">
        <h3>Names</h3>
        <ul>
          {props.data.names.map((name, key) => (
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
      <div id="egg-group-pokemon-species">
        <h3>Pokémon species</h3>
        <ul>
          {props.data.pokemon_species.map((pokemon, key) => (
            <li key={key}>
              <a href={`/pokemon-species/${pokemon.name}`} alt={pokemon.name}>
                {pokemon.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
