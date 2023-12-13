# Gr8Match: Research Assistant Matching System

## Introduction
GR8 is a cutting-edge Research Assistant Matching System designed to address the challenges faced by faculty members in connecting with suitable research assistants. This project focuses on creating a user-friendly platform for faculty assistance requests and efficient identification of research opportunities by research assistants.

# Key Features
- User-Friendly Registration: Simplified onboarding for both faculty and research assistants.
- Streamlined Project Discovery: Easy exploration of available research projects.
- Smart Matching Algorithm: Efficient pairing of faculty assistance requests with suitable research assistants.
- Progress Tracking: Monitoring the progress of research work through intuitive tools.
- Sharing Research Findings: Seamless sharing of research outcomes within the platform.
- Feedback Channels: Open communication channels for both research assistants and faculty.

# Methodology
The project adopts a hybrid approach, combining agile techniques from the incremental framework and reuse-oriented methods. The incremental approach ensures the delivery of usable versions, emphasizing extensive client involvement. The integration of APIs, templates, and related tools enhances the development process's speed and efficiency.

# Technologies Used & Justification: 
The application was separated into two main parts, the front-end, which was built using the React framework of Javascript and the back-end, which was built with Django framework from Python. Django handles server-side logic and database interactions, while React manages the client-side user interface. This separation allows for a clean and organized codebase.
The main reason the front-end was built using React instead of an alternative like vanilla HTML is because of the  inherent benefits of its component-based architecture, which promotes modular and reusable code, making it easier to maintain and scale the application. Other benefits like the virtual DOM, Reacts declarative syntax, its affinity for single-page applications, and past experience.
Django comes out of the pack with security services that protect against common web vulnerabilities, a simplified form of database relation with its Object-Relational Mapping and is inherently optimized for rapid development. These are great reasons to choose it over its counterparts like PHP or Flask.
Both Django and React have huge communities that can provide support, a good ecosystem of useful libraries, and very high customization capabilities.
Web hosting is an essential facet of web development, and Amazon Web Services shines in this field. It is highly scalable, very reliable and has a great selection of managed services like Lambda that can make deployment relatively easier and even decrease operational overhead.

The template for the main functions can be found using this link: https://www.figma.com/file/nbvCTvaNo7fLqEeaUT1dyN/Research-Assistant-Matching-System?type=design&node-id=851%3A6758&mode=design&t=hf7UbEwZPMEplXoM-1 

# Core Functionalities
The software system is primarily supposed to facilitate matches between research assistants and appropriate research projects. As such the system contains a matching making function which retrieves key project attributes such as skills required, faculty attributes such as interests and based on those attributes, calculates match scores for all research assistants in the system. The top three highest scoring research assistants are then returned for the faculty to choose from.

Another core functionality is the ability to track project completion progress from both the faculty end and the research assistant's end. Each research project will have faculty defined milestones and each milestone can have tasks that both the faculty and research assistant have to perform to complete the milestone. Completion of milestones will reflect in a visual progress tracker, where total completion of milestones signifies the completion of the project. However, the faculty has to manually confirm the completion of the project even if all milestones are completed so as to ensure a degree of control over whether the project meets their satisfaction and can thus be considered complete.

Another key functionality is the ability of reseach assistants to express interest in an ongoing project. This is important because in the current system of doing things, rsearch assistants are mostly unable to choose their projects and so this feature allows them to have some degree of control over which projects they can work on. The application is either accepted or denied by the faculty leading the project
