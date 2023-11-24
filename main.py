# create faculty and RA class
# create converter that will turn form into FA or RA object
# create algo that create a score for matching (adds and subrtacts from 0 to 100)
#
# project timeline, department, skills required, hours per week*, stage - project
# availability, interest, skills,degree -  ra

# if available +20(range based on how available), if 0 -100,[for now yes or no]
# if all ra has all skills required +30(range),
# if RA degree matches project department +30,
# if ra interest match faculty interest (20+)

from typing import List

# FIELD SPECIFIC INTERESTS
Bio_interests = ['Zoology', 'Ecology', 'Forensics', 'Pharmaceuticals']
Psych_interests = ['Child psychology', 'Neurology']
Comp_interests = [
    "Algorithms and Data Structures",
    "Artificial Intelligence (AI)",
    "Machine Learning",
    "Computer Graphics",
    "Human-Computer Interaction (HCI)",
    "Databases",
    "Software Engineering",
    "Computer Networks",
    "Cybersecurity",
    "Computer Vision",
    "Natural Language Processing (NLP)",
    "Operating Systems",
    "Parallel and Distributed Computing",
    "Quantum Computing",
    "Robotics",
    "Theoretical Computer Science",
    "Bioinformatics",
    "Computer Ethics",
    "Mobile Computing",
    "Data Science",
    "Embedded Systems",
    "Web Development",
    "Game Development",
    "Network Security",
    "Information Retrieval",
    "Compiler Design",
    "High-Performance Computing",
    "Cloud Computing",
    "Augmented Reality (AR) and Virtual Reality (VR)",
    "Internet of Things (IoT)",
    "Biometric Systems",
    "Computational Linguistics",
    "Geographic Information Systems (GIS)",
    "Enterprise Systems",
    "Computer-Aided Design (CAD)",
    "Evolutionary Computation",
    "Computer Forensics",
    "Quantum Information Science",
    "Usability Engineering",
    "Computational Biology",
    "Educational Technology",
    "Blockchain Technology",
    "Humanoid Robotics",
    "Medical Imaging",
    "Cryptography",
    "Natural Computing",
    "Big Data Analytics",
    "Geometric Modeling",
    "Network Programming",
    "Semantic Web",
    "Internet Security",
    "Fuzzy Systems",
    "Autonomous Systems",
    "Swarm Intelligence",
    "Pervasive Computing",
    "Speech Processing",
    "Information Theory",
    "Simulation and Modeling",
    "Bio-inspired Computing",
    "Knowledge Representation and Reasoning",
    "Recommender Systems",
    "Wireless Sensor Networks",
    "Parallel Processing",
    "Social Network Analysis",
    "Evolutionary Algorithms",
    "Human-Robot Interaction",
    "Computational Sustainability",
    "Internet Programming",
    "Digital Signal Processing",
    "Graph Theory",
    "Natural User Interfaces (NUI)",
    "Embedded Web Systems",
    "Biomedical Informatics",
    "Internet of Everything (IoE)",
    "Exascale Computing",
    "Computational Complexity Theory",
    "Quantum Machine Learning",
    "Neuroinformatics",
    "Human-Centered Computing",
    "Ubiquitous Computing",
    "Computer-Assisted Surgery",
    "Information Visualization",
    "Computational Geometry",
    "Spatial Databases",
    "Robotic Process Automation (RPA)",
]
BA_interests = [
    "Marketing",
    "Finance",
    "Human Resource Management",
    "Operations Management",
    "Strategic Management",
    "Entrepreneurship",
    "International Business",
    "Supply Chain Management",
    "Information Systems Management",
    "Project Management",
    "Business Analytics",
    "Economics",
    "Organizational Behavior",
    "Business Law",
    "Management Information Systems",
    "Corporate Social Responsibility (CSR)",
    "Business Ethics",
    "Leadership",
    "Public Administration",
    "Risk Management",
    "Healthcare Administration",
    "Public Relations",
    "Retail Management",
    "Hospitality Management",
    "Real Estate Management",
    "Management Consulting",
    "Business Intelligence",
    "Taxation",
    "Accounting",
    "E-commerce",
    "Corporate Finance",
    "Change Management",
    "Nonprofit Management",
    "Business Process Management",
    "Customer Relationship Management (CRM)",
    "Management Science",
    "Business Communication",
    "Information Technology Management",
    "Supply Chain Analytics",
    "Social Media Management",
    "Small Business Management",
    "Sustainability Management",
    "Corporate Governance",
    "Quality Management",
    "Strategic Planning",
    "Financial Planning",
    "Knowledge Management",
    "Business Development",
    "Data Science for Business",
    "Digital Marketing",
    "Sports Management",
    "Financial Risk Management",
    "Environmental Management",
    "Family Business Management",
    "Crisis Management",
    "Retail Analytics",
    "Business Law and Ethics",
    "Strategic Human Resource Management",
    "Business Education",
    "Business Negotiation",
    "Green Business",
    "Tourism Management",
    "Innovation Management",
    "Business Process Reengineering",
    "Global Business",
    "Legal Management",
    "Brand Management",
    "Conflict Resolution",
    "International Economics",
    "Consumer Behavior",
    "Marketing Research",
    "Financial Markets",
    "Business Simulation",
    "Operations Research",
]

interests = [Bio_interests, Psych_interests, Comp_interests, BA_interests]
departments = ["CompScience", "BusinessAdmin"]
# assume that each interest can lead to a degree
dep_deg = {departments[1]: Comp_interests, departments[2]: BA_interests}
degrees = [1, 2, 3, 4, 5, 6, 7, 8]
education_level = ["bachelors", "masters", "phd", "Associates"]
certificates = []


# when the form is submitted we add the object to the database
# from the database we take all RAs and create Faculty_A objects for them for the algo (necessary?) do same for projects
# calculate and return score,
# post list of top 3 RAs for a project to


class Project:
    def __init__(self, start_date, end_date, department, skills_R, weekly_H, stage, milestones):
        # Instance variables
        self.start_date = start_date
        self.end_date = end_date
        self.department = department
        self.skills_R = skills_R
        self.weekly_H = weekly_H
        self.reseaerch_stage = stage
        self.milestones = milestones  # Will be a list of lists where the inner lists are the tasks under each milestone

    def update_milestone(self):
        pass


class FacultyA:
    def __init__(self, name, availability, interest, skills, degree):
        # Instance variables
        self.name = name
        self.interest = interest
        self.availability = availability
        self.skills = skills
        self.degree = degree


class Faculty:
    def __init__(self, name, interest, degree):
        # Instance variables
        self.name = name
        self.interest = interest
        self.degree = degree


def Gr8match(project: Project, assistants: List[FacultyA], faculty: Faculty):
    scores = {}
    for assistant in assistants:
        score = 0
        skill_score = 30 / len(project.skills_R)
        interest_score = 20 / len(faculty.interest)
        if not assistant.availability:
            score -= 100
        else:
            score += 30

        for skill in project.skills_R:
            if skill in assistant.skills:
                score += skill_score
            else:
                score -= skill_score

        if assistant.degree == project.department:
            score += 30

        for interest in faculty.interest:
            if interest in assistant.interest:
                score += interest_score

        scores[assistant.name] = score
        #This is new

    print(scores)
