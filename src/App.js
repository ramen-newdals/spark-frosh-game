import React, { useState } from 'react';
import './App.css';

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
  const [name, setName] = useState("<name>");
  const [froshGroup, setFroshGroup] = useState("<groupName>");

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
    setName("<name>");
    setFroshGroup("<groupName>");
  }

  //TODO: define scoring system, includng fish type
  const insertFishTypeHere = "<fish>";

  return (
    <>
      <Header restartGame={restartGame} endGame={endGame} />
      <div>
        {showLandingPage ?
          <LandingPage
            startGame={startGame}
            setName={setName}
            setFroshGroup={setFroshGroup}
          /> : null}

        {showStoryPage ? <StoryPage name={name} /> : null}

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
