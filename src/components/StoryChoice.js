import React from "react";

const StoryChoice = ({storyChoice, renderNewStory, choiceIdx}) => {
  return (
    <button onClick={() => renderNewStory(choiceIdx)}>
      {storyChoice}
    </button>
  );
};

export default StoryChoice;