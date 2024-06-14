import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResult(props) {
  const navigate = useNavigate();
  const backgroundColors = {
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

  const textColors = {
    normal: "#1F1F14",
    fighting: "#2A0A09",
    flying: "#10052E",
    poison: "#250E25",
    ground: "#2B2108",
    rock: "#27230C",
    bug: "#282D06",
    ghost: "#191320",
    steel: "#15151E",
    fire: "#2F1704",
    water: "#05122E",
    grass: "#16270C",
    electric: "#312802",
    psychic: "#310210",
    ice: "#0E2524",
    dragon: "#0F0132",
    dark: "#1F1814",
    fairy: "#260D1A",
    unknown: "#ccc",
    shadow: "#fff",
  };
  const type = props.result.types[0].type.name;

  function goToPokemonPage() {
    navigate(`/pokemon/${props.result.name}`);
  }

  function getBackgroundColor() {
    return backgroundColors[type];
  }

  return (
    <section
      style={{
        backgroundColor: backgroundColors[type],
        color: textColors[type],
        borderColor: textColors[type],
      }}
      id="result-card"
      onClick={goToPokemonPage}
    >
      <img src={props.result.sprites.front_default} alt={props.result.name} />
      <p>{props.result.name}</p>
      <p>#{props.result.id}</p>
    </section>
  );
}
