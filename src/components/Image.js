import React from "react";
import tempImage from "../images/broken-image.png";

const Image = (props) => {

  return (
    <div class="columns is-centered">
      <div class="column is-one-quarter">
        <img class="image" src={tempImage}/>
      </div>
    </div>
  );
};

export default Image;