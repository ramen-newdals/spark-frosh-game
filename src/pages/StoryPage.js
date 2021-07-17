import React, {useEffect, useState} from "react";
import { Image, StoryChoice, StoryPrompt, StoryFrame } from "../index.js";

const StoryPage = () => {

  //TODO replace dummy values with the initial story text
  const [pictureLink, setPictureLink] = useState();
  const [storyText, setStoryText] = useState('you are hungry, what do you do');
  const [storyChoices, setStoryChoices] = useState(['eat lunch', 'starve', 'die']);
  const [storyOutcome, setStoryOutcome] = useState("");
  const [showResults, setShowResults] = useState(false);
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

    //TODO: delete me. only for demo purposes
    switch(choiceIdx) {
      case 0: 
        setStoryOutcome("you feel satiated.");
        break;
      case 1:
        setStoryOutcome("you faint.");
        break;
      case 2:
        setStoryOutcome("you feel your spirit detach from your body and float away into another dimension.");
        break;
    }

    setShowResults(!showResults)
    //TODO wait one second before showing next prompt
  }

  return (
    <>
      <div className='card'>
        <Image imgLink={pictureLink}/>
        { showResults ? <StoryPrompt storyText={storyOutcome} /> 
        : <>
        <StoryPrompt storyText={storyText}/>
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
        }
        
        
      </div>
    </>
  );
};

export default StoryPage;
