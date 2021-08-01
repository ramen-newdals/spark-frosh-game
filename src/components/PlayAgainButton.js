import React from "react";

const PlayAgainButton = ({restartGame}) => {
  return (
    <button 
        onClick={() => restartGame()}
        className="button is-success m-5 is-large">
      Play Again
    </button>
  );
};

export default PlayAgainButton;