import React, {useEffect, useState} from "react";
import { CalculatePlayerScore } from "../backend/PlayerStats.js";

import { bettafish, pufferfish, unicornfish, clownfish, Image, progressBar } from "../index.js";

const FishResult = () => {

    const [fishIdx, setFishIdx] = useState(0);
    const [score, setScore] = useState({});
    const fishTypes = ["Betta fish", "Pufferfish", "Clownfish", "Unicorn fish"];
    const fishImages = [bettafish, pufferfish, clownfish, unicornfish];

    useEffect(() => {
        setScore(CalculatePlayerScore());
        const categories = [score.academic, score.health, score.social, score.ecr];
        setFishIdx(categories.indexOf(Math.max(...categories)));
    }, [score]);

    
    return (
        <div class="card mb-6 is-centered">
            <div class="card-content columns">
                <div class="column is-half">
                <progressBar />
                </div>
                <div class="column is-one-third">
                    <Image imgLink={fishImages[fishIdx]} />
                    <p class="is-size-4 is-spark-font">{fishTypes[fishIdx]}</p>
                    <p class="m-3 is-size-7">{/*fish pun*/}</p>
                </div>
            </div>
        </div>
    );
};

export default FishResult;

