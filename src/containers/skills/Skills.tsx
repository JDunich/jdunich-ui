//@ts-ignore
import { Fade } from "react-reveal";
import SkillsCard from "../../components/skillsCard/SkillsCard";
import { techStack } from "../../profile";
import graphPerson from "../../assets/lottie/graphPerson.json"
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import "./Skills.scss"


export default function Skills() {
  return (
    <div className="main skills-main-div" id="skills">
      <Fade left duration={1000}>
        <div className="skills-image-div">
          <DisplayLottie animationData={graphPerson} />
        </div>
      </Fade>
      <div className="skills-text-div">
        <Fade right duration={1000}>
        <h1 className="skills-heading">Tech Stack</h1>
        <div className="skills-card-container">
          {techStack.skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
        </Fade>
      </div>
    </div>
  );
  }