// Story Database API

import { TimeBucket } from "./TimeBuckets";
import { StoryDatabase } from "./StoryDatabase";

// let currentTime = TimeBucket.FROSH_WEEK
// let timeBucketCounter = 0
// let timeBucketPeriod = 3

// Given one story frame and the 'PlayerStats', how do we select the next? 
// Read 'PlayerStats' switchboard and base it on the filtering options / timebucket to draw a new card from the Story Database
// Time progresses for every card, the timebucket changes when the Counter >= Period. It need not advance through all the timebuckets
// But rather can be selected probabilistically from meta-buckets
//methods for updating frame, stepping through the story, loading new items, etc.


export const SelectRandomStoryFrame = () => {
  return StoryDatabase[Math.floor(Math.random() * StoryDatabase.length)]
}