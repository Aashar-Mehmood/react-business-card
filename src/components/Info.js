import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Info() {
  return (
    <div id="info">
      <div className="description">
        <h2 className="text-white">Aashar Mehmood</h2>
        <p>Front-End Developer</p>
        <a
          href="https://aashar-mehmood.github.io/AasharMehmood/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
        </a>
      </div>
      <div className="btns">
        <a className="btn btn-secondary" href="mailto:aasharmehmood3@gmail.com">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
          <span>Email</span>
        </a>
        <a
          className="btn btn-primary"
          href="https://www.linkedin.com/in/aashar-mehmood-5641391a4"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  );
}
