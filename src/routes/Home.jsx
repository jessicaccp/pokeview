import { useEffect, useState } from "react";

export default function Home() {
  const [isButtonClick, setIsButtonClick] = useState(false);

  useEffect(() => {
    if (isButtonClick) {
      const pokeball = document.getElementById("home-pokeball");
      const shadow = document.getElementById("home-pokeball-shadow");
      pokeball.style.backgroundImage = "url(open-pokeball.png)";
      shadow.style.display = "block";

      setTimeout(function () {
        document.location.href = "/search";
      }, 1000);
    }
  }, [isButtonClick]);

  function HandleButtonClick(event) {
    setIsButtonClick(true);
  }

  return (
    <div id="home-page">
      <div id="home-title-container">
        <h2 id="home-title">Pokéview</h2>
      </div>
      <div id="home-pokeball"></div>
      <div id="home-pokeball-shadow"></div>
      <form>
        <input
          id="home-button"
          type="button"
          value="Start your adventure!"
          onClick={HandleButtonClick}
        />
      </form>
    </div>
  );
}
