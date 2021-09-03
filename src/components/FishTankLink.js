import React, {useEffect, useState} from "react";
//TODO: insert a preview image of the fish tank?
import { brokenImage, Image, boidPreview } from "../index.js";

const FishTankLink = () => {

    const [topFiveScores, setTopFiveScores] = useState([]);

    useEffect(() => {
        //TODO insert real scores from firebase
        //setTopFiveScores(); 
    }, []);

  return (
    <div class="card">
      <a href="https://master.d3fqojc7hrzjsu.amplifyapp.com/">
      <div class="card-header">
        <div class="card-header-title menu-label">
            Checkout the F!rosh Fish Leaderboard
        </div>
      </div>
      <div class="card-content has-text-centered">
        <ul class="menu-list has-text-dark is-spark-font is-size-4">
            {topFiveScores.map((froshGroup, idx) => <li>{`${idx+1}. ${froshGroup}`}</li>)}
        </ul>
        <br/>
        <Image imgLink={boidPreview}/>
      </div>
      </a>
    </div>
  );
};

export default FishTankLink;