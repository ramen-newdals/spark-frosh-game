import React from "react";

const StoryChoice = ({storyChoice, renderNewStory, choiceIdx}) => {
  return (
    <li>
    <button 
      onClick={() => renderNewStory(choiceIdx)}
        className="button is-warning is-light m-1">
      {storyChoice}
    </button>
    </li>
  );
};

export default StoryChoice;