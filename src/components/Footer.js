import React from "react";
import { ContactInfo } from "../index.js";

/* TODO
Add icons next to the fb/insta/youtube text
Fix the styling when you hover over the links
*/
const Footer = () => {
  return (
    <div class="columns footer is-purple has-text-dark">
      <ContactInfo />
      <div class="column is-half ml-5 content has-text-centered">
        Spark Design Club builds interactive electrical and mechanical displays around campus.
        Our displays are built with the help of fellow Sparkers (that's you!).
      </div>
    </div >
  );
};

export default Footer;
