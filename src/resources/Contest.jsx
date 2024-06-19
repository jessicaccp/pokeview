export function ContestEffect(props) {
  return (
    <div id="contest-effect">
      <div id="contest-effect-appeal">
        <h3>Appeal</h3>
        {props.data.appeal}
      </div>
      <div id="contest-effect-effect-entries">
        <h3>Effect entries</h3>
        {props.data.effect_entries.map((entry, key) => (
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
        {props.data.flavor_text_entries.map((entry, key) => (
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
      <div id="contest-effect-id">#{props.data.id}</div>
      <div id="contest-effect-jam">
        <h3>Jam</h3>
        {props.data.jam}
      </div>
    </div>
  );
}

export function ContestType(props) {
  return (
    <div id="contest-type">
      <div id="contest-type-berry-flavor">
        <h3>Berry flavor</h3>
        <a
          href={`/berry-flavor/${props.data.berry_flavor.name}`}
          alt={props.data.berry_flavor.name}
        >
          {props.data.berry_flavor.name}
        </a>
      </div>
      <div id="contest-type-id">#{props.data.id}</div>
      <div id="contest-type-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="contest-type-names">
        <h3>Names</h3>
        {props.data.names.map((name, key) => (
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

export function SuperContestEffect(props) {
  return (
    <div id="super-contest-effect">
      <div id="super-contest-effect-appeal">
        <h3>Appeal</h3>
        {props.data.appeal}
      </div>
      <div id="super-contest-effect-flavor-text-entries">
        <h3>Flavor text entries</h3>
        <ul>
          {props.data.flavor_text_entries.map((entry, key) => (
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
      <div id="super-contest-effect-id">#{props.data.id}</div>
      <div id="super-contest-effect-moves">
        <h3>Moves</h3>
        <ul>
          {props.data.moves.map((move, key) => (
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
