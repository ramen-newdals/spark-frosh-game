// This will be moved into someplace where we keep track of state

export var PlayerStats = {
  'DaysSleptIn': 0,
  'ClassesMissed': 0,
  'FriendExperiences': 0,
  'ClubsAttended': 0,
  'SparkVisited': 0,
  'PartiesAttended': 0,
  'Discipline': 'engsci',
  'SkuleSpirit': 0,
  'Health': 0,
  'Social': 0,
  'TorontoKnowledge': 0,
  'UpperYearWisdom': 0,
  'Academic': 0,
  'Extracurricular': 0
}

export var PlayerStatsLookup



// Easy Setter
// SetUpdatePlayerStats([key:Discipline, value:{input}])
const SetUpdatePlayerStats = (arr /*of [{key,value}] pairs*/) => {
  arr.forEach(kvpair => {
    PlayerStats.kvpair.key = kvpair.value
  });
}

// Easy incrementer
// AddUpdatePlayerStats([key:ClassesMissed, increment:1])
export const AddUpdatePlayerStats = (arr) => {
  //!be careful to only use this on numeric types
  if(arr == null) return
  for(let i = 0; i <= arr.length/2; i+=2){
    PlayerStats[arr[i]] += arr[i+1]
  }
  // arr.forEach(kvpair => {
  //   var mutatorKey = kvpair[0]
  //   var mutatorIncr = kvpair[1]
  //   PlayerStats[mutatorKey]+= mutatorIncr
  // });
  // console.dir(PlayerStats)
}

export const PrintPlayerStats = () => {
  // console.log('PlayerStats')
  // console.dir(PlayerStats)
}


export const CalculatePlayerScore=()=>{
  var scores = {
    academic: 0,
    health: 0,
    social: 0,
    ecr: 0
  }

  //score calculation
  scores.academic += 
    PlayerStats.ClassesMissed * -1 
    + PlayerStats.DaysSleptIn * -1 
    + PlayerStats.UpperYearWisdom * 5
    + PlayerStats.Academic * 2
 
  scores.health += 
    PlayerStats.DaysSleptIn * 1 
    + PlayerStats.Health * 2
  
  scores.social += 
    PlayerStats.PartiesAttended * 3
    + PlayerStats.SkuleSpirit * 2
    + PlayerStats.Social * 2
    + PlayerStats.FriendExperiences * 5

  scores.ecr += 
    PlayerStats.SparkVisited * 5
    + PlayerStats.SkuleSpirit * 2
    + PlayerStats.UpperYearWisdom 
    + PlayerStats.ClubsAttended * 3
    + PlayerStats.TorontoKnowledge
    + PlayerStats.Extracurricular * 2

    console.log("calculated scores")
    console.dir(scores)
  return scores
}

export const GetFinalScore = () => {
  let scoreObj = CalculatePlayerScore();
  let score = scoreObj.academic + scoreObj.ecr+ scoreObj.social + scoreObj.health
  return score
}