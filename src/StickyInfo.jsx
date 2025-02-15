import "./StickyInfo.css";
import anubhavImage from "./assets/anubhav.png";

export default function StickyInfo() {
  return (
    <div className="sticky_info">
      <img className="anubhav_logo" src={anubhavImage} alt="Anubhav" />
      <div className="content">
        <h1>Anubhav Choubey</h1>
        <p>
          At this point tell me your requirements there is chance I can do it or
          I will learn a way to do it.
        </p>
        <div className="social_links">
          <a
            href="https://github.com/anubhavchoubey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
              alt="GitHub"
              className="icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anubhavchoubey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
              alt="LinkedIn"
              className="icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
