export default function Lists() {
  const lists = [
    { title: "Ability", path: "/pokeview/ability" },
    { title: "Berry", path: "/pokeview/berry" },
    { title: "Berry Firmness", path: "/pokeview/berry-firmness" },
    { title: "Berry Flavor", path: "/pokeview/berry-flavor" },
    { title: "Characteristic", path: "/pokeview/characteristic" },
    { title: "Contest Effect", path: "/pokeview/contest-effect" },
    { title: "Contest Type", path: "/pokeview/contest-type" },
    { title: "Egg Group", path: "/pokeview/egg-group" },
    { title: "Encounter Condition", path: "/pokeview/encounter-condition" },
    {
      title: "Encounter Condition Value",
      path: "/pokeview/encounter-condition-value",
    },
    { title: "Encounter Method", path: "/pokeview/encounter-method" },
    { title: "Evolution Chain", path: "/pokeview/evolution-chain" },
    { title: "Evolution Trigger", path: "/pokeview/evolution-trigger" },
    { title: "Gender", path: "/pokeview/gender" },
    { title: "Generation", path: "/pokeview/generation" },
    { title: "Growth Rate", path: "/pokeview/growth-rate" },
    { title: "Item", path: "/pokeview/item" },
    { title: "Item Attribute", path: "/pokeview/item-attribute" },
    { title: "Item Category", path: "/pokeview/item-category" },
    { title: "Item Fling Effect", path: "/pokeview/item-fling-effect" },
    { title: "Item Pocket", path: "/pokeview/item-pocket" },
    { title: "Language", path: "/pokeview/language" },
    { title: "Location", path: "/pokeview/location" },
    { title: "Location Area", path: "/pokeview/location-area" },
    { title: "Machine", path: "/pokeview/machine" },
    { title: "Move", path: "/pokeview/move" },
    { title: "Move Ailment", path: "/pokeview/move-ailment" },
    { title: "Move Battle Style", path: "/pokeview/move-battle-style" },
    { title: "Move Category", path: "/pokeview/move-category" },
    { title: "Move Damage Class", path: "/pokeview/move-damage-class" },
    { title: "Move Learn Method", path: "/pokeview/move-learn-method" },
    { title: "Move Target", path: "/pokeview/move-target" },
    { title: "Nature", path: "/pokeview/nature" },
    { title: "Pal Park Area", path: "/pokeview/pal-park-area" },
    { title: "Pokeathlon Stat", path: "/pokeview/pokeathlon-stat" },
    { title: "Pokedex", path: "/pokeview/pokedex" },
    { title: "Pokemon", path: "/pokeview/pokemon" },
    { title: "Pokemon Color", path: "/pokeview/pokemon-color" },
    { title: "Pokemon Form", path: "/pokeview/pokemon-form" },
    { title: "Pokemon Habitat", path: "/pokeview/pokemon-habitat" },
    { title: "Pokemon Shape", path: "/pokeview/pokemon-shape" },
    { title: "Pokemon Species", path: "/pokeview/pokemon-species" },
    { title: "Region", path: "/pokeview/region" },
    { title: "Stat", path: "/pokeview/stat" },
    { title: "Super Contest Effect", path: "/pokeview/super-contest-effect" },
    { title: "Type", path: "/pokeview/type" },
    { title: "Version", path: "/pokeview/version" },
    { title: "Version Group", path: "/pokeview/version-group" },
  ];

  return (
    <div id="lists">
      <ul>
        {lists.map((item, key) => (
          <li key={key}>
            <a href={item.path} alt={item.title}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
