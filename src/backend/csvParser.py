import csv 
with open('spark-stories.csv','r', newline='') as f:
    reader = csv.reader(f)
    print()


    for row in reader:
       
        tb = "UNKNOWN"
        
        # Parsing TB
        if('Fall Semester (General)'in row[1]): 
            tb = 'FALL_SEMESTER'
        elif('Fall Reading Week'in row[1] or 'Godiva Week'in row[1]) :
            tb = 'FALL_READING_WEEK'
        elif(row[1]=='Clubs Fair'):
            tb = 'CLUB_FAIR'
        elif(row[1] == 'Thanksgiving'):
            tb = 'THANKSGIVING'
        elif(row[1]=='During F!rosh week'):
            tb = 'FROSH_WEEK'
        elif('Winter Semester (General)'in row[1]):
            tb = 'FALL_SEMESTER'
        elif('Halloween'in row[1]):
            tb = 'HALLOWEEN'

        # Prompt
        prompt = row[2]

        c1 = row[3]
        c2 = row[4]
        c3 = row[5]

        o1 = row[6]
        o2 = row[7]
        o3 = row[8]


        
        # stat delta
        
        hdel = row[9].split(',')
        if(len(hdel) < 3): hdel = [0,0,0]

        adel = row[10].split(',')
        if(len(adel) < 3): adel = [0,0,0]

        sdel = row[11].split(',')
        if(len(sdel) < 3): sdel = [0,0,0]

        edel = row[12].split(',')
        if(len(edel) < 3): edel = [0,0,0]

        hdel = list(map(int, hdel))
        adel = list(map(int, adel))
        sdel = list(map(int, sdel))
        edel = list(map(int, edel))

        score_deltas = f'[[\'Health\', {hdel[0]}, \'Social\', {sdel[0]}, \'Extracurricular\', {edel[0]}, \'Academic\', {adel[0]}],[\'Health\', {hdel[1]}, \'Social\', {sdel[1]}, \'Extracurricular\', {edel[1]}, \'Academic\', {adel[1]}],[\'Health\', {hdel[2]}, \'Social\', {sdel[2]}, \'Extracurricular\', {edel[2]}, \'Academic\', {adel[2]}]]'

        ostr = f"new StoryFrame(\"{prompt}\", [\"{c1}\", \"{c2}\", \"{c3}\"], [\"{o1}\", \"{o2}\", \"{o3}\"], [], '', {score_deltas}, TimeBucket.{tb}),"
        print(ostr)


