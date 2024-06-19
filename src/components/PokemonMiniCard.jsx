export default function PokemonMiniCard(props) {
  // Sets initial values
  const id = props.data.id;
  const name = props.data.name;

  // Full list of possible images
  const images = [
    props.data.sprites.front_default,
    props.data.sprites.back_default,
    props.data.sprites.front_female,
    props.data.sprites.back_female,
    props.data.sprites.front_shiny,
    props.data.sprites.back_shiny,
    props.data.sprites.front_shiny_female,
    props.data.sprites.back_shiny_female,
    props.data.sprites.other.dream_world.front_default,
    props.data.sprites.other.dream_world.front_female,
    props.data.sprites.other.home.front_default,
    props.data.sprites.other.home.front_female,
    props.data.sprites.other.home.front_shiny,
    props.data.sprites.other.home.front_shiny_female,
    props.data.sprites.other["official-artwork"].front_default,
    props.data.sprites.other["official-artwork"].front_shiny,
    props.data.sprites.other.showdown.front_default,
    props.data.sprites.other.showdown.back_default,
    props.data.sprites.other.showdown.front_female,
    props.data.sprites.other.showdown.back_female,
    props.data.sprites.other.showdown.front_shiny,
    props.data.sprites.other.showdown.back_shiny,
    props.data.sprites.other.showdown.front_shiny_female,
    props.data.sprites.other.showdown.back_shiny_female,
    props.data.sprites.versions["generation-i"]["red-blue"].front_default,
    props.data.sprites.versions["generation-i"]["red-blue"].back_default,
    props.data.sprites.versions["generation-i"]["red-blue"].front_gray,
    props.data.sprites.versions["generation-i"]["red-blue"].back_gray,
    props.data.sprites.versions["generation-i"]["red-blue"].front_transparent,
    props.data.sprites.versions["generation-i"]["red-blue"].back_transparent,
    props.data.sprites.versions["generation-i"].yellow.front_default,
    props.data.sprites.versions["generation-i"].yellow.back_default,
    props.data.sprites.versions["generation-i"].yellow.front_gray,
    props.data.sprites.versions["generation-i"].yellow.back_gray,
    props.data.sprites.versions["generation-i"].yellow.front_transparent,
    props.data.sprites.versions["generation-i"].yellow.back_transparent,
    props.data.sprites.versions["generation-ii"].crystal.front_default,
    props.data.sprites.versions["generation-ii"].crystal.back_default,
    props.data.sprites.versions["generation-ii"].crystal.front_shiny,
    props.data.sprites.versions["generation-ii"].crystal.back_shiny,
    props.data.sprites.versions["generation-ii"].crystal
      .front_shiny_transparent,
    props.data.sprites.versions["generation-ii"].crystal.back_shiny_transparent,
    props.data.sprites.versions["generation-ii"].crystal.front_transparent,
    props.data.sprites.versions["generation-ii"].crystal.back_transparent,
    props.data.sprites.versions["generation-ii"].gold.front_default,
    props.data.sprites.versions["generation-ii"].gold.back_default,
    props.data.sprites.versions["generation-ii"].gold.front_shiny,
    props.data.sprites.versions["generation-ii"].gold.back_shiny,
    props.data.sprites.versions["generation-ii"].gold.front_transparent,
    props.data.sprites.versions["generation-ii"].silver.front_default,
    props.data.sprites.versions["generation-ii"].silver.back_default,
    props.data.sprites.versions["generation-ii"].silver.front_shiny,
    props.data.sprites.versions["generation-ii"].silver.back_shiny,
    props.data.sprites.versions["generation-ii"].silver.front_transparent,
    props.data.sprites.versions["generation-iii"].emerald.front_default,
    props.data.sprites.versions["generation-iii"].emerald.front_shiny,
    props.data.sprites.versions["generation-iii"]["firered-leafgreen"]
      .front_default,
    props.data.sprites.versions["generation-iii"]["firered-leafgreen"]
      .back_default,
    props.data.sprites.versions["generation-iii"]["firered-leafgreen"]
      .front_shiny,
    props.data.sprites.versions["generation-iii"]["firered-leafgreen"]
      .back_shiny,
    props.data.sprites.versions["generation-iii"]["ruby-sapphire"]
      .front_default,
    props.data.sprites.versions["generation-iii"]["ruby-sapphire"].back_default,
    props.data.sprites.versions["generation-iii"]["ruby-sapphire"].front_shiny,
    props.data.sprites.versions["generation-iii"]["ruby-sapphire"].back_shiny,
    props.data.sprites.versions["generation-iv"]["diamond-pearl"].front_default,
    props.data.sprites.versions["generation-iv"]["diamond-pearl"].back_default,
    props.data.sprites.versions["generation-iv"]["diamond-pearl"].front_female,
    props.data.sprites.versions["generation-iv"]["diamond-pearl"].back_female,
    props.data.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny,
    props.data.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny,
    props.data.sprites.versions["generation-iv"]["diamond-pearl"]
      .front_shiny_female,
    props.data.sprites.versions["generation-iv"]["diamond-pearl"]
      .back_shiny_female,
    props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
      .front_default,
    props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
      .back_default,
    props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
      .front_female,
    props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
      .back_female,
    props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
      .front_shiny,
    props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
      .back_shiny,
    props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
      .front_shiny_female,
    props.data.sprites.versions["generation-iv"]["heartgold-soulsilver"]
      .back_shiny_female,
    props.data.sprites.versions["generation-iv"].platinum.front_default,
    props.data.sprites.versions["generation-iv"].platinum.back_default,
    props.data.sprites.versions["generation-iv"].platinum.front_female,
    props.data.sprites.versions["generation-iv"].platinum.back_female,
    props.data.sprites.versions["generation-iv"].platinum.front_shiny,
    props.data.sprites.versions["generation-iv"].platinum.back_shiny,
    props.data.sprites.versions["generation-iv"].platinum.front_shiny_female,
    props.data.sprites.versions["generation-iv"].platinum.back_shiny_female,
    props.data.sprites.versions["generation-v"]["black-white"].front_default,
    props.data.sprites.versions["generation-v"]["black-white"].back_default,
    props.data.sprites.versions["generation-v"]["black-white"].front_female,
    props.data.sprites.versions["generation-v"]["black-white"].back_female,
    props.data.sprites.versions["generation-v"]["black-white"].front_shiny,
    props.data.sprites.versions["generation-v"]["black-white"].back_shiny,
    props.data.sprites.versions["generation-v"]["black-white"]
      .front_shiny_female,
    props.data.sprites.versions["generation-v"]["black-white"]
      .back_shiny_female,
    props.data.sprites.versions["generation-v"]["black-white"].animated
      .front_default,
    props.data.sprites.versions["generation-v"]["black-white"].animated
      .back_default,
    props.data.sprites.versions["generation-v"]["black-white"].animated
      .front_female,
    props.data.sprites.versions["generation-v"]["black-white"].animated
      .back_female,
    props.data.sprites.versions["generation-v"]["black-white"].animated
      .front_shiny,
    props.data.sprites.versions["generation-v"]["black-white"].animated
      .back_shiny,
    props.data.sprites.versions["generation-v"]["black-white"].animated
      .front_shiny_female,
    props.data.sprites.versions["generation-v"]["black-white"].animated
      .back_shiny_female,
    props.data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
      .front_default,
    props.data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
      .front_female,
    props.data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
      .front_shiny,
    props.data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
      .front_shiny_female,
    props.data.sprites.versions["generation-vi"]["x-y"].front_default,
    props.data.sprites.versions["generation-vi"]["x-y"].front_female,
    props.data.sprites.versions["generation-vi"]["x-y"].front_shiny,
    props.data.sprites.versions["generation-vi"]["x-y"].front_shiny_female,
    props.data.sprites.versions["generation-vii"].icons.front_default,
    props.data.sprites.versions["generation-vii"].icons.front_female,
    props.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
      .front_default,
    props.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
      .front_female,
    props.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
      .front_shiny,
    props.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
      .front_shiny_female,
    props.data.sprites.versions["generation-viii"].icons.front_default,
    props.data.sprites.versions["generation-viii"].icons.front_female,
  ];

  // Chooses the first valid image of all possibilities
  let image = "";
  for (let img of images) {
    if (img) {
      image = img;
      break;
    }
  }

  return (
    <div className="pokemon-mini-card">
      <div className="pokemon-mini-card-sprite">
        <a href={`/pokemon/${name}`} alt={name}>
          <img src={image} alt={name} />
        </a>
      </div>
      <div className="pokemon-mini-card-id">
        <p>
          <a href={`/pokemon/${name}`} alt={name}>
            #{id}
          </a>
        </p>
      </div>
      <div className="pokemon-mini-card-name">
        <p>
          <a href={`/pokemon/${name}`} alt={name}>
            {name}
          </a>
        </p>
      </div>
    </div>
  );
}
