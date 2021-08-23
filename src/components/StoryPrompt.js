import React from "react";
import '../animated.css'

const StoryPrompt = ({ storyText, shown }) => {
  return (
    <p className="m-3 fade-in" style={{ opacity: shown ? 100 : 0 }}>{shown ? storyText : null}</p>
  );
};

export default StoryPrompt;