export default function Berry(props) {
  return (
    <div id="berry">
      <div id="berry-id">#{props.data.id}</div>
      <div id="berry-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="berry-growth-time">
        <h3>Growth time</h3>
        {props.data.growth_time}
      </div>
      <div id="berry-max-harvest">
        <h3>Max harvest</h3>
        {props.data.max_harvest}
      </div>
      <div id="berry-natural-gift-power">
        <h3>Natural gift power</h3>
        {props.data.natural_gift_power}
      </div>
      <div id="berry-size">
        <h3>Size</h3>
        {props.data.size}
      </div>
      <div id="berry-smoothness">
        <h3>Smoothness</h3>
        {props.data.smoothness}
      </div>
      <div id="berry-soil-dryness">
        <h3>Soil dryness</h3>
        {props.data.soil_dryness}
      </div>
      <div id="berry-firmness">
        <h3>Firmness</h3>
        <a
          href={`/pokeview/berry-firmness/${props.data.firmness.name}`}
          alt={props.data.firmness.name}
        >
          {props.data.firmness.name}
        </a>
      </div>
      <div id="berry-flavors">
        <h3>Flavors</h3>
        {props.data.flavors.map((flavor, key) => (
          <li key={key}>
            <a
              href={`/pokeview/berry-flavor/${flavor.flavor.name}`}
              alt={flavor.flavor.name}
            >
              {flavor.flavor.name}
            </a>
            <h4>Potency</h4>
            {flavor.potency}
          </li>
        ))}
      </div>
      <div id="berry-item">
        <h3>Item</h3>
        <a
          href={`/pokeview/item/${props.data.item.name}`}
          alt={props.data.item.name}
        >
          {props.data.item.name}
        </a>
      </div>
      <div id="berry-natural-gift-type">
        <h3>Natural gift type</h3>
        <a
          href={`/pokeview/type/${props.data.natural_gift_type.name}`}
          alt={props.data.natural_gift_type.name}
        >
          {props.data.natural_gift_type.name}
        </a>
      </div>
    </div>
  );
}

export function BerryFirmness(props) {
  return (
    <div id="berry-firmness">
      <div id="berry-firmness-berries">
        <h3>Berries</h3>
        {props.data.berries.map((berry, key) => (
          <li key={key}>
            <a href={`/pokeview/berry/${berry.name}`} alt={berry.name}>
              {berry.name}
            </a>
          </li>
        ))}
      </div>
      <div id="berry-firmness-id">#{props.data.id}</div>
      <div id="berry-firmness-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="berry-firmness-names">
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
    </div>
  );
}

export function BerryFlavor(props) {
  return (
    <div id="berry-flavor">
      <div id="berry-flavor-berries">
        <h3>Berries</h3>
        {props.data.berries.map((berry, key) => (
          <li key={key}>
            <a
              href={`/pokeview/berry/${berry.berry.name}`}
              alt={berry.berry.name}
            >
              {berry.berry.name}
            </a>
            <h4>Potency</h4>
            {berry.potency}
          </li>
        ))}
      </div>
      <div id="berry-flavor-contest-type">
        <h3>Contest type</h3>
        <a
          href={`/pokeview/contest-type/${props.data.contest_type.name}`}
          alt={props.data.contest_type.name}
        >
          {props.data.contest_type.name}
        </a>
      </div>
      <div id="berry-flavor-id">#{props.data.id}</div>
      <div id="berry-flavor-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="berry-flavor-names">
        {props.data.names.map((berry, key) => (
          <li key={key}>
            <a
              href={`/pokeview/language/${berry.language.name}`}
              alt={berry.language.name}
            >
              {berry.language.name}
            </a>{" "}
            - {berry.name}
          </li>
        ))}
      </div>
    </div>
  );
}
