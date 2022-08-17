import { skillValues } from "../../typeconstants";
import "./SkillsCard.scss";

export default function SkillsCard({skill}: skillValues, id: number) {

  return(
      <img
        crossOrigin={"anonymous"}
        className="img-repo-card-div"
        src={skill.logo}
        alt={skill.title}
          />    
  )
}