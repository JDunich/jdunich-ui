// @ts-ignore
import { Fade, Slide } from "react-reveal";
import { bulletValues, educationValues } from "../../typeconstants";
import "./EducationCard.scss";

export default function EducationCard({school}: educationValues) {

  const GetDescBullets = ({descBullets}: bulletValues) => {
    return descBullets
      ? descBullets.map((item: string, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={ "education-text-subHeader" }
              >
                {school.subHeader}
              </h5>
              <p
                className={"education-text-duration"}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  {/* @ts-ignore */}
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}