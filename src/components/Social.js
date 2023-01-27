import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function Socials(props) {
  return (
    <div id="socials" className={!props.darkMode ? "light" : ""}>
      <a href="https://codepen.io/aashar-mehmood">
        <FontAwesomeIcon icon={faCodepen}></FontAwesomeIcon>
      </a>
      <a href="https://github.com/Aashar-Mehmood">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
      <a href="https://youtube.com/playlist?list=PLh5fpmnu6D8PJfn4a1MIlmWDV1lCxIcaG">
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
      </a>
      <a href="https://web.facebook.com/Master-Web-Development">
        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
      </a>
    </div>
  );
}
