export const TimeBucket = {
  'START': 0,
  'FROSH_WEEK': 1,
  'CLUB_FAIR': 2,
  'HALLOWEEN': 3,
  'FALL_MIDTERMS': 4,
}


export const TimeBucketArray = [
  TimeBucket.START,
  TimeBucket.FROSH_WEEK,
  TimeBucket.CLUB_FAIR,
  TimeBucket.HALLOWEEN,
  TimeBucket.FALL_MIDTERMS
]


export const GetNextTimebucket = (currentTimebucket) => {
  return TimeBucketArray[currentTimebucket + 1]
}
