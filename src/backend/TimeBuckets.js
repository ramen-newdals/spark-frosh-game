export const TimeBucket = {
  'START': 0,
  'FROSH_WEEK': 1,
  'CLUB_FAIR': 2,
  'HALLOWEEN': 3,
  'FALL_MIDTERMS': 4,
}

export const GetNextTimebucket = (currentTimebucket) => {
  return TimeBucket.FROSH_WEEK
  //return TimeBucket{currentTimebucket+1}
}