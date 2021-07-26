import React from "react";
import sparkLogo from "../images/SparkLogoWhiteText.png";
/* TODO
Make the header bigger so you can read the spark logo
*/
const Header = () => {
  return (
  <nav 
      class="navbar is-dark has-shadow is-spaced"
      height="0.2vh"
      role="navigation" 
      aria-label="main navigation"
    >
  <div class="navbar-brand">
    <a class="navbar-item" href="https://spark.skule.ca/">
      <img src={sparkLogo} alt="Spark Design Club"/>
    </a>
  </div>
</nav>
  );
};

export default Header;
