import React from "react";
import {sparkLogoWhiteText}  from "../index.js";

const Header = ({endGame, restartGame}) => {
  return (
  <nav 
      class="navbar is-purple has-shadow is-spaced"
      role="navigation" 
      aria-label="main navigation"
    >
    <a class="navbar-brand" href="https://spark.skule.ca/">
      <img src={sparkLogoWhiteText} alt="Spark Design Club"/>
    </a>
    <button class="button" onClick={() => endGame()}>Ending page (for debugging)</button>
    <div class="navbar-end">
        <a class="is-size-1 has-text-white is-spark-font" onClick={() => restartGame()}>
        F!rosh Simulator
        </a>
    </div>
</nav>
  );
};

export default Header;
