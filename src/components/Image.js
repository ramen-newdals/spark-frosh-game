import React from "react";
import tempImage from "../images/broken-image.png";

const Image = (props) => {

  return (
    <figure class="is-inline-block has-text-centered">
    <img class="m-3" src={props.imgLink}/>
    </figure>
  );
};

export default Image;