import React from "react";

const StoryHistory = ({history}) => {

  return (
    history.map((text) =>  <p>{text}</p>)
  );
};

export default StoryHistory;