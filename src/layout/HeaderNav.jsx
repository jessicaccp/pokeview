export default function Nav() {
  const links = [
    { title: "Home", path: "/pokeview/" },
    { title: "Search", path: "/pokeview/search" },
    { title: "Random", path: "/pokeview/random" },
    { title: "Pokémon", path: "/pokeview/pokemon" },
    { title: "Lists", path: "/pokeview/lists" },
    // { title: "Pokémons", path: "/pokeview/pokemon" },
    // { title: "Abilities", path: "/pokeview/abilities" },
    // { title: "PokéAPI", url: "https://pokeapi.co" },
    // { title: "Credits", path: "/pokeview/credits" },
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
