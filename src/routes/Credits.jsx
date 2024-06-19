export default function Credits() {
  const links = [
    {
      title: "Pokeball Icon",
      url: "https://icon-icons.com/pt/icone/pokeball-pokemon-go-jogo/67533",
    },
    {
      title: "Pokeball Icon",
      url: "https://www.flaticon.com/free-icon/open-pokeball_188917",
    },
    {
      title: "Pokeball Icon",
      url: "https://www.flaticon.com/free-icon/pokeball_188918",
    },
    {
      title: "Favicon Converter",
      url: "https://favicon.io/favicon-converter/",
    },
    { title: "Bootstrap Icons", url: "https://icons.getbootstrap.com/" },
    {
      title: "Pocket Monk Font",
      url: "https://www.fontspace.com/pocket-monk-font-f23540",
    },
  ];

  const linksList = links.map((link, key) => (
    <li key={key}>
      <a href={link.url}>{link.title}</a>
    </li>
  ));

  return (
    <div id="credits">
      <h2>Credits</h2>
      <ul>{linksList}</ul>
    </div>
  );
}
