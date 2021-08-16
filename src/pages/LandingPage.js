import React from "react";
import { StartButton, sparkLogoBlackText, Image, NameField, FroshGroupDropdown, FishTankLink, HowToPlay, sparkLogoBlackText } from "../index.js";

const LandingPage = ({ startGame, setName, setFroshGroup }) => {

  return (
    <div class='columns is-desktop'>
      <div class="column is-one-quarter menu m-5">
        <HowToPlay />
      </div>
      <div class="column m-6 is-one-third block has-text-centered" id="storyTextBox">
        <h1 class="is-size-1 has-text-black is-spark-font">F!rosh Simulator</h1>
        <h4 class="subtitle">Choose your own adventure. Earn a F!rosh fish.</h4>
        <NameField
          setValue={setName} />
        <FroshGroupDropdown
          setValue={setFroshGroup} />
        <br/> {/* FIXME use styling to stack elements instead of using br */}
        <StartButton startGame={startGame} />
        <br/>
        <p class="is-size-7 m-5">Warning: Story progress may not save if you quit before finishing your adventure</p>
      </div>
      <div class="column m-5 is-one-quarter">
        <Image class="is-2by1" imgLink={sparkLogoBlackText} />
        <FishTankLink />
      </div>
    </div>
  );
};

export default LandingPage;
