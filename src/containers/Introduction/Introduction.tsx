//@ts-ignore
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Introduction.scss";
import landingPerson from "../../assets/lottie/landingPerson.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { ManCoding }  from "../../assets/images/man_coding.jsx";
import { illustration, greeting } from "../../profile";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

export default function Introduction() {
  return (
    <Fade bottom duration={1000}>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={"greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={ "greeting-text-p" }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button text="Resume" newTab={true} href={greeting.resumeLink} />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
              <ManCoding /> 
          </div> 
        </div>
      </div>
    </Fade>
  )
}