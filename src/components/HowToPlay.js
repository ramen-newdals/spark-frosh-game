import React from "react";

const HowToPlay = () => {

  const info = " \
  Choose a path through your first year of UofT Engineering. \
  Depending on your final score, you might earn your F!rosh group \
  a fish to display on the leaderboard. The choice is yours!";

  return (
    <div class="dropdown is-hoverable">
      <div class="dropdown-trigger">
      <button class="button is-warning is-light" aria-haspopup="true" aria-controls="dropdown-menu">How to Play</button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <p class="m-3 has-text-centered">
            {info}
            </p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;

