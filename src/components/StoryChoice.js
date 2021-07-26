import React from "react";

const StoryChoice = ({storyChoice, renderNewStory, choiceIdx}) => {
  return (
    <button 
      onClick={() => renderNewStory(choiceIdx)}
        class="button is-dark">
      {storyChoice}
    </button>
  );
};

export default StoryChoice;