import React from "react";
import { StartButton, sparkLogoBlackText, Image, TextField, FishTankLink, HowToPlay } from "../index.js";

const LandingPage = ({startGame}) => {

  return (
    <div class='columns m-5 is-centered has-text-centered is-fullheight-100vh'>
      <div class="column is-one-fifth">
        <FishTankLink />
      </div>
      <div class="column m-5 is-one-third block is-fullheight" id="storyTextBox">
        <Image class="column m-5 is-one-third is-2by1" imgLink={sparkLogoBlackText} />
        <h1 class="title m-5">F!rosh Simulator</h1>
        <TextField
          label="Hey there, what's your name?"
          placeholder="Your Name" />
        <TextField
          label="What's your F!rosh group?"
          placeholder="(eg Alpha, Beta, etc)" />
        <StartButton startGame={startGame}/>
        <p class="is-size-7">Warning: Story progress may not save if you quit before finishing your adventure</p>
      </div>
      <div class="column m-5 is-narrow">
        <HowToPlay />
      </div>
    </div>
  );
};

export default LandingPage;
