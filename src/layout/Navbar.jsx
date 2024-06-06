import React from "react";
import SearchBar from "../components/SearchBar";
import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "about" },
    // { title: 'Data', url: 'data' },
    { title: "Credits", url: "credits" },
  ];

  const linksList = links.map((link, key) => (
    <li key={key}>
      <NavLink to={link.url}>{link.title}</NavLink>
    </li>
  ));

  return (
    <div id="navbar">
      <div id="navbar-left">
        <div id="logo"></div>
        <div id="title">PokéView</div>
        <div id="subtitle">An interface for PokéAPI</div>
      </div>
      <div id="navbar-right">
        <nav>
          <ul>{linksList}</ul>
        </nav>
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
