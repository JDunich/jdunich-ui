import { buttonValues } from "../../typeconstants";
import "./Button.scss";

export default function Button({text, className, href, newTab}: buttonValues) {
  return (
    <div className={className}>
      {/* @ts-ignore */}
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}