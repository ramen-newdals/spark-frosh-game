// This will be moved into someplace where we keep track of state

export var PlayerStats = {
  'DaysSleptIn': 0,
  'ClassesMissed': 0,
  'FriendExperiences': 0,
  'ClubsAttended': 0,
  'SparkVisited': false,
  'PartiesAttended': 0,
  'Discipline': 'engsci',
  'SkuleSpirit': 0,
  'Health': 0,
  'Social': 0,
  'TorontoKnowledge': 0,
  'UpperYearWisdom': 0
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
  console.dir('Mutators:')
  console.dir(arr)
  for(let i = 0; i <= arr.length/2; i+=2){
    PlayerStats[arr[i]] += arr[i+1]
  }
  // arr.forEach(kvpair => {
  //   var mutatorKey = kvpair[0]
  //   var mutatorIncr = kvpair[1]
  //   PlayerStats[mutatorKey]+= mutatorIncr
  // });
  console.dir(PlayerStats)
}

export const PrintPlayerStats = () => {
  console.log('PlayerStats')
  console.dir(PlayerStats)
}