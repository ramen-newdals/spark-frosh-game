import React, { useState, useEffect } from 'react';
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
  const [name, setName] = useState("Anonymous F!rosh");
  const [froshGroup, setFroshGroup] = useState("no F!rosh Group");

  const startGame = () => {
    setShowLandingPage(false);
    setShowStoryPage(true);
  }

  return (
    <>
      <Header />
      <div>
        {showLandingPage ?
          <LandingPage
            startGame={startGame}
            setName={setName}
            setFroshGroup={setFroshGroup}
          /> : null}
        {showStoryPage ? <StoryPage name={name}/> : null}
        {showEndingPage ? <EndingPage name={name} froshGroup={froshGroup} /> : null}
      </div>
      <Footer />
    </>
  );
}

export default App;
