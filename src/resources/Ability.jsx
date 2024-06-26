export default function Ability(props) {
  return (
    <div id="ability">
      <div id="ability-id">#{props.data.id}</div>
      <div id="ability-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="ability-is-main-series">
        <h3>Is main series?</h3>
        {props.data.is_main_series ? <p>True</p> : <p>False</p>}
      </div>
      <div id="ability-generation">
        <h3>Generation</h3>
        <a
          href={`/pokeview/generation/${props.data.generation.name}`}
          alt={props.data.generation.name}
        >
          {props.data.generation.name}
        </a>
      </div>
      <div id="ability-names">
        <h3>Names</h3>
        {props.data.names.map((name, key) => (
          <li key={key}>
            <a
              href={`/pokeview/language/${name.language.name}`}
              alt={name.language.name}
            >
              {name.language.name}
            </a>{" "}
            - {name.name}
          </li>
        ))}
      </div>
      <div id="ability-effect-entries">
        <h3>Effect entries</h3>
        {props.data.effect_entries.map((entry, key) => (
          <li key={key}>
            <a
              href={`/pokeview/language/${entry.language.name}`}
              alt={entry.language.name}
            >
              {entry.language.name}
            </a>{" "}
            <p>
              <h4>Effect</h4>
              {entry.effect}
            </p>
            <p>
              <h4>Short effect</h4>
              {entry.short_effect}
            </p>
          </li>
        ))}
      </div>
      <div id="ability-effect-changes">
        <h3>Effect changes</h3>
        {props.data.effect_changes.map((change, key) => (
          <>
            <li key={key}>
              <a
                href={`/pokeview/version-group/${change.version_group.name}`}
                alt={change.version_group.name}
              >
                {change.version_group.name}
              </a>
            </li>
            <ul>
              <h4>Effect entries</h4>
              {change.effect_entries.map((entry, key) => (
                <li key={key}>
                  <a
                    href={`/pokeview/language/${entry.language.name}`}
                    alt={entry.language.name}
                  >
                    {entry.language.name}
                  </a>{" "}
                  - {entry.effect}
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
      <div id="ability-flavor-text-entries">
        <h3>Flavor text entries</h3>
        {props.data.flavor_text_entries.map((entry, key) => (
          <li key={key}>
            <a
              href={`/pokeview/language/${entry.language.name}`}
              alt={entry.language.name}
            >
              {entry.language.name}
            </a>{" "}
            -{" "}
            <a
              href={`/pokeview/version-group/${entry.version_group.name}`}
              alt={entry.version_group.name}
            >
              {entry.version_group.name}
            </a>{" "}
            - {entry.flavor_text}
          </li>
        ))}
      </div>
      <div id="ability-pokemon">
        <h3>Pokémon</h3>
        {props.data.pokemon.map((pokemon, key) => (
          <li key={key}>
            <a
              href={`/pokeview/pokemon/${pokemon.pokemon.name}`}
              alt={pokemon.pokemon.name}
            >
              {pokemon.pokemon.name}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}
