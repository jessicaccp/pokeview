import React from "react";

export default function Search() {
  function handleInputChange(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <form role="search">
        <input
          type="search"
          name="search"
          id="header-search"
          placeholder="Search"
          aria-label="Search for pokémons"
          onChange={handleInputChange}
          //   onSubmit={handleInputSubmit}
        />
      </form>
    </>
  );
}
