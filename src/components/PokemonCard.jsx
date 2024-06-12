import React from "react";

export default function PokemonCard(props) {
  return (
    <section className="card">
      <h2>
        #{props.id} {props.name}
      </h2>
      <img src={props.sprites[4]} alt={props.name} />
      <p>
        {props.types.map((type) => (
          <p>{type[1]}</p>
        ))}
      </p>
    </section>
  );
}
