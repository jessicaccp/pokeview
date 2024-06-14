import React from "react";

export default function Nav() {
  const links = [
    { title: "Home", path: "/" },
    { title: "Pokémons", path: "/pokemon" },
    { title: "Abilities", path: "/abilities" },
    // { title: "PokéAPI", url: "https://pokeapi.co" },
    // { title: "Credits", path: "/credits" },
  ];

  const navList = links.map((link, key) => {
    if (link.url)
      return (
        <li key={key}>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.title}
          </a>
        </li>
      );
    return (
      <li key={key}>
        <a href={link.path}>{link.title}</a>
      </li>
    );
  });

  return (
    <>
      <nav id="header-nav">
        <ul>{navList}</ul>
      </nav>
    </>
  );
}
