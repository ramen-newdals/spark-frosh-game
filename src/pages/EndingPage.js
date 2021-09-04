import React, {useState, useEffect} from "react";
import { bettafish, clownfish, pufferfish, unicornfish, FishTankLink, PlayAgainButton, FishPreviewSliders, FishResult } from "../index.js";
import {InitFirestore} from '../backend/FirebaseLink.js';
import {CalculatePlayerScore} from "../backend/PlayerStats.js";

const EndingPage = ({ name, froshGroup, restartGame }) => {

    const [fishIdx, setFishIdx] = useState(0);
    const [score, setScore] = useState({});
    const fishTypes = ["Betta fish", "Pufferfish", "Clownfish", "Unicorn fish"];
    const fishImages = [bettafish, pufferfish, clownfish, unicornfish];

    const totalScore = 1; //placeholder until james sends the weighted total score

    useEffect(() => {
        setScore(CalculatePlayerScore());
        const categories = [score.academic, score.health, score.social, score.ecr];
        setFishIdx(categories.indexOf(Math.max(...categories)));
    }, [score]);

    useEffect(()=>{
      InitFirestore(froshGroup, totalScore)
    }, [])

  return (
    <div class='columns is-centered is-mobile'>
      <div class="column m-5 is-three-quarters block has-text-centered">
		<h1 class="is-size-1 has-text-black is-spark-font">Game Over</h1>
		<h4 class="subtitle">Congratulations, {name}.</h4>
		<h4 class="subtitle">A <strong>{fishTypes[fishIdx]}</strong> has joined {froshGroup}'s school of fish!</h4>
		<FishResult fishType={fishTypes[fishIdx]} fishImage={fishImages[fishIdx]}/>
        <div class='columns is-centered is-mobile'>
          <div class="column">
            <FishTankLink />
          </div>
          <div class="column">
            <FishPreviewSliders fishTypes={fishTypes} fishImages={fishImages}/>
          </div>
        </div>
        {/* <button onClick={() => InitFirestore(froshGroup, totalScore)} > do aws stuff </button> */}
        <PlayAgainButton restartGame={restartGame} />
      </div >
    </div >
  );
};

export default EndingPage;