import "./StickyInfo.css";
import anubhavImage from "./assets/anubhav.png";
import anubhavTransparent from "./assets/anubhav_transparent.png";
import github from "./assets/icons/github.png";
import linkedin from "./assets/icons/linkedin.png";
import kaggle from "./assets/icons/kaggle.png";
import mail from "./assets/icons/mail.png";
import leetcode from "./assets/icons/leetcode.png";

function IconButton({ href, src, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} className="icon" />
    </a>
  );
}

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
          <IconButton
            href="https://github.com/anubhavchoubey"
            src={github}
            alt="GitHub"
          />
          <IconButton
            href="https://www.linkedin.com/in/anubhavchoubey"
            src={linkedin}
            alt="LinkedIn"
          />
          <IconButton
            href="https://www.linkedin.com/in/anubhavchoubey"
            src={kaggle}
            alt="LinkedIn"
          />
          <IconButton
            href="https://www.linkedin.com/in/anubhavchoubey"
            src={mail}
            alt="LinkedIn"
          />
          <IconButton
            href="https://www.linkedin.com/in/anubhavchoubey"
            src={leetcode}
            alt="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
}
