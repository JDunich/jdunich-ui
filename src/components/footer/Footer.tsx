//@ts-ignore
import {Fade} from "react-reveal";
import "./Footer.scss";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={"footer-text"}>
          Inspiration from {" "}
          <a href="https://github.com/saadpasta/developerFolio" className={"footer-text"}>
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}