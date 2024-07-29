import Loading from "../components/Loading";
import { isObjEmpty } from "../utils";

export default function Version(props) {
  if (isObjEmpty(props.data)) return <Loading />;

  return (
    <div id="version-card">
      <div id="version-card-id">
        <p>#{props.data.id}</p>
      </div>
      <div id="version-card-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="version-card-names">
        <h3>Names</h3>
        <h4>by language</h4>
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
      <div id="version-card-version-group">
        <h3>Version group</h3>
        <p>
          <a
            href={`/pokeview/version-group/${props.data.version_group.name}`}
            alt={props.data.version_group.name}
          >
            {props.data.version_group.name}
          </a>
        </p>
      </div>
    </div>
  );
}

export function VersionGroup(props) {
  if (isObjEmpty(props.data)) return <Loading />;

  return (
    <div id="version-group-card">
      <div id="version-group-card-id">
        <p>#{props.data.id}</p>
      </div>
      <div id="version-group-card-name">
        <h2>{props.data.name}</h2>
      </div>
      <div id="version-group-card-generation">
        <h3>Generation</h3>
        <p>
          <a
            href={`/pokeview/generation/${props.data.generation.name}`}
            alt={props.data.generation.name}
          >
            {props.data.generation.name}
          </a>
        </p>
      </div>
      <div id="version-group-card-move-learn-methods">
        <h3>Move learn methods</h3>
        <ul>
          {props.data.move_learn_methods.map((method, key) => (
            <li key={key}>
              <a
                href={`/pokeview/move-learn-method/${method.name}`}
                alt={method.name}
              >
                {method.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id="version-group-card-order">
        <h3>Order</h3>
        <p>{props.data.order}</p>
      </div>
      <div id="version-group-card-pokedexes">
        <h3>Pokedexes</h3>
        <ul>
          {props.data.pokedexes.map((pokedex, key) => (
            <li key={key}>
              <a href={`/pokeview/pokedex/${pokedex.name}`} alt={pokedex.name}>
                {pokedex.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id="version-group-card-regions">
        <h3>Regions</h3>
        <ul>
          {props.data.regions.map((region, key) => (
            <li key={key}>
              <a href={`/pokeview/region/${region.name}`} alt={region.name}>
                {region.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id="version-group-card-versions">
        <h3>Versions</h3>
        <ul>
          {props.data.versions.map((version, key) => (
            <li key={key}>
              <a href={`/pokeview/version/${version.name}`} alt={version.name}>
                {version.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
