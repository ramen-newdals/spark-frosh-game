import React, {useState} from "react";

const StartButton = ({startGame, name, froshGroup}) => {
  const [showNameRequired, setShowNameRequired] = useState(false);
  const [showFroshGroupRequired, setShowFroshGroupRequired] = useState(false);

  // Makes sure people entered a name and frosh group
  // before starting the story
  const validateAndStart = () => 
  {
    if(name == "") {
      setShowNameRequired(true);
      setShowFroshGroupRequired(false);
    }
    else if (froshGroup == "" || froshGroup == "Select your F!rosh group") {
      setShowNameRequired(false);
      setShowFroshGroupRequired(true);
    } else {
      startGame();
    }
  }

  return (
    <>
    {showNameRequired ? <p class="has-text-danger is-size-7">Please enter your name.</p> : null}
    {showFroshGroupRequired ? <p class="has-text-danger is-size-7">Please select your F!rosh group.</p> : null}

    <button 
        onClick={() => validateAndStart()}
        className="button is-warning m-5 is-large"
        id="submit">
      Let's Go!
    </button>
    </>
  );
};

export default StartButton;