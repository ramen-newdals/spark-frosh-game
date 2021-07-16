import React from "react";

const Image = (props) => {
  return (
    // <p>Formatting images is easier if we put in a React component, like this one.</p>
    <img src={props.src} alt='random'></img>
  );
};

export default Image;