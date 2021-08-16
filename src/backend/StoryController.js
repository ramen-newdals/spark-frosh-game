// Story Database API

import { GetNextTimebucket, TimeBucket } from "./TimeBuckets";
import { InitStoryDatabase, StoryDatabase } from "./StoryDatabase";
import { AddUpdatePlayerStats, PlayerStats } from "./PlayerStats";

let currentTimeBucket = TimeBucket.START
let timeBucketCounter = 0
let timeBucketLength = 1
let currentFrame

// Given one story frame and the 'PlayerStats', how do we select the next? 
// Read 'PlayerStats' switchboard and base it on the filtering options / timebucket to draw a new card from the Story Database
// Time progresses for every card, the timebucket changes when the Counter >= Period. It need not advance through all the timebuckets
// But rather can be selected probabilistically from meta-buckets
//methods for updating frame, stepping through the story, loading new items, etc.


export const SelectRandomStoryFrame = () => {
  return StoryDatabase[Math.floor(Math.random() * StoryDatabase.length)]
}

export const RequestFirstStoryFrame = () => {
  InitStoryDatabase()
  currentFrame = StoryDatabase[0]
  StoryDatabase[0].read = true;
  timeBucketCounter += 1;
  return StoryDatabase[0]
}

export const RequestNextStoryFrame = (choiceIndex) => {
  alert('')
  let enteringTimeBucket = false;
  let exitingTimeBucket = false;

  if (timeBucketCounter >= timeBucketLength) {
    currentTimeBucket = GetNextTimebucket(currentTimeBucket)
    timeBucketLength = Math.ceil(StoryDatabase.filter(s => s.timeBucket === currentTimeBucket).length / 2)
    timeBucketCounter = 0
    enteringTimeBucket = true;
  }
  if (timeBucketCounter === timeBucketLength - 1) {
    exitingTimeBucket = true;
  }

  //mutate vars
  var mutators = currentFrame.stateMutators[choiceIndex];
  AddUpdatePlayerStats(mutators)

  //next story selector
  //TODO select random in timebucket, rather than in order


  var StoriesInTimeBucket = StoryDatabase.filter(s => s.timeBucket === currentTimeBucket).filter(s => s.read === false)
  var StartingStoriesInTimeBucket = StoriesInTimeBucket.filter(s => s.isEntryFrame === true)
  var nextStory

  //flip condition

  if ((!enteringTimeBucket && !exitingTimeBucket) || StartingStoriesInTimeBucket.length === 0) {
    nextStory = RandomInArray(StoriesInTimeBucket)
  }
  else if (exitingTimeBucket) {

  }
  else {
    nextStory = RandomInArray(StartingStoriesInTimeBucket)
  }
  timeBucketCounter += 1
  console.dir("sending next timebucket")
  console.dir(nextStory)
  currentFrame = nextStory
  return nextStory;
}

const RandomInArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}