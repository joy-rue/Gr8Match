#create faculty and RA class
#create converter that will turn form into FA or RA object
#create algo that create a score for matching (adds and subrtacts from 0 to 100)
#
# project timeline, department, skills required, hours per week*, stage - project
# availability, interest, skills,degree -  ra

# if available +20(range based on how available), if 0 -100,
# if all ra has all skills required +30(range), if 0 -10,
# if RA degree matches project department +30,
# if ra interest match faculty interest (20+)

# FIELD SPECIFIC INTERESTS
Bio_interests = ['Zoology', 'Ecology', 'Forensics', 'Pharmaceuticals']
Psych_interests = ['Child psychology', 'Neurology']
Comp_interests = ['']


interests = []
department = []


class Project:
    def __init__(self, start_date, end_date, department, skills_R, weekly_H, stage, milestones):
        # Instance variables
        self.start_date = start_date
        self.end_date = end_date
        self.department = department
        self.skills_R = skills_R
        self.weekly_H = weekly_H
        self.reseaerch_stage = stage
        self.milestones = milestones # Will be a list of lists where the inner lists are the tasks under each milestone



    # Instance method
    def display_attributes(self):
        print(f"Attribute 1: {self.attribute1}")
        print(f"Attribute 2: {self.attribute2}")

    
    def update_milestone(self, ):
        pass

class Faculty_A:
    def __init__(self, availability, interest, skills, degree):
        # Instance variables
        self.interest = interest
        self.availability = availability
        self.skills = skills
        self.degree = degree
