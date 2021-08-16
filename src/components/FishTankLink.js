import React from "react";
// import fishTankPreview from "../index.js";
//TODO: insert a preview image of the fish tank?
//TODO: insert a working link to fish tank
import { brokenImage, Image } from "../index.js";

const FishTankLink = () => {

  return (
    <div class="card">
      <a href="https://master.d3fqojc7hrzjsu.amplifyapp.com/">
      <div class="card-header">
        <div class="card-header-title menu-label">
            Check out the F!rosh Fish Leaderboard
        </div>
      </div>
      <div class="card-content">
      <br/>
        <p>
          {/* <Image class="is-64x64" imgLink={brokenImage}/> */}
          ...
          (image preview goes here...
          this image should be square)
          ...
        </p>
        <br/>
        <br/>
        <br/>
      </div>
      </a>
    </div>
  );
};

export default FishTankLink;