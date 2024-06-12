import React from "react";

export default function SearchResult(props) {
  return (
    <section id="result-card">
      <img src={props.result.sprites.front_default} alt={props.result.name} />
      <p>{props.result.name}</p>
      <p>#{props.result.id}</p>
    </section>
  );
}
