import React, {useEffect, useState, useRef} from "react";
import { RequestFirstStoryFrame, RequestNextStoryFrame } from "../backend/StoryController.js";
import { Image, StoryChoice, StoryHistory, StoryPrompt, StoryFrame } from "../index.js";
function format () {
  return Array.prototype.slice.call(arguments).join(' ')
}

const StoryPage = () => {

  //TODO replace dummy values with the initial story text
  const [pictureLink, setPictureLink] = useState("");
  const [storyText, setStoryText] = useState('you are hungry, what do you do');
  const [storyChoices, setStoryChoices] = useState(['eat food', 'starve', 'take a bite of your friend\'s food']);
  const [storyOutcomes, setStoryOutcomes] = useState(['you feel satiated.', 'you faint.', 'your friend jerks their sandwich away and glares at you.']);
  const [storyOutcome, setStoryOutcome] = useState("");
  const [storyHistory, setStoryHistory] = useState(['']);

  const [showPrompt,  setShowPrompt] = useState(true);
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

    //TODO uncomment these lines when the backend function is complete
    //newStory = updateStoryChoice(choiceIdx);
    
    // setPictureLink(newStory.pictureLink);
    // setStoryText(newStory.storyText);
    // setStoryChoices(newStory.storyChoices);

    //clear the screen briefly before showing outcome
    // setShowOutcome(false)
    setShowChoices(false);
    setShowPrompt(false);

    //show outcome of your action and append it to the rest of the story
    //FIXME "storyOutcomes[choiceIdx], storyText" causes a race condition within
    //setState. need to add both items in the correct order.
    setStoryHistory([...storyHistory, storyOutcomes[choiceIdx], storyText]);

    //TODO: delete this switch case. hardcoded for demo purposes
    
    // switch(choiceIdx) {
    //   case 0: 
    //     setStoryOutcome(storyOutcomes[0]);
    //     setStoryText("a few hours pass and you get hungry again...");
    //     break;
    //   case 1:
    //     setStoryOutcome(storyOutcomes[1]);
    //     setStoryText("you wake up on the floor a few seconds later. now what to do...");
    //     break;
    //   case 2:
    //     setStoryOutcome(storyOutcomes[2]);
    //     setStoryText("you still feel hungry...");
    //     break;
    // }

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
      <div class='column is-vcentered is-flex-direction-column is-fullheight-100vh'>
        <div class="story-text-box" id="storyTextBox">
            {/* <StoryHistory history={storyHistory} /> */}
            <StoryPrompt storyText={storyOutcome} />
            <br></br>
            <StoryPrompt storyText={storyText} />
        </div>
        <Image imgLink={pictureLink}/>
        { showChoices ? 
         storyChoices.map((text, idx) =>  <StoryChoice 
         choiceIdx={idx} 
         storyChoice={text}
         renderNewStory={renderNewStory}
       />)
        : null }
        <p style={{fontSize:10}}>(disclaimer: this is a dummy story that we will delete after the database has real stories in it)</p>
      </div>
  );
};

export default StoryPage;
