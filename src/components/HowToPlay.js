import React from "react";

const HowToPlay = () => {

  const info = " \
  Choose a path through your first year of UofT Engineering. \
  Depending on your final score, you might earn your F!rosh group \
  a fish to display on the leaderboard. The choice is yours!";

  return (
    <div class="card">
      <div class="card-header">
        <div class="card-header-title menu-label is-light is-warning">
          How to Play
        </div>
      </div>
      <div class="card-content">
        <p class="m-3">
          {info}
        </p>
      </div>
    </div>
  );
};

export default HowToPlay;

