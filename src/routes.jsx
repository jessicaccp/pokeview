import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Search";
import Pokemons from "./pages/Pokemons";
import Pokemon from "./pages/Pokemon";
import NotFound from "./pages/NotFound";
import NewHome from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/search" element={<Home />} />
        {/* <Route path="/search/:keyword" element={} /> */}
        <Route path="/pokemon" element={<Pokemons />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
