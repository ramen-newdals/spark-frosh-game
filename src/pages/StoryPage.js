import React, {useEffect, useState} from "react";
import { Image, StoryChoice, StoryPrompt, StoryFrame } from "../index.js";

const StoryPage = () => {

  //TODO replace dummy values with the initial story text
  const [pictureLink, setPictureLink] = useState("");
  const [storyText, setStoryText] = useState('you are hungry, what do you do');
  const [storyChoices, setStoryChoices] = useState(['eat food', 'starve', 'take a bite of your friend\'s food']);
  const [storyOutcome, setStoryOutcome] = useState("");

  const [showPrompt, setShowPrompt] = useState(true);
  const [showOutcome, setShowOutcome] = useState(true);
  const [showChoices, setShowChoices] = useState(true);

  const option0 = 0
  const option1 = 1
  const option2 = 2

  useEffect(() => {
  }, [storyText]);

  //TODO call updateStoryChoice() when it's implemented
  function renderNewStory (choiceIdx) {
    //newStory = updateStoryChoice(choiceIdx);
    

    // setPictureLink(newStory.pictureLink);
    // setStoryText(newStory.storyText);
    // setStoryChoices(newStory.storyChoices);

    //TODO: delete this switch case. only for demo purposes
    switch(choiceIdx) {
      case 0: 
        setStoryOutcome("you feel satiated.");
        setStoryText("a few hours pass and you get hungry again...");
        break;
      case 1:
        setStoryOutcome("you faint.");
        setStoryText("you wake up on the floor a few seconds later. now what to do...");
        break;
      case 2:
        setStoryOutcome("your friend jerks their sandwich away and glares at you. you still feel hungry.");
        setStoryText("now what to do...");
        break;
    }

    //clear the screen briefly before showing outcome
    setShowOutcome(false)
    setShowPrompt(false);
    setShowChoices(false);

    //show outcome of your action
    setTimeout(() => {
      setShowOutcome(true);
    }, 100)
    
    //show the next prompt and choices
    setTimeout(() => {
      setShowPrompt(true);
      setShowChoices(true);
    }, 1000)
  }

  return (
    <>
      <div className='card'>
        <Image imgLink={pictureLink}/>
        { showOutcome ? <StoryPrompt storyText={storyOutcome} /> : null}
        { showPrompt ? <StoryPrompt storyText={storyText}/> : null}
        { showChoices ? 
        <>
        <StoryChoice 
          choiceIdx={option0} 
          storyChoice={storyChoices[option0]} 
          renderNewStory={renderNewStory}
        />
        <StoryChoice 
          choiceIdx={option1} 
          storyChoice={storyChoices[option1]} 
          renderNewStory={renderNewStory}
        />
        <StoryChoice 
          choiceIdx={option2} 
          storyChoice={storyChoices[option2]} 
          renderNewStory={renderNewStory}
        />
        </>
        : null }
        <p style={{fontSize:10}}>(disclaimer: this is a dummy story that we will delete after the database has real stories in it)</p>
      </div>
    </>
  );
};

export default StoryPage;
