import React from "react";

const HowToPlay = () => {

  const info = " \
  Navigate your way through your first year of UofT Engineering in this \
  casual text-based adventure game. Depending on your final score, \
  you can earn a fish for your F!rosh Group in the F!rosh Fish Tank. The choice is yours!";

  return (
    <button class="button is-success" data-tooltip={info}>How to Play</button>
  );
};

export default HowToPlay;

