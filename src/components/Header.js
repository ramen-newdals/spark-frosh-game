import React from "react";
import {sparkLogoSmall}  from "../index.js";

const Header = ({endGame, restartGame}) => {
  return (
  <nav 
      class="navbar is-purple has-shadow is-spaced"
      role="navigation" 
      aria-label="main navigation"
    >
    <a class="navbar-brand" href="https://spark.skule.ca/" target='_blank' rel='noreferrer'>
      <img src={sparkLogoSmall} alt="Spark Design Club"/>
    </a>
    <button class="button" onClick={() => endGame()}>Ending page (for debugging)</button>
    <div class="navbar-end">
        <a class="is-size-2 has-text-white is-spark-font" onClick={() => restartGame()}>
        Home
        </a>
    </div>
</nav>
  );
};

export default Header;
