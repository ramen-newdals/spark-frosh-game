import React from "react";
import {sparkLogoWhiteText}  from "../index.js";

const Header = () => {
  return (
  <nav 
      class="navbar is-purple has-shadow is-spaced"
      role="navigation" 
      aria-label="main navigation"
    >
    <a class="navbar-brand" href="https://spark.skule.ca/">
      <img src={sparkLogoWhiteText} alt="Spark Design Club"/>
    </a>
    <div class="navbar-end">
      <h1 class="is-size-1 has-text-white is-spark-font">
        F!rosh Simulator
      </h1>
    </div>
</nav>
  );
};

export default Header;
