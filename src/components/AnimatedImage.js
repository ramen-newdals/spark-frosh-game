import React from "react";
import tempImage from "../images/broken-image.png";
import '../animated.css'

const AnimatedImage = (props) => {

  return (
    <figure class="is-inline-block has-text-centered fade-in" style={{ opacity: props.shown ? 1.0 : 0}}>
      <img class="m-4" alt="story prompt reference" style= {{height: '40vh'}}src={props.imgLink} />
    </figure>
  );
};

export default AnimatedImage;