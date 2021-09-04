import React, { useEffect, useState } from "react";
import { CalculatePlayerScore, GetFinalScore } from "../backend/PlayerStats.js";

import { Image, ProgressBar } from "../index.js";

const FishResult = ({ fishType, fishImage }) => {

  return (
    <div class="card mb-6 is-centered">
      <div class="card-content flex ">
        <Image imgLink={fishImage} />
        <p class="is-size-4 is-spark-font">{fishType}</p>
        <p class="m-3 is-size-7 py-0">{/*fish pun*/}</p>
        <p>
          FINAL SCORE: {GetFinalScore()}
        </p>
        <progress class="progress is-primary" value={60 + GetFinalScore()} max="120">15%</progress>

      </div>
    </div>
  );
};

export default FishResult;

