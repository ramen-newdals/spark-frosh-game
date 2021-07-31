import React from "react";
// import fishTankPreview from "../index.js";
//TODO: insert a preview image of the fish tank?
//TODO: insert a working link to fish tank
import { brokenImage, Image } from "../index.js";

const FishTankLink = () => {

  return (
    <div class="dropdown is-hoverable">
      <div class="dropdown-trigger">
        <a
          class="button is-warning is-light"
          href="https://master.d3fqojc7hrzjsu.amplifyapp.com/"
          aria-haspopup="true"
          aria-controls="dropdown-menu">
          F!rosh Fish Leaderboard
        </a>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <p class="m-3">
            {/* <Image class="is-64x64" imgLink={brokenImage}/> */}
            (image preview goes here)
          </p>
        </div>
      </div>
    </div>

  );
};

export default FishTankLink;