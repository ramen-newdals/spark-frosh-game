import React from "react";
import { StartButton, sparkLogoBlackText, Image, TextField, FishTankLink, HowToPlay } from "../index.js";

const LandingPage = ({ startGame }) => {

  return (
    <div class='columns m-5 is-fullheight-100vh'>
      <div class="column is-one-quarter">
      </div>
      <div class="column m-5 is-one-third block has-text-centered is-fullheight" id="storyTextBox">
        <Image class="column m-5 is-one-third is-2by1" imgLink={sparkLogoBlackText} />
        <h1 class="title m-5">F!rosh Simulator</h1>
        <h4 class="subtitle">Choose your own adventure. Earn a F!rosh fish.</h4>
        <TextField
          label="Hey there, what's your name?"
          placeholder="Your Name" />
        <TextField
          label="What's your F!rosh group?"
          placeholder="(eg Alpha, Beta, etc)" />
        <StartButton startGame={startGame} />
        <p class="is-size-7 m-5">Warning: Story progress may not save if you quit before finishing your adventure</p>
      </div>
      <aside class="column is-narrow menu">
        <ul class="menu-list">
          <li class="m-5">
            <FishTankLink />
          </li>
          <li class="m-5">
            <HowToPlay />
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default LandingPage;
