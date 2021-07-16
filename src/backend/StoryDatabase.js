import { createContext } from "react";
import StoryFrame from "./StoryFrame";
import { TimeBucket } from "./TimeBuckets";

export const StoryDatabase = [
  new StoryFrame("Test text 1", ["Choice 1", "Choice 2", "Choice 3"], ['Outcome 1', 'Outcome 2', 'Outcome 3'], [], 'https://picsum.photos/200/300', [], TimeBucket.FROSH_WEEK),
  new StoryFrame("Test text 2", ["Choice 1", "Choice 2", "Choice 3"], ['Outcome 1', 'Outcome 2', 'Outcome 3'], [], 'https://picsum.photos/200/300', [], TimeBucket.FROSH_WEEK),
  new StoryFrame("Test text 3", ["Choice 1", "Choice 2", "Choice 3"], ['Outcome 1', 'Outcome 2', 'Outcome 3'], [], 'https://picsum.photos/200/300', [], TimeBucket.FROSH_WEEK),
]

export const GetOutcomeByIndex = (currentFrame, choiceIndex) => {

  return currentFrame.storyOutcomes[choiceIndex]
}

export const SelectNextStoryFrame = () => {
  //TODO draw a new card, set the current frame based on that
  //TODO mutate variables through stateMutators[choiceIndex]
  return StoryDatabase[Math.floor(Math.random() * StoryDatabase.length)]

}