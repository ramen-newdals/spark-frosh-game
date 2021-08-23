import { createContext } from "react";
import { PlayerStats } from "./PlayerStats";
import StoryFrame from "./StoryFrame";
import { TimeBucket } from "./TimeBuckets";

export var StoryDatabase = [
  new StoryFrame("Welcome to f!rosh week!", ["Okay!"], ['Made by Spark.'], [], 'https://picsum.photos/200/300', [], TimeBucket.FROSH_WEEK, true), //entry story
  new StoryFrame("You've gotten to the purple dye station. It's a tradition to remember those submarine engineers lost at sea.", ["No dye, thanks.", "Dye your arm.", "Dye your whole body."], ['You pass the station. Maybe another time?', 'Your arm drips with violet dye.', 'You convince someone to pour a bucket of dye over you. It tastes ... unpleasant, but you are now fully purple.'], [], 'https://picsum.photos/200/300', [['SkuleSpirit', -1],['SkuleSpirit', +1],['SkuleSpirit', +5,'Health',-1]], TimeBucket.FROSH_WEEK),
  new StoryFrame("Your frosh group makes it to Nathan Phillips Square. Bystanders look on, some warily, some with anticipation.", ["Jump in!", "Push your friend!", "Stand and watch."], ['You jump in with the crowd. Several hundred engineers-to-be are already splashing each other.', 'They fall in, sputtering, then drag you in. Both of you are soaking by the time everyone leaves.', 'Watching from the edge of the pool, you dip your toes in. It\'s pretty cold, maybe you made the right choice.'], [], 'https://picsum.photos/200/300', [['Social', +1],['Social',+1,'FriendExperiences',+1],['Social', -1]], TimeBucket.FROSH_WEEK),
  new StoryFrame("You walk back to campus, from downtown, then return to your residence with your frosh kit over your shoulder. The heat of the day has almost dissipated entirely, and you're looking forward to reorganizing your closet and chatting with roommates. Maybe you'll go out for dinner somewhere.", ["Chat with the other people in your group", 'Chat with your f!rosh leedur',"Admire the city"], ['You learn the names of some people in your discipline, and talk about how excited you are to start.', 'You learn some interesting things, courses to take, lectures to avoid, the best libraries ...', 'You notice a few shortcuts that might come in handy later. Queen St, W, St. Patrick, hm... you\'re getting the hang of this.'], [], 'https://picsum.photos/200/300', [['Social',+1],['Social', +1, 'UpperYearWisdom', +1],['TorontoKnowledge', +2]], TimeBucket.FROSH_WEEK, false, true), //exit story

  new StoryFrame("The club fair is being held in Bahen this year. The first two floors are floor are packed (within reason) with clubs and design teams looking to recruit new memebers.", ["Visit the Spark Design Club booth!", "Look at the other design clubs", "...is there a cabbage team?"], ['Promotional material', 'You feel like some other clubs might be interesting to look at, but you\'re eventually drawn back towards the Spark Booth.', 'Yes, but Spark is _definitely_ more interesting than a cabbage club.'], [], 'https://picsum.photos/200/300', [], TimeBucket.CLUB_FAIR, true),
  new StoryFrame("An old display stands to the left of the Spark Design Club booth. It's an assembly of flashing lights and whirring motors, with a small crowd taking turns to play.", ["Go up to the booth.", "Talk to the Spark leads."], ['You fiddle with the buttons, and you notice you\'re controlling a mechanized pong arcade machine. They tell you that the display took a few months to design, with a variety of students from all disciplines and years. "Join us at our next build day! It\'s where we build these displays all at once." they say, inviting you. (Join our mailing list to be notified!)', 'They tell you that the display took a few months to design, with a variety of students from all disciplines and years. "Join us at our next build day! It\'s where we build these displays all at once." they say, inviting you. (Join our mailing list to be notified!)'], [], 'https://picsum.photos/200/300', [['SparkVisited', +2], ['SparkVisited', +1]], TimeBucket.CLUB_FAIR, false, true),

  new StoryFrame("Thanksgiving placeholder", ["Choice 1", "Choice 2", "Choice 3"], ['Outcome 1', 'Outcome 2', 'Outcome 3'], [], 'https://picsum.photos/200/300', [], TimeBucket.THANKSGIVING),

  new StoryFrame("Halloween's coming up! You could use a break from studying.", ["Still, you have a midterm soon. Go to the library.", "Head to a party!", "Watch a game at Varsity stadium."], ['Outcome 1', 'Outcome 2', 'Outcome 3'], [], 'https://picsum.photos/200/300', [], TimeBucket.HALLOWEEN, true),

  new StoryFrame("HALLOWEEN placeholder 1", ["Choice 1", "Choice 2", "Choice 3"], ['Outcome 1', 'Outcome 2', 'Outcome 3'], [], 'https://picsum.photos/200/300', [], TimeBucket.HALLOWEEN),

  new StoryFrame("Fall FALL_SEMESTER placeholder", ["Choice 1", "Choice 2", "Choice 3"], ['Outcome 1', 'Outcome 2', 'Outcome 3'], [], 'https://picsum.photos/200/300', [], TimeBucket.FALL_SEMESTER),

  new StoryFrame("FALL_READING_WEEK placeholder", ["Choice 1", "Choice 2", "Choice 3"], ['Outcome 1', 'Outcome 2', 'Outcome 3'], [], 'https://picsum.photos/200/300', [], TimeBucket.FALL_READING_WEEK),

  new StoryFrame("FALL_EXAMS placeholder -- NO MORE STORIES AFTER THIS SO FAR", ["Choice 1", "Choice 2", "Choice 3"], ['Outcome 1', 'Outcome 2', 'Outcome 3'], [], 'https://picsum.photos/200/300', [], TimeBucket.FALL_EXAMS),

]

export const InitStoryDatabase = () =>{
  //other obvious initialization 
  StoryDatabase = StoryDatabase.map((frame) => {
    return {...frame, read: false}
  })
  console.log("initialized story database")
  console.dir(StoryDatabase)
}

export const GetOutcomeByIndex = (currentFrame, choiceIndex) => {
  return currentFrame.storyOutcomes[choiceIndex]
}
