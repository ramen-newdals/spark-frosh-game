import React, { useEffect, useState } from "react";
import { FetchTopScores } from "../backend/FirebaseLink.js";
import { addDoc, collection, doc, getDocs, getFirestore, increment, setDoc, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

//TODO: insert a preview image of the fish tank?
import { brokenImage, Image, boidPreview } from "../index.js";

const FishTankLink = () => {

  const [topFiveScores, setTopFiveScores] = useState(["-", "-", "-", "-", "-"]);

  useEffect(() => {
    const FetchTopScores = async (count) => {

      const firebaseApp = initializeApp({
        apiKey: "AIzaSyAjJwDS2o1eFY11t9IeExNHfSaaJkd16BA",
        authDomain: "spark-frosh-game.firebaseapp.com",
        projectId: "spark-frosh-game",
        storageBucket: "spark-frosh-game.appspot.com",
        messagingSenderId: "96530212396",
        appId: "1:96530212396:web:1dc8a39de9685b8c601389",
        measurementId: "G-Y1YPD5DFZD"
      });

      const db = getFirestore();

      const docRef = doc(db, "frosh-group-scores", 'Beta')
      const docSnap = await getDocs(collection(db, 'frosh-group-scores'))
      var scoreList = []
      docSnap.forEach(doc => {
        console.log(doc.id, ": ", doc.data())
        scoreList.push({ id: doc.id, score: doc.data().score })
      })
      scoreList.sort((a, b) => { return (b.score - a.score) })
      setTopFiveScores(scoreList.slice(0, count))
    }

    FetchTopScores(5)
  }, []);

  return (
    <div class="card">
        <div class="card-header">
          <div class="card-header-title menu-label">
            F!rosh Fish Leaderboard
          </div>
        </div>

        <div class="card-content has-text-dark has-text-centered">
          <p class="is-size-3 is-spark-font">LEADERBOARD</p>
          <ul class="menu-list has-text-dark is-spark-font is-size-4">
            {topFiveScores.map((froshGroup, idx) => <li>{`${idx + 1}. ${froshGroup.id}    (${froshGroup.score})`}</li>)}
          </ul>
        </div>
    </div>
  );
};

export default FishTankLink;