import Headroom from "react-headroom";
import { greeting } from "../../profile"
import "./Appbar.scss";

export default function AppBar() {
  return (
    <Headroom>
      <header className={"header"}>
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={"navicon"}></span>
        </label>
        <ul className={"menu"}>
          <li> <a href="#about">About Me</a> </li>
          <li> <a href="#experience">Work Experience</a> </li>
          <li> <a href="#skills">Tech Stack</a> </li>
          <li> <a href="#opensource">Open Source</a> </li>
          <li> <a href="#contact">Contact Me</a> </li>
        </ul>
      </header>
    </Headroom>
  );
}
