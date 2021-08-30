export const TimeBucket = {
  'START': 0,
  'FROSH_WEEK': 1,
  'CLUB_FAIR': 2,
  'THANKSGIVING': 3,
  'HALLOWEEN': 4,
  'FALL_SEMESTER':5,
  'FALL_READING_WEEK': 6,
  'FALL_EXAMS': 7,
  'WINTER_BREAK': 8,
  'GODIVA_WEEK': 9,
  'WINTER_SEMESTER': 10,
  'WINTER_READING_WEEK': 11,
  'WINTER_EXAMS': 12,
  'SUMMER_BREAK': 13,
  'END': 14
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
  TimeBucket.SUMMER_BREAK,
  TimeBucket.END
]


export const GetNextTimebucket = (currentTimebucket) => {
  let nextTimebucket = TimeBucketArray[TimeBucketArray.indexOf(currentTimebucket) + 1]
  alert("next timebucket " + nextTimebucket)
  return TimeBucketArray[currentTimebucket + 1]
}
