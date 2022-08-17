//@ts-ignore
import { Fade } from "react-reveal";
import { about } from "../../profile";
import computerFloating from "../../assets/lottie/computerFloating.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import "./About.scss";

export default function About() {

  return (
    <div className="main about-main-div" id={"about"}>
      <Fade left duration={1000}>
        <div className="about-image-div">
          <DisplayLottie animationData={computerFloating} />
        </div>
      </Fade>
      <Fade right duration={1000}>
        <div className="about-text-div">
          <h1 className={"about-heading"}>
            {about.title}{" "}
          </h1>
          <div className={"text about-text-subtitle"}>
            {about.desc.map(function(line, index) {
              return(
                <p key={index}>{line}</p>
              )
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}