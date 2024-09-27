import Logo from "./HeaderLogo";
import Nav from "./HeaderNav";

export default function Header() {
  return (
    <>
      <header>
        <div id="header-container">
          <Logo />
          <Nav />
        </div>
      </header>
    </>
  );
}
