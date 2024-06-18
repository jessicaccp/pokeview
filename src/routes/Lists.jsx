import React from "react";

export default function Lists() {
  const lists = [
    { title: "Ability", path: "/ability" },
    { title: "Berry", path: "/berry" },
    { title: "Berry Firmness", path: "/berry-firmness" },
    { title: "Berry Flavor", path: "/berry-flavor" },
    { title: "Characteristic", path: "/characteristic" },
    { title: "Contest Effect", path: "/contest-effect" },
    { title: "Contest Type", path: "/contest-type" },
    { title: "Egg Group", path: "/egg-group" },
    { title: "Encounter Condition", path: "/encounter-condition" },
    { title: "Encounter Condition Value", path: "/encounter-condition-value" },
    { title: "Encounter Method", path: "/encounter-method" },
    { title: "Evolution Chain", path: "/evolution-chain" },
    { title: "Evolution Trigger", path: "/evolution-trigger" },
    { title: "Gender", path: "/gender" },
    { title: "Generation", path: "/generation" },
    { title: "Growth Rate", path: "/growth-rate" },
    { title: "Item", path: "/item" },
    { title: "Item Attribute", path: "/item-attribute" },
    { title: "Item Category", path: "/item-category" },
    { title: "Item Fling Effect", path: "/item-fling-effect" },
    { title: "Item Pocket", path: "/item-pocket" },
    { title: "Language", path: "/language" },
    { title: "Location", path: "/location" },
    { title: "Location Area", path: "/location-area" },
    { title: "Machine", path: "/machine" },
    { title: "Move", path: "/move" },
    { title: "Move Ailment", path: "/move-ailment" },
    { title: "Move Battle Style", path: "/move-battle-style" },
    { title: "Move Category", path: "/move-category" },
    { title: "Move Damage Class", path: "/move-damage-class" },
    { title: "Move Learn Method", path: "/move-learn-method" },
    { title: "Move Target", path: "/move-target" },
    { title: "Nature", path: "/nature" },
    { title: "Pal Park Area", path: "/pal-park-area" },
    { title: "Pokeathlon Stat", path: "/pokeathlon-stat" },
    { title: "Pokedex", path: "/pokedex" },
    { title: "Pokemon", path: "/pokemon" },
    { title: "Pokemon Color", path: "/pokemon-color" },
    { title: "Pokemon Form", path: "/pokemon-form" },
    { title: "Pokemon Habitat", path: "/pokemon-habitat" },
    { title: "Pokemon Shape", path: "/pokemon-shape" },
    { title: "Pokemon Species", path: "/pokemon-species" },
    { title: "Region", path: "/region" },
    { title: "Stat", path: "/stat" },
    { title: "Super Contest Effect", path: "/super-contest-effect" },
    { title: "Type", path: "/type" },
    { title: "Version", path: "/version" },
    { title: "Version Group", path: "/version-group" },
  ];
  return (
    <div id="lists">
      {lists.map((item, key) => (
        <li key={key}>
          <a href={item.path} alt={item.title}>
            {item.title}
          </a>
        </li>
      ))}
    </div>
  );
}
