// @ts-ignore
import ColorThief from "colorthief";
import { useState, createRef } from "react";
import { experienceValues } from "../../typeconstants";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo}: experienceValues) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values: any) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets}: any) => {
    return descBullets
      ? descBullets.map((item: string, i: number) => (
          <li
            key={i}
            className={"experience-desc subtitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={"experience-card"}>
      {/* @ts-ignore */}
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          //@ts-ignore
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={"experience-text-role"}
        >
          {cardInfo.role}
        </h5>
        <h5
          className={"experience-text-date"}
        >
          {cardInfo.date}
        </h5>
        <p
          className={"experience-text-desc"}
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}