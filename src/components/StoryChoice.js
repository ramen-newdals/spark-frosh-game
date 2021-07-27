import React from "react";

const StoryChoice = ({storyChoice, renderNewStory, choiceIdx}) => {
  return (
    <li>
    <button 
      onClick={() => renderNewStory(choiceIdx)}
        className="button is-dark m-3">
      {storyChoice}
    </button>
    </li>
  );
};

export default StoryChoice;