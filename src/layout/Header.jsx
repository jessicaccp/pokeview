import React from "react";
import Logo from "./HeaderLogo";
import Nav from "./HeaderNav";

function Header() {
  return (
    <>
      <header>
        <Logo />
        <Nav />
        {/* <Search /> */}
      </header>
    </>
  );
}

export default Header;
