import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isObjEmpty } from "../utils";

export default function Berry() {
  return (
    <div id="berry">
      <div id="berry-id">#{berryData.id}</div>
      <div id="berry-name">
        <h2>{berryData.name}</h2>
      </div>
      <div id="berry-growth-time">
        <h3>Growth time</h3>
        {berryData.growth_time}
      </div>
      <div id="berry-max-harvest">
        <h3>Max harvest</h3>
        {berryData.max_harvest}
      </div>
      <div id="berry-natural-gift-power">
        <h3>Natural gift power</h3>
        {berryData.natural_gift_power}
      </div>
      <div id="berry-size">
        <h3>Size</h3>
        {berryData.size}
      </div>
      <div id="berry-smoothness">
        <h3>Smoothness</h3>
        {berryData.smoothness}
      </div>
      <div id="berry-soil-dryness">
        <h3>Soil dryness</h3>
        {berryData.soil_dryness}
      </div>
      <div id="berry-firmness">
        <h3>Firmness</h3>
        <a
          href={`/berry-firmness/${berryData.firmness.name}`}
          alt={berryData.firmness.name}
        >
          {berryData.firmness.name}
        </a>
      </div>
      <div id="berry-flavors">
        <h3>Flavors</h3>
        {berryData.flavors.map((flavor, key) => (
          <li key={key}>
            <a
              href={`/berry-flavor/${flavor.flavor.name}`}
              alt={flavor.flavor.name}
            >
              {flavor.flavor.name}
            </a>
            <h4>Potency</h4>
            {flavor.potency}
          </li>
        ))}
      </div>
      <div id="berry-item">
        <h3>Item</h3>
        <a href={`/item/${berryData.item.name}`} alt={berryData.item.name}>
          {berryData.item.name}
        </a>
      </div>
      <div id="berry-natural-gift-type">
        <h3>Natural gift type</h3>
        <a
          href={`/type/${berryData.natural_gift_type.name}`}
          alt={berryData.natural_gift_type.name}
        >
          {berryData.natural_gift_type.name}
        </a>
      </div>
    </div>
  );
}

export function BerryFirmness() {
  return (
    <div id="berry-firmness">
      <div id="berry-firmness-berries">
        <h3>Berries</h3>
        {berryFirmnessData.berries.map((berry, key) => (
          <li key={key}>
            <a href={`/berry/${berry.name}`} alt={berry.name}>
              {berry.name}
            </a>
          </li>
        ))}
      </div>
      <div id="berry-firmness-id">#{berryFirmnessData.id}</div>
      <div id="berry-firmness-name">
        <h2>{berryFirmnessData.name}</h2>
      </div>
      <div id="berry-firmness-names">
        <h3>Names</h3>
        {berryFirmnessData.names.map((name, key) => (
          <li key={key}>
            <a
              href={`/language/${name.language.name}`}
              alt={name.language.name}
            >
              {name.language.name}
            </a>{" "}
            - {name.name}
          </li>
        ))}
      </div>
    </div>
  );
}

export function BerryFlavor() {
  return (
    <div id="berry-flavor">
      <div id="berry-flavor-berries">
        <h3>Berries</h3>
        {berryFlavorData.berries.map((berry, key) => (
          <li key={key}>
            <a href={`/berry/${berry.berry.name}`} alt={berry.berry.name}>
              {berry.berry.name}
            </a>
            <h4>Potency</h4>
            {berry.potency}
          </li>
        ))}
      </div>
      <div id="berry-flavor-contest-type">
        <h3>Contest type</h3>
        <a
          href={`/contest-type/${berryFlavorData.contest_type.name}`}
          alt={berryFlavorData.contest_type.name}
        >
          {berryFlavorData.contest_type.name}
        </a>
      </div>
      <div id="berry-flavor-id">#{berryFlavorData.id}</div>
      <div id="berry-flavor-name">
        <h2>{berryFlavorData.name}</h2>
      </div>
      <div id="berry-flavor-names">
        {berryFlavorData.names.map((berry, key) => (
          <li key={key}>
            <a
              href={`/language/${berry.language.name}`}
              alt={berry.language.name}
            >
              {berry.language.name}
            </a>{" "}
            - {berry.name}
          </li>
        ))}
      </div>
    </div>
  );
}
