export function EncounterCondition(props) {
  return (
    <div id="encounter-condition">
      <div id="encounter-condition-id">#{props.data.id}</div>
      <div id="encounter-condition-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="encounter-condition-names">
        <h3>Names</h3>
        <ul>
          {props.data.names.map((condition, key) => (
            <li key={key}>
              <a
                href={`/pokeview/language/${condition.language.name}`}
                alt={condition.language.name}
              >
                {condition.language.name}
              </a>{" "}
              - {condition.name}
            </li>
          ))}
        </ul>
      </div>
      <div id="encounter-condition-values">
        <h3>Values</h3>
        <ul>
          {props.data.values.map((value, key) => (
            <li key={key}>
              <a
                href={`/pokeview/encounter-condition-value/${value.name}`}
                alt={value.name}
              >
                {value.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function EncounterConditionValue(props) {
  return (
    <div id="encounter-condition-value">
      <div id="encounter-condition-value-condition">
        <a
          href={`/pokeview/encounter-condition/${props.data.name}`}
          alt={props.data.name}
        >
          {props.data.condition.name}
        </a>
      </div>
      <div id="encounter-condition-value-id">#{props.data.id}</div>
      <div id="encounter-condition-value-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="encounter-condition-value-names">
        <ul>
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
        </ul>
      </div>
    </div>
  );
}

export function EncounterMethod(props) {
  return (
    <div id="encounter-method">
      <div id="encounter-method-id">#{props.data.id}</div>
      <div id="encounter-method-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="encounter-method-names">
        <ul>
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
        </ul>
      </div>
      <div id="encounter-method-order">
        <h3>Order</h3>
        {props.data.order}
      </div>
    </div>
  );
}
