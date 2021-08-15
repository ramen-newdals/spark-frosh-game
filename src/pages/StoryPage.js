import React, {useEffect, useState, useRef} from "react";
import { RequestFirstStoryFrame, RequestNextStoryFrame } from "../backend/StoryController.js";
import { Image, StoryChoice, StoryPrompt } from "../index.js";
function format () {
  return Array.prototype.slice.call(arguments).join(' ')
}

const StoryPage = ({name}) => {

  const [pictureLink, setPictureLink] = useState("");
  const [storyText, setStoryText] = useState("");
  const [storyChoices, setStoryChoices] = useState([]);
  const [storyOutcomes, setStoryOutcomes] = useState([]);
  const [storyOutcome, setStoryOutcome] = useState("");

  const [showPrompt,  setShowPrompt] = useState(true);
  const [showChoices, setShowChoices] = useState(true);
  
  //initializer
  useEffect(()=>{
    let firstStoryFrame = RequestFirstStoryFrame()
    setStoryText(firstStoryFrame.storyText+" Glad you're here, "+name+".")
    setStoryChoices(firstStoryFrame.storyChoices)
    setPictureLink(firstStoryFrame.pictureLink)
    setStoryOutcomes(firstStoryFrame.storyOutcomes)
    console.log('initialized')
  }, [])

  function renderNewStory (choiceIdx) {

    setShowChoices(false);
    setShowPrompt(false);
    setStoryOutcome(storyOutcomes[choiceIdx])

    // Show the next prompt and choices
    setTimeout(() => {
      setShowPrompt(true);
    }, 1000);

    setTimeout(() => {
      setShowChoices(true);
    }, 1000);

    var nextStory = RequestNextStoryFrame(choiceIdx);
    setStoryText(nextStory.storyText);
    setStoryChoices(nextStory.storyChoices);
    setPictureLink(nextStory.pictureLink);
    setStoryOutcomes(nextStory.storyOutcomes);

    // Automatically scroll up to see outcome
    // Won't scroll if outcome is already visible
    window.scrollTo(0, 0);

  }

  return (
      <div class='columns is-centered has-text-centered is-100vh'>
        <div class="column m-5 is-half block">
            <StoryPrompt storyText={storyOutcome} />
            <br></br>
            <StoryPrompt storyText={storyText} />
        <Image imgLink={pictureLink}/>
        <ul>
        { showChoices ? 
         storyChoices.map((text, idx) =>  <StoryChoice 
         choiceIdx={idx} 
         storyChoice={text}
         renderNewStory={renderNewStory}
       />)
        : null }
        </ul>
        </div>
      </div>
  );
};

export default StoryPage;
