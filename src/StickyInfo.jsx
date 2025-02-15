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
            href="https://github.com/LazyyVenom"
            src={github}
            alt="GitHub"
          />
          <IconButton
            href="https://in.linkedin.com/in/anubhav-choubey"
            src={linkedin}
            alt="LinkedIn"
          />
          <IconButton
            href="https://www.kaggle.com/choubeyanubhav"
            src={kaggle}
            alt="Kaggle"
          />
          <IconButton
            href="mailto:choubey.anubhav253@gmail.com"
            src={mail}
            alt="Mail"
          />
          <IconButton
            href="https://leetcode.com/u/lazyvenom/"
            src={leetcode}
            alt="Leetcode"
          />
        </div>
      </div>
    </div>
  );
}
