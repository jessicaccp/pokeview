import React from "react";

export default function PokemonCard(props) {
  const link = `/pokemon/${props.id}`;
  const colors = {
    normal: "#A8A77A",
    fighting: "#C22E28",
    flying: "#A98FF3",
    poison: "#A33EA1",
    ground: "#E2BF65",
    rock: "#B6A136",
    bug: "#A6B91A",
    ghost: "#735797",
    steel: "#B7B7CE",
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    electric: "#F7D02C",
    psychic: "#F95587",
    ice: "#96D9D6",
    dragon: "#6F35FC",
    dark: "#705746",
    fairy: "#D685AD",
    unknown: "#000000",
    shadow: "#333333",
  };

  return (
    <section className="card">
      <p className="card-title">
        <a href={link}>
          #{props.id} {props.name}
        </a>
      </p>
      <img src={props.sprites[4]} alt={props.name} />
      <p className="card-types">
        {props.types.map((type) => (
          <p style={{ borderColor: colors[type[1]] }}>{type[1]}</p>
        ))}
      </p>
    </section>
  );
}
