import React from "react";
import {sparkLogoWhiteText, Image}  from "../index.js";

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
</nav>
  );
};

export default Header;
