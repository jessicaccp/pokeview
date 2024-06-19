export default function Characteristic(props) {
  return (
    <div id="characteristic">
      <div id="characteristic-descriptions">
        <h3>Descriptions</h3>
        {props.data.descriptions.map((description, key) => (
          <li key={key}>
            <a
              href={`/language/${description.language.name}`}
              alt={description.language.name}
            >
              {description.language.name}
            </a>{" "}
            - {description.description}
          </li>
        ))}
      </div>
      <div id="characteristic-gene-modulo">
        <h3>Gene Modulo</h3>
        {props.data.gene_modulo}
      </div>
      <div id="characteristic-highest-stat">
        <h3>Highest stat</h3>
        <a
          href={`/stat/${props.data.highest_stat.name}`}
          alt={props.data.highest_stat.name}
        >
          {props.data.highest_stat.name}
        </a>
      </div>
      <div id="characteristic-id">#{props.data.id}</div>
      <div id="characteristic-possible-values">
        {props.data.possible_values.map((value, key) => (
          <li key={key}>{value}</li>
        ))}
      </div>
    </div>
  );
}
