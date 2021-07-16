# (insert cool game name here)

# How to run locally on your computer
1. `cd` into the directory where you want this repo
2. Clone the repo: `git clone https://github.com/wintrmut3/spark-frosh-game.git`
3. Go into the repo directory: `cd spark-frosh-game`
4. Install dependencies (takes a few mins): `npm install`
5. Start the app on localhost:3000 (aka your computer, port 3000): `npm start`
6. A new tab should open on your browser with the app
7. Whenever you make changes to the code, all you have to do is save. The new changes will appear on that tab.
8. If your code is broken, your browser tab will display the error instead of the app.
9. Enjoy
    
# Story Frame Data Structure -- A list of these is stored as the 'database'

```js
// Definition of StoryFrames
class StoryFrame {
    constructor(storyText:string, storyChoices, storyOutcomes, selectionFilters, pictureLink, stateMutators, eventID, timeBucket) {
        this.storyText = storyText              // A string representing the main story text
        this.storyChoices = storyChoices        // A string array of size N representing choices
        this.storyOutcomes = storyOutcomes      // A string array of size N representing corresponding outcomes
        this.selectionFilters = selectionFilters// don't worry about this one, it will be manual
        this.pictureLink = pictureLink          // A string linking to an image
        this.stateMutators = stateMutators      // dont worry about this one, it will be manual
        this.timeBucket = timeBucket            // An enum (dropdown choice) representing which time bucket it falls under
    }
}
```

# Program Loop
```mermaid
graph TD
    a[Render StoryFrame]
    b[Render Img, Text, Choices as buttons]
    c[Clear Choice Buttons]
    d[Send Selected Choice to API]
    e[API Returns the Outcome]
    f[API selects next Storyframe from database based on time, inventory]
    g[Outcome is rendered in place of cleared choice btns]
    h[API updates inventory]
    i[CurrentStoryFrame state updated]

    a-->b
    b-->|User selects a choice button|c
    c-->|func UpdateStory<ChoiceIdx>|d
    d-->e
    d-->h
    h-->f
    e-->g
    f-->i
    i-->|trig'd rerender|a
```    
![](https://mermaid-js.github.io/mermaid-live-editor/view/#eyJjb2RlIjoiZ3JhcGggVERcbiAgICBhW1JlbmRlciBTdG9yeUZyYW1lXVxuICAgIGJbUmVuZGVyIEltZywgVGV4dCwgQ2hvaWNlcyBhcyBidXR0b25zXVxuICAgIGNbQ2xlYXIgQ2hvaWNlIEJ1dHRvbnNdXG4gICAgZFtTZW5kIFNlbGVjdGVkIENob2ljZSB0byBBUEldXG4gICAgZVtBUEkgUmV0dXJucyB0aGUgT3V0Y29tZV1cbiAgICBmW0FQSSBzZWxlY3RzIG5leHQgU3RvcnlmcmFtZSBmcm9tIGRhdGFiYXNlIGJhc2VkIG9uIHRpbWUsIGludmVudG9yeV1cbiAgICBnW091dGNvbWUgaXMgcmVuZGVyZWQgaW4gcGxhY2Ugb2YgY2xlYXJlZCBjaG9pY2UgYnRuc11cbiAgICBoW0FQSSB1cGRhdGVzIGludmVudG9yeV1cbiAgICBpW0N1cnJlbnRTdG9yeUZyYW1lIHN0YXRlIHVwZGF0ZWRdXG5cbiAgICBhLS0-YlxuICAgIGItLT58VXNlciBzZWxlY3RzIGEgY2hvaWNlIGJ1dHRvbnxjXG4gICAgYy0tPnxmdW5jIFVwZGF0ZVN0b3J5PENob2ljZUlkeD58ZFxuICAgIGQtLT5lXG4gICAgZC0tPmhcbiAgICBoLS0-ZlxuICAgIGUtLT5nXG4gICAgZi0tPmlcbiAgICBpLS0-fHRyaWcnZCByZXJlbmRlcnxhXG4gICAgXG4gICAgXG4gICIsIm1lcm1haWQiOiJ7XG4gIFwidGhlbWVcIjogXCJkZWZhdWx0XCJcbn0iLCJ1cGRhdGVFZGl0b3IiOnRydWUsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjp0cnVlfQ)
