export const TimeBucket = {
  'START': 0,
  'FROSH_WEEK': 0,
  'CLUB_FAIR': 0,
  'FALL_SEMESTER': 0,
  'HALLOWEEN': 0,
  'FALL_EXAMS': 0,
  'WINTER_BREAK': 0,
  'GODIVA_WEEK':0,
  'WINTER_SEMESTER':0,
  'WINTER_READING_WEEK':0,
  'WINTER_EXAMS':0,
  'FALL_READING_WEEK':0,
  'THANKSGIVING':0,
  'END':0
}


export const TimeBucketArray = [
  TimeBucket.START,
  TimeBucket.FROSH_WEEK,
  TimeBucket.CLUB_FAIR,
  TimeBucket.THANKSGIVING,
  TimeBucket.HALLOWEEN,
  TimeBucket.FALL_SEMESTER,
  TimeBucket.FALL_READING_WEEK,
  TimeBucket.FALL_EXAMS,
  TimeBucket.WINTER_BREAK,
  TimeBucket.GODIVA_WEEK,
  TimeBucket.WINTER_SEMESTER,
  TimeBucket.WINTER_READING_WEEK,
  TimeBucket.WINTER_EXAMS,
  TimeBucket.END
]


export const GetNextTimebucket = (currentTimebucket) => {
  return TimeBucketArray[currentTimebucket + 1]
}