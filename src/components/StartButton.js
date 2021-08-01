import React from "react";

const StartButton = ({startGame}) => {
  return (
    <button 
        onClick={() => startGame()}
        className="button is-success m-5 is-large">
      Let's Go
    </button>
  );
};

export default StartButton;