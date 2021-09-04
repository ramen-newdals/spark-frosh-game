import React, { useState } from 'react';
import './App.css';
import { ResetAllScores } from './backend/PlayerStats';
import { ResetTimeBucket } from './backend/StoryController';

import {
  Header,
  Footer,
  StoryPage,
  LandingPage,
  EndingPage
} from "./index.js";

const App = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showStoryPage, setShowStoryPage] = useState(false);
  const [showEndingPage, setShowEndingPage] = useState(false);
  const [name, setName] = useState("");
  const [froshGroup, setFroshGroup] = useState("");

  const startGame = () => {
    setShowLandingPage(false);
    setShowStoryPage(true);
    setShowEndingPage(false);
  }

  const endGame = () => {
    setShowEndingPage(true);
    setShowStoryPage(false);
    setShowLandingPage(false);
  }

  const restartGame = () => {
    setShowLandingPage(true);
    setShowEndingPage(false);
    setShowStoryPage(false);
    setName("");
    setFroshGroup("");

    ResetAllScores()
    ResetTimeBucket()


  }

  //TODO: define scoring system, includng fish type
  const insertFishTypeHere = "fish";

  return (
    <>
      <Header restartGame={restartGame} endGame={endGame} />
      <div>
        {showLandingPage ?
          <LandingPage
            startGame={startGame}
            setName={setName}
            setFroshGroup={setFroshGroup}
            name={name}
            froshGroup={froshGroup}
          /> : null}

        {showStoryPage ? <StoryPage name={name} endGame={endGame} /> : null}

        {showEndingPage ?
          <EndingPage
            name={name}
            froshGroup={froshGroup}
            fishType={insertFishTypeHere}
            restartGame={restartGame}
          /> : null}
      </div>
      <Footer />
    </>
  );
}

export default App;
