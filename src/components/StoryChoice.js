import React from "react";

const StoryChoice = ({storyChoice, renderNewStory, choiceIdx}) => {
  return (
    <button 
      onClick={() => renderNewStory(choiceIdx)}
        className="button is-dark m-3">
      {storyChoice}
    </button>
  );
};

export default StoryChoice;