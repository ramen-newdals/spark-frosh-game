import React from "react";
// import fishTankPreview from "../index.js";
//TODO: insert a preview image of the fish tank
//TODO: insert a link to fish tank
import {brokenImage, Image} from "../index.js";

const FishTankLink = () => {

  return (
    <>
    <a class="is-centered" href="https://master.d3fqojc7hrzjsu.amplifyapp.com/">
        <Image imgLink={brokenImage}/>
    </a>
    <p>Checkout the Fish Tank here!</p>  
    </>
  );
  };

  export default FishTankLink;