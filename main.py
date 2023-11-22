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

interests = []
department = []


class Project:
    def __init__(self, timeline, department, skills_R, weekly_H, stage):
        # Instance variables
        self.timeline = timeline
        self.department = department
        self.skills_R = skills_R
        self.weekly_H = weekly_H
        self.stage = stage


    # Instance method
    def display_attributes(self):
        print(f"Attribute 1: {self.attribute1}")
        print(f"Attribute 2: {self.attribute2}")

class Faculty_A:
    def __init__(self, availability, interest, skills, degree):
        # Instance variables
        self.interest = interest
        self.availability = availability
        self.skills = skills
        self.degree = degree
