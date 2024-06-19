import Loading from "../components/Loading";
import { isObjEmpty } from "../utils";

export default function Type(props) {
  if (isObjEmpty(props.data)) return <Loading />;

  return (
    <div id="type-card">
      <div id="type-card-id">
        <p>{props.data.id}</p>
      </div>
      <div id="type-card-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="type-card-damage-relations">
        <h3>Damage relations</h3>
        <div id="type-card-damage-relations-double-damage-from">
          <h4>Double damage from</h4>
          <ul>
            {props.data.damage_relations.double_damage_from.map((type, key) => (
              <li key={key}>
                <a href={`/type/${type.name}`} alt={type.name}>
                  {type.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="type-card-damage-relations-double-damage-to">
          <h4>Double damage to</h4>
          <ul>
            {props.data.damage_relations.double_damage_to.map((type, key) => (
              <li key={key}>
                <a href={`/type/${type.name}`} alt={type.name}>
                  {type.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="type-card-damage-relations-half-damage-from">
          <h4>Half damage from</h4>
          <ul>
            {props.data.damage_relations.half_damage_from.map((type, key) => (
              <li key={key}>
                <a href={`/type/${type.name}`} alt={type.name}>
                  {type.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="type-card-damage-relations-half-damage-to">
          <h4>Half damage to</h4>
          <ul>
            {props.data.damage_relations.half_damage_to.map((type, key) => (
              <li key={key}>
                <a href={`/type/${type.name}`} alt={type.name}>
                  {type.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="type-card-damage-relations-no-damage-from">
          <h4>No damage from</h4>
          <ul>
            {props.data.damage_relations.no_damage_from.map((type, key) => (
              <li key={key}>
                <a href={`/type/${type.name}`} alt={type.name}>
                  {type.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="type-card-damage-relations-no-damage-to">
          <h4>No damage to</h4>
          <ul>
            {props.data.damage_relations.no_damage_to.map((type, key) => (
              <li key={key}>
                <a href={`/type/${type.name}`} alt={type.name}>
                  {type.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id="type-card-game-indices">
        <h3>Games indices</h3>
        <ul>
          {props.data.game_indices.map((generation, key) => (
            <li key={key}>
              <a
                href={`/generation/${generation.generation.name}`}
                alt={generation.generation.name}
              >
                {generation.generation.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id="type-card-generation">
        <h3>Generation</h3>
        <p>
          <a
            href={`/generation/${props.data.generation.name}`}
            alt={props.data.generation.name}
          >
            {props.data.generation.name}
          </a>
        </p>
      </div>
      <div id="type-card-move-damage-class">
        <h3>Move damage class</h3>
        <p>
          <a
            href={`/move-damage-class/${props.data.move_damage_class.name}`}
            alt={props.data.move_damage_class.name}
          >
            {props.data.move_damage_class.name}
          </a>
        </p>
      </div>
      <div id="type-card-moves">
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
      <div id="type-card-names">
        <h3>Names</h3>
        <h4>by language</h4>
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
      {/* <div id="type-card-past-damage-relations">
        <h3>Past damage relations</h3>
      </div> */}
      <div id="type-card-pokemon">
        <h3>Pokémon</h3>
        <ul>
          {props.data.pokemon.map((pokemon, key) => (
            <li key={key}>
              <a
                href={`/pokemon/${pokemon.pokemon.name}`}
                alt={pokemon.pokemon.name}
              >
                {pokemon.pokemon.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
