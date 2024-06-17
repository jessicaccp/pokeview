import React, { useEffect, useState } from "react";

export default function NewHome() {
  const [isButtonClick, setIsButtonClick] = useState(false);

  useEffect(() => {
    if (isButtonClick) {
      const pokeball = document.getElementById("home-pokeball");
      pokeball.style.backgroundImage = "url(open-pokeball.png)";
      setTimeout(function () {
        document.location.href = "/search";
      }, 1500);
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
