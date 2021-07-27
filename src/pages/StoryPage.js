import React, {useEffect, useState, useRef} from "react";
import { RequestFirstStoryFrame, RequestNextStoryFrame } from "../backend/StoryController.js";
import { Image, StoryChoice, StoryPrompt } from "../index.js";
function format () {
  return Array.prototype.slice.call(arguments).join(' ')
}

const StoryPage = () => {

  //TODO replace dummy values with the initial story text
  const [pictureLink, setPictureLink] = useState("");
  const [storyText, setStoryText] = useState("");
  const [storyChoices, setStoryChoices] = useState([]);
  const [storyOutcomes, setStoryOutcomes] = useState([]);
  const [storyOutcome, setStoryOutcome] = useState("");

  const [showPrompt, setShowPrompt] = useState(true);
  const [showChoices, setShowChoices] = useState(true);

  const storyTextBox = document.getElementById("storyTextBox");
  const firstUpdate = useRef(true);
  
  //initializer
  useEffect(()=>{
    let firstStoryFrame = RequestFirstStoryFrame()
    setStoryText(firstStoryFrame.storyText)
    setStoryChoices(firstStoryFrame.storyChoices)
    setPictureLink(firstStoryFrame.pictureLink)
    setStoryOutcomes(firstStoryFrame.storyOutcomes)
    console.log('initialized')
  }, [])

  //scrolls to the bottom of the story text box when new text gets added
  useEffect(() => {
    if (firstUpdate.current) { 
      //useEffect automatically runs on first render (aka before anything's on the screen)
      //this prevents the scrolling to cause an error during first render
      firstUpdate.current = false;
      return;
    }

    storyTextBox.scrollTop = storyTextBox.scrollHeight - storyTextBox.clientHeight
  }, [storyText]); //triggers when storyText changes

  function renderNewStory (choiceIdx) {

    setShowChoices(false);
    setShowPrompt(false);
    setStoryOutcome(storyOutcomes[choiceIdx])

    //show the next prompt and choices
    setTimeout(() => {
      setShowPrompt(true);
    }, 1000);

    setTimeout(() => {
      setShowChoices(true);
    }, 1000);

    var nextStory = RequestNextStoryFrame(choiceIdx)
    setStoryText(nextStory.storyText)
    setStoryChoices(nextStory.storyChoices)
    setPictureLink(nextStory.pictureLink)
    setStoryOutcomes(nextStory.storyOutcomes)

  }

  return (
      <div class='columns is-centered has-text-centered is-fullheight-100vh'>
        <div class="column m-5 is-half block is-fullheight" id="storyTextBox">
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
