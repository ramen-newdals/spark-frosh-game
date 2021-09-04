// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDocs, getFirestore, increment, setDoc, updateDoc } from "firebase/firestore";
import { froshGroups } from "../components/FroshGroupDropdown"
import { CalculatePlayerScore } from "./PlayerStats";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const InitFirestore = async (froshGroup, fishType) => {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

  // const docRef = doc(db, "frosh-group-scores", froshGroup)
  // await updateDoc(docRef, {
  //     score: increment(1)
  // })

  // DATABASE FIRST INITIALIZATION ONLY

  // for (var i = 0; i < froshGroups.length; i++) {
  let group = froshGroup.replace('/', '');
  // let group = froshGroups[i].replace("/", "")
  // console.log(group)
  // await setDoc(doc(db, "frosh-group-scores", group), {
  //     score: 0,
  //     id: i
  // });

  // await setDoc(doc(db, "frosh-group-scores", group), {
  //     score: increment(1),
  //     id: i
  // });

  let scoreObj = CalculatePlayerScore();
  let score = scoreObj.academic + scoreObj.ecr+ scoreObj.social + scoreObj.health

  await updateDoc(doc(db, 'frosh-group-scores', group), {
    score: increment(score)
  })
  // console.log("Document written with ID: ", docRef.id);
  // }

}


export const FetchTopScores = async (count) => {

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
  return scoreList.slice(0,count)
}