// Story Database API

import { GetNextTimebucket, TimeBucket } from "./TimeBuckets";
import { InitStoryDatabase, StoryDatabase } from "./StoryDatabase";
import { AddUpdatePlayerStats, PlayerStats } from "./PlayerStats";

let currentTimeBucket = TimeBucket.FROSH_WEEK
let timeBucketCounter = 0
let timeBucketLength = 3
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

  if (currentTimeBucket === TimeBucket.END) return "DONE"

  let enteringTimeBucket = false;
  let exitingTimeBucket = false;
  currentFrame.read = true;

  var StoriesInTimeBucket = StoryDatabase.filter(s => s.timeBucket === currentTimeBucket).filter(s => s.read === false)
  var StartingStoriesInTimeBucket
  var EndingStoriesInTimeBucket
  var nextStory


  if (timeBucketCounter >= timeBucketLength || StoriesInTimeBucket.length < 1) {
    currentTimeBucket = GetNextTimebucket(currentTimeBucket)

    //update timebucket on transition
    StoriesInTimeBucket = StoryDatabase.filter(s => s.timeBucket === currentTimeBucket).filter(s => s.read === false)

    timeBucketLength = Math.floor(StoryDatabase.filter(s => s.timeBucket === currentTimeBucket && !s.isEntryFrame && !s.isExitFrame).length / 2)
    timeBucketLength += StoriesInTimeBucket.filter(s => s.isEntryFrame === true).filter(s => s.read === false).length + StoriesInTimeBucket.filter(s => s.isExitFrame === true).filter(s => s.read === false).length
    timeBucketCounter = 0
    enteringTimeBucket = true;

    //update timebucket on transition
    StoriesInTimeBucket = StoryDatabase.filter(s => s.timeBucket === currentTimeBucket).filter(s => s.read === false)
  }

  //set start/end stories
  StartingStoriesInTimeBucket = StoriesInTimeBucket.filter(s => s.isEntryFrame === true).filter(s => s.read === false)
  EndingStoriesInTimeBucket = StoriesInTimeBucket.filter(s => s.isExitFrame === true).filter(s => s.read === false)

  if (timeBucketCounter === timeBucketLength - 1) {
    exitingTimeBucket = true;
  }

  //mutate vars
  var mutators = currentFrame.stateMutators[choiceIndex];
  AddUpdatePlayerStats(mutators)

  //next story selector
  //TODO select random in timebucket, rather than in order

  if (exitingTimeBucket && EndingStoriesInTimeBucket.length > 0) {
    nextStory = RandomInArray(EndingStoriesInTimeBucket)
  }
  else if (enteringTimeBucket && StartingStoriesInTimeBucket.length > 0) {
    nextStory = RandomInArray(StartingStoriesInTimeBucket)
  }
  else {
    nextStory = RandomInArray(StoriesInTimeBucket.filter(s => !s.isEntryFrame && !s.isExitFrame))
  }

  timeBucketCounter += 1
  // console.dir("sending next timebucket")
  // console.dir(nextStory)
  currentFrame = nextStory
  currentFrame.pictureLink = GetPictureLinkByTimebucket()
  return nextStory;
}

const RandomInArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}
export const GetGameProgress = () => {
  //return  (currentTimeBucket + timeBucketCounter / timeBucketLength) / TimeBucketArray.length
}



function GetPictureLinkByTimebucket() {
  switch (currentTimeBucket) {
    case (TimeBucket.FALL_READING_WEEK):
      return 'https://cdn.discordapp.com/attachments/844194839867949106/879512058603925595/fall_reading_week.jpg'
    case (TimeBucket.CLUB_FAIR):
      return 'https://cdn.discordapp.com/attachments/844194839867949106/879512104762236959/clubs_fair.jpg'
    case (TimeBucket.FALL_SEMESTER):
      return 'https://cdn.discordapp.com/attachments/844194839867949106/879512084218511370/fall_semester.jpg'
    case (TimeBucket.FROSH_WEEK):
      return 'https://media.discordapp.net/attachments/844194839867949106/879512125725347880/frosh_week.jpg?width=1024&height=683'
    case (TimeBucket.HALLOWEEN):
      return 'https://media.discordapp.net/attachments/844194839867949106/879513004578852874/halloween.jpg?width=455&height=683'
    case (TimeBucket.THANKSGIVING):
      return 'https://media.discordapp.net/attachments/844194839867949106/879512110214815805/thanksgiving.jpg?width=455&height=683'
    case (TimeBucket.END):
      return 'https://cdn.discordapp.com/attachments/844194839867949106/879512061623824476/winter_break.jpg'
    case (TimeBucket.START):
      return 'https://images.unsplash.com/photo-1576485976138-6c3cff620ae8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' 
    default:
      return 'https://images.unsplash.com/photo-1576485976138-6c3cff620ae8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
}

