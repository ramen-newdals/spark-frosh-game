// Definition of StoryFrames
class StoryFrame {
    constructor(storyText, storyChoices, storyOutcomes, selectionFilters, pictureLink, stateMutators, eventID, timeBucket) {
        this.storyText = storyText
        this.storyChoices = storyChoices
        this.storyOutcomes = storyOutcomes
        this.selectionFilters = selectionFilters
        this.pictureLink = pictureLink
        this.stateMutators = stateMutators
        this.eventID = eventID
        this.timeBucket = timeBucket
    }
}

exports.StoryFrame = StoryFrame