export default class StoryFrame {
  constructor(storyText, storyChoices, storyOutcomes, selectionFilters, pictureLink, stateMutators, timeBucket) {
    this.storyText = storyText              // A string representing the main story text
    this.storyChoices = storyChoices        // A string array of size N representing choices
    this.storyOutcomes = storyOutcomes      // A string array of size N representing corresponding outcomes
    this.selectionFilters = selectionFilters// don't worry about this one, it will be manual
    this.pictureLink = pictureLink          // A string linking to an image
    this.stateMutators = stateMutators      // dont worry about this one, it will be manual
    this.timeBucket = timeBucket            // An enum (dropdown choice) representing which time bucket it falls under
    this.selectedChoice = -1                // storing which choice was selected / Life is Strange style statistics
  }
}

