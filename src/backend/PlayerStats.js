// This will be moved into someplace where we keep track of state

let PlayerStats = {
  DaysSleptIn: 0,
  ClassesMissed: 0,
  FriendExperiences: 0,
  ClubsAttended: 0,
  SparkVisited: false,
  PartiesAttended: 0,
  Discipline: 'engsci'
}

// Easy Setter
// SetUpdatePlayerStats([key:Discipline, value:{input}])
const SetUpdatePlayerStats = (arr /*of [{key,value}] pairs*/) => {
  arr.forEach(kvpair => {
    PlayerStats.kvpair.key = kvpair.value
  });
}

// Easy incrementer
// AddUpdatePlayerStats([key:ClassesMissed, increment:1])
const AddUpdatePlayerStats = (arr) => {
  //!be careful to only use this on numeric types
  arr.forEach(kvpair => {
    PlayerStats.kvpair.key += kvpair.increment
  })
}

