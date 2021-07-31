import React from "react";

/* TODO
Add icons next to the fb/insta/youtube text
Fix the styling when you hover over the links
*/
const Footer = () => {
  return (
    <nav 
      class="navbar is-purple"
      role="navigation" 
    >
  <div class="navbar-brand">
    <div class="column">
      Contact Us!
    <a class="navbar-item" href="https://www.facebook.com/sparkuoft">
      {/* <img src={??} alt="Spark Design Club Facebook"/> */}
      Facebook
    </a>
    <a class="navbar-item" href="https://www.instagram.com/sparkdesignclub/">
      {/* <img src={??} alt="Spark Design Club Instagram"/> */}
      Instagram
    </a>
    <a class="navbar-item" href="https://www.facebook.com/sparkuoft">
      {/* <img src={??} alt="Spark Design Club Youtube"/> */}
      Youtube
    </a>
    </div>
  </div>
</nav>
  );
};

export default Footer;
