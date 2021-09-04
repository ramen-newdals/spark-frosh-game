import React from "react";
import { StartButton, sparkLogoBlackText, Image, NameField, FroshGroupDropdown, FishTankLink, HowToPlay } from "../index.js";

const LandingPage = ({ startGame, setName, setFroshGroup, name, froshGroup }) => {

  return (
    <div class='columns is-desktop'>
      <div class="column is-one-quarter menu m-5">
        <HowToPlay />
      </div>
      <div class="column m-6 is-one-third block has-text-centered" id="storyTextBox">
        <h1 class="is-size-1 has-text-black is-spark-font">F!ROSH SIMULATOR</h1>
        <h4 class="subtitle">Choose your own adventure. Earn a F!rosh fish.</h4>
        <NameField
          setValue={setName}
          value={name}
        />
        <FroshGroupDropdown
          setValue={setFroshGroup}
          value={froshGroup}
        />
        <br /> {/* FIXME use styling to stack elements instead of using br */}
        <StartButton
          startGame={startGame}
          name={name}
          froshGroup={froshGroup}
        />
        <p class="is-size-6">(Takes about 3-5 mins)</p>
        <br />
        <p class="is-size-7 m-5">Disclaimer: Story progress may not save if you quit before finishing your adventure. All incidents portrayed in this game are ficticious and do not accurately represent real life scenarios.</p>
      </div>
      <div class="column m-5 is-one-quarter">
        <Image class="is-2by1" imgLink={sparkLogoBlackText} />
        <FishTankLink />
      </div>
    </div>
  );
};

export default LandingPage;
