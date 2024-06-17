import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/Search";
import Pokemons from "./pages/Pokemons";
import Pokemon from "./pages/Pokemon";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import Ability, { Abilities } from "./pages/Ability";
import Berry, { Berries } from "./pages/Berry";
import Contest, { Contests } from "./pages/Contest";
import Encounter, { Encounters } from "./pages/Encounter";
import Evolution, { Evolutions } from "./pages/Evolution";
import Form, { Forms } from "./pages/Form";
import Game, { Games } from "./pages/Game";
import Item, { Items } from "./pages/Item";
import Location, { Locations } from "./pages/Location";
import Machine, { Machines } from "./pages/Machine";
import Move, { Moves } from "./pages/Move";
import Type, { Types } from "./pages/Type";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/search/:keyword" element={} /> */}
        <Route path="/pokemon" element={<Pokemons />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/abilities" element={<Abilities />} />
        <Route path="/ability/:id" element={<Ability />} />
        <Route path="/berries" element={<Berries />} />
        <Route path="/berry/:id" element={<Berry />} />
        <Route path="/contests" element={<Contests />} />
        <Route path="/contest/:id" element={<Contest />} />
        <Route path="/encounters" element={<Encounters />} />
        <Route path="/encounter/:id" element={<Encounter />} />
        <Route path="/evolutions" element={<Evolutions />} />
        <Route path="/evolution/:id" element={<Evolution />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/form/:id" element={<Form />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/items" element={<Items />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/machine/:id" element={<Machine />} />
        <Route path="/moves" element={<Moves />} />
        <Route path="/move/:id" element={<Move />} />
        <Route path="/types" element={<Types />} />
        <Route path="/type/:id" element={<Type />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
