import React, {useEffect, useState} from "react";
import { CalculatePlayerScore } from "../backend/PlayerStats.js";

import { Image, ProgressBar } from "../index.js";

const FishResult = ({fishType, fishImage}) => {
    
    return (
        <div class="card mb-6 is-centered">
            <div class="card-content columns">
                <div class="column is-half">
                <ProgressBar />
                </div>
                <div class="column is-one-third">
                    <Image imgLink={fishImage} />
                    <p class="is-size-4 is-spark-font">{fishType}</p>
                    <p class="m-3 is-size-7">{/*fish pun*/}</p>
                </div>
            </div>
        </div>
    );
};

export default FishResult;

