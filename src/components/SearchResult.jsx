import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResult(props) {
  const navigate = useNavigate();

  function goToPokemonPage() {
    navigate(`/pokemon/${props.result.name}`);
  }

  return (
    <section id="result-card" onClick={goToPokemonPage}>
      <img src={props.result.sprites.front_default} alt={props.result.name} />
      <p>{props.result.name}</p>
      <p>#{props.result.id}</p>
    </section>
  );
}
