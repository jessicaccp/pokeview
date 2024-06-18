import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./Search";
import Pokemon, {
  PokemonColor,
  PokemonColors,
  PokemonForm,
  PokemonForms,
  PokemonHabitat,
  PokemonHabitats,
  PokemonShape,
  PokemonShapes,
  PokemonSpecies,
  PokemonSpeciesId,
  Pokemons,
} from "./Pokemon";
import NotFound from "./NotFound";
import Home from "./Home";

import Ability, { Abilities } from "./Ability";
import Berry, {
  Berries,
  BerriesFirmness,
  BerryFirmness,
  BerriesFlavor,
  BerryFlavor,
} from "./Berry";
import {
  ContestEffect,
  ContestsEffect,
  ContestType,
  ContestsType,
  SuperContestEffects,
  SuperContestEffect,
} from "./Contest";
import {
  EncounterCondition,
  EncounterConditionValue,
  EncounterMethod,
  EncountersMethod,
  EncounterConditions,
  EncounterConditionValues,
} from "./Encounter";
import {
  EvolutionChain,
  EvolutionTrigger,
  EvolutionsChain,
  EvolutionsTrigger,
} from "./Evolution";
import Item, {
  ItemAttribute,
  ItemAttributes,
  ItemCategories,
  ItemCategory,
  ItemFlingEffect,
  ItemFlingEffects,
  ItemPocket,
  ItemPockets,
  Items,
} from "./Item";
import Location, { LocationArea, LocationAreas, Locations } from "./Location";
import Machine, { Machines } from "./Machine";
import Move, {
  MoveAilment,
  MoveAilments,
  MoveBattleStyle,
  MoveBattleStyles,
  MoveCategories,
  MoveCategory,
  MoveDamageClass,
  MoveDamageClasses,
  MoveLearnMethod,
  MoveLearnMethods,
  MoveTarget,
  MoveTargets,
  Moves,
} from "./Move";
import Type, { Types } from "./Type";
import Characteristic, { Characteristics } from "./Characteristic";
import { EggGroup, EggGroups } from "./Egg";
import Gender, { Genders } from "./Gender";
import Generation, { Generations } from "./Generation";
import GrowthRate, { GrowthRates } from "./GrowthRate";
import Language, { Languages } from "./Language";
import Nature, { Natures } from "./Nature";
import PalParkArea, { PalParkAreas } from "./PalParkArea";
import PokeathlonStat, { PokeathlonStats } from "./Pokeathlon";
import Pokedex, { Pokedexes } from "./Pokedex";
import Region, { Regions } from "./Region";
import Stat, { Stats } from "./Stat";
import Version, { VersionGroup, VersionGroups, Versions } from "./Version";
import Lists from "./Lists";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/random" element={}/> */}
        <Route path="/lists" element={<Lists />} />
        {/* <Route path="/search/:keyword" element={} /> */}

        {/* api resources */}
        <Route path="/ability" element={<Abilities />} />
        <Route path="/ability/:id" element={<Ability />} />
        <Route path="/berry" element={<Berries />} />
        <Route path="/berry/:id" element={<Berry />} />
        <Route path="/berry-firmness/" element={<BerriesFirmness />} />
        <Route path="/berry-firmness/:id" element={<BerryFirmness />} />
        <Route path="/berry-flavor" element={<BerriesFlavor />} />
        <Route path="/berry-flavor/:id" element={<BerryFlavor />} />
        <Route path="/characteristic" element={<Characteristics />} />
        <Route path="/characteristic/:id" element={<Characteristic />} />
        <Route path="/contest-effect" element={<ContestsEffect />} />
        <Route path="/contest-effect/:id" element={<ContestEffect />} />
        <Route path="/contest-type" element={<ContestsType />} />
        <Route path="/contest-type/:id" element={<ContestType />} />
        <Route path="/egg-group" element={<EggGroups />} />
        <Route path="/egg-group/:id" element={<EggGroup />} />
        <Route path="/encounter-condition" element={<EncounterConditions />} />
        <Route
          path="/encounter-condition/:id"
          element={<EncounterCondition />}
        />
        <Route
          path="/encounter-condition-value"
          element={<EncounterConditionValues />}
        />
        <Route
          path="/encounter-condition-value/:id"
          element={<EncounterConditionValue />}
        />
        <Route path="/encounter-method" element={<EncountersMethod />} />
        <Route path="/encounter-method/:id" element={<EncounterMethod />} />
        <Route path="/evolution-chain" element={<EvolutionsChain />} />
        <Route path="/evolution-chain/:id" element={<EvolutionChain />} />
        <Route path="/evolution-trigger" element={<EvolutionsTrigger />} />
        <Route path="/evolution-trigger/:id" element={<EvolutionTrigger />} />
        <Route path="/gender" element={<Genders />} />
        <Route path="/gender/:id" element={<Gender />} />
        <Route path="/generation" element={<Generations />} />
        <Route path="/generation/:id" element={<Generation />} />
        <Route path="/growth-rate" element={<GrowthRates />} />
        <Route path="/growth-rate/:id" element={<GrowthRate />} />
        <Route path="/item" element={<Items />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/item-attribute" element={<ItemAttributes />} />
        <Route path="/item-attribute/:id" element={<ItemAttribute />} />
        <Route path="/item-category" element={<ItemCategories />} />
        <Route path="/item-category/:id" element={<ItemCategory />} />
        <Route path="/item-fling-effect" element={<ItemFlingEffects />} />
        <Route path="/item-fling-effect/:id" element={<ItemFlingEffect />} />
        <Route path="/item-pocket" element={<ItemPockets />} />
        <Route path="/item-pocket/:id" element={<ItemPocket />} />
        <Route path="/language" element={<Languages />} />
        <Route path="/language/:id" element={<Language />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/location-area" element={<LocationAreas />} />
        <Route path="/location-area/:id" element={<LocationArea />} />
        <Route path="/machine" element={<Machines />} />
        <Route path="/machine/:id" element={<Machine />} />
        <Route path="/move" element={<Moves />} />
        <Route path="/move/:id" element={<Move />} />
        <Route path="/move-ailment" element={<MoveAilments />} />
        <Route path="/move-ailment/:id" element={<MoveAilment />} />
        <Route path="/move-battle-style" element={<MoveBattleStyles />} />
        <Route path="/move-battle-style/:id" element={<MoveBattleStyle />} />
        <Route path="/move-category" element={<MoveCategories />} />
        <Route path="/move-category/:id" element={<MoveCategory />} />
        <Route path="/move-damage-class" element={<MoveDamageClasses />} />
        <Route path="/move-damage-class/:id" element={<MoveDamageClass />} />
        <Route path="/move-learn-method" element={<MoveLearnMethods />} />
        <Route path="/move-learn-method/:id" element={<MoveLearnMethod />} />
        <Route path="/move-target" element={<MoveTargets />} />
        <Route path="/move-target/:id" element={<MoveTarget />} />
        <Route path="/nature" element={<Natures />} />
        <Route path="/nature/:id" element={<Nature />} />
        <Route path="/pal-park-area" element={<PalParkAreas />} />
        <Route path="/pal-park-area/:id" element={<PalParkArea />} />
        <Route path="/pokeathlon-stat" element={<PokeathlonStats />} />
        <Route path="/pokeathlon-stat/:id" element={<PokeathlonStat />} />
        <Route path="/pokedex" element={<Pokedexes />} />
        <Route path="/pokedex/:id" element={<Pokedex />} />
        <Route path="/pokemon" element={<Pokemons />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/pokemon-color" element={<PokemonColors />} />
        <Route path="/pokemon-color/:id" element={<PokemonColor />} />
        <Route path="/pokemon-form" element={<PokemonForms />} />
        <Route path="/pokemon-form/:id" element={<PokemonForm />} />
        <Route path="/pokemon-habitat" element={<PokemonHabitats />} />
        <Route path="/pokemon-habitat/:id" element={<PokemonHabitat />} />
        <Route path="/pokemon-shape" element={<PokemonShapes />} />
        <Route path="/pokemon-shape/:id" element={<PokemonShape />} />
        <Route path="/pokemon-species" element={<PokemonSpecies />} />
        <Route path="/pokemon-species/:id" element={<PokemonSpeciesId />} />
        <Route path="/region" element={<Regions />} />
        <Route path="/region/:id" element={<Region />} />
        <Route path="/stat" element={<Stats />} />
        <Route path="/stat/:id" element={<Stat />} />
        <Route path="/super-contest-effect" element={<SuperContestEffects />} />
        <Route
          path="/super-contest-effect/:id"
          element={<SuperContestEffect />}
        />
        <Route path="/type" element={<Types />} />
        <Route path="/type/:id" element={<Type />} />
        <Route path="/version" element={<Versions />} />
        <Route path="/version/:id" element={<Version />} />
        <Route path="/version-group" element={<VersionGroups />} />
        <Route path="/version-group/:id" element={<VersionGroup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
