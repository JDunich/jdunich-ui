// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jack Dunich",
  title: "Hello, I'm Jack",
  subTitle: "- Software Developer, New Jersey",
  resumeLink:
    "https://drive.google.com/file/d/1qrE-4ClCRviYljMs5jwlMbWuEn70VNaq/view?usp=sharing", // Set to empty to hide the button
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JDunich",
  linkedin: "https://www.linkedin.com/in/jack-dunich-713544199/",
  gmail: "jadunich@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// About Section

const about = {
  title: emoji("About Me ✍"),
  desc: ["I am a young motivated software developer with interests in both AI and full stack web development. I have worked on full stack projects professionally using technologies such as NodeJS, React, Redux, and Python with Flask API.", 
  "In my freetime I enjoy learning about new AI and machine learing technologies, and implementing these technologies into personal projects."]
}

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rutgers University - New Brunswick",
      logo: require("./assets/images/rutgers_logo.png"),
      subHeader: "Bachelor of Science Computer Science with Data Science Minor",
      duration: "September 2019 - Dec 2022",
      desc: "Took relevant programming classes such as:",
      descBullets: [
        "Intro to Artificial Intelligence",
        "Software Methodology",
        "Computer Architecture",
        "Computer Algorithms",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  skills: [
    {
      title: "Python",
      logo: require("./assets/images/python_logo.png"),
    }, 
    {
      title: "Java",
      logo: require("./assets/images/java_logo.png"),
    }, 
    {
      title: "JavaScript", 
      logo: require("./assets/images/javascript_logo.png"),
    },
    {
      title: "TypeScript", 
      logo: require("./assets/images/typescript_logo.png"),
    },
    {
      title: "Redux", 
      logo: require("./assets/images/redux_logo.png"),
    },
    {
      title: "SCSS", 
      logo: require("./assets/images/sass_logo.png"),
    },
    {
      title: "React", 
      logo: require("./assets/images/react_logo.png"),
    },
    {
      title: "GIT", 
      logo: require("./assets/images/git_logo.png"),
    },
    {
      title: "Docker", 
      logo: require("./assets/images/docker_logo.png"),
    },
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Application Developer",
      company: "ADP",
      companylogo: require("./assets/images/adp_logo.png"),
      date: "June 2022 – August 2022",
      desc: "Developed a full stack internal web application for the ADP Dev Ops team which provides insights into critical infrastructure status and bug reports. Greatly improved team efficiency as most website functionalities were previously only done via the command line.",
      descBullets: [
        "Tool developed using ReactJS, Redux, Python, Flask, Swagger, Confluence",
        "Implemented Java Web Token authentication system and login process to manage user privileges and access",
        "Deployed to ADP internal server using Docker"
      ]
    },
    {
      role: "Supervisor",
      company: "Rutgers Office of Information Technology",
      companylogo: require("./assets/images/rutgers_logo.png"),
      date: "October 2020 – Present",
      desc: "As a Supervisor for Rutgers OIT, I am responsible for:",
      descBullets: ["Assisting Rutgers OIT full time staff with networking for all the labs across College Avenue campus",
      "Interviewing, Training, and Scheduling over 100 consultants",
      "The Programming and upkeep that goes into the consultant OIT page (a web page OIT workers use to reach resources)",
      "Communicating policy changes made by full time staff to student consultants",
      "Upkeep and policy enforcement in all labs across College Avenue"]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
  emoji("I am open to oppertunities, so contact me if you would like to discuss a project or just want to say hi. My Inbox is open for all! 😁"),
  number: "(973) 356-8336",
  email_address: "jadunich@gmail.com"
};



export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  about,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  contactInfo,
};