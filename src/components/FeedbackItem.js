import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function FeedbackItem({ feedback, handleDelete }) {
  return (
    <Card reverse={false}>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className="close">
        <FontAwesomeIcon color="red" icon={faTrashCan} />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
