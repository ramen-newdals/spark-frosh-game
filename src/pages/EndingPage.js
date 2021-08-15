import React from "react";
import { FishTankLink, PlayAgainButton, FishPreviewSliders, FishResult } from "../index.js";

const EndingPage = ({ name, froshGroup, fishType, restartGame }) => {
  return (
    <div class='columns is-centered'>
      <div class="column m-5 is-one-third block has-text-centered" id="storyTextBox">
        <h1 class="is-size-1 has-text-black is-spark-font">Game Over</h1>
        <h4 class="subtitle">Congratulations, {name}.</h4>
        <h4 class="subtitle">You earned {froshGroup} a {fishType}!</h4>
        <FishResult />
        <FishTankLink />
        <FishPreviewSliders/>
        <PlayAgainButton restartGame={restartGame} />
      </div>
    </div>
  );
};

export default EndingPage;