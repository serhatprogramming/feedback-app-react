import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FontAwesomeIcon size={"2x"} icon={faCircleQuestion} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
