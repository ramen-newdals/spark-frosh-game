import React, { useEffect, useState, useRef } from "react";
import { RequestFirstStoryFrame, RequestNextStoryFrame } from "../backend/StoryController.js";
<<<<<<< HEAD
import AnimatedImage from "../components/AnimatedImage.js";
import { Image, StoryChoice, StoryPrompt, progressBar} from "../index.js";
function format () {
  return Array.prototype.slice.call(arguments).join(' ')
}

const StoryPage = ({ name }) => {

  const [pictureLink, setPictureLink] = useState("");
  const [storyText, setStoryText] = useState("");
  const [storyChoices, setStoryChoices] = useState([]);
  const [storyOutcomes, setStoryOutcomes] = useState([]);
  const [storyOutcome, setStoryOutcome] = useState("");

  const [showPrompt, setShowPrompt] = useState(true);
  const [showChoices, setShowChoices] = useState(true);
  const [showOutcome, setShowOutcome] = useState(true);

  //initializer
  useEffect(() => {
    let firstStoryFrame = RequestFirstStoryFrame()
    setStoryText(firstStoryFrame.storyText + " Glad you're here, " + name + ".")
    setStoryChoices(firstStoryFrame.storyChoices)
    setPictureLink(firstStoryFrame.pictureLink)
    setStoryOutcomes(firstStoryFrame.storyOutcomes)
    console.log('initialized')
  }, [])

  function renderNewStory(choiceIdx) {

    setShowChoices(false);
    setShowPrompt(false);
    setShowOutcome(false)
    setStoryOutcome(storyOutcomes[choiceIdx])

    setTimeout(() => {
      setShowOutcome(true)
    }, 100)
    // Show the next prompt and choices
    setTimeout(() => {
      setShowPrompt(true);
    }, 500);

    setTimeout(() => {
      setShowChoices(true);
    }, 500);

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
        <StoryPrompt storyText={storyOutcome} shown={showOutcome} />
        <br></br>
        <StoryPrompt storyText={storyText} shown={showPrompt} />
        <AnimatedImage imgLink={pictureLink} shown={showPrompt} />
        <ul>
          {showChoices ?
            storyChoices.map((text, idx) => <StoryChoice
              choiceIdx={idx}
              storyChoice={text}
              renderNewStory={renderNewStory}
            />)
            : null}
        </ul>
<<<<<<< HEAD
		
        </div>
		
				<div class="column is-2">
			
		
			<p>Academics</p>
			<progress class="progress is-primary" value="15" max="100">15%</progress>
			<p>Social</p>
			<progress class="progress is-link" value="30" max="100">30%</progress>
			<p>Extra-curricular</p>
			<progress class="progress is-warning" value="75" max="100">75%</progress>
			<p>Health</p>
			<progress class="progress is-danger" value="90" max="100">90%</progress>
			
			
			</div>
		
=======
>>>>>>> 65fdda35bda2784d06f045f5f4510460526d7524
      </div>
    </div>
  );
};

export default StoryPage;
