import Card from "./shared/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEdit, faE } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FontAwesomeIcon color="purple" icon={faTrashCan} />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FontAwesomeIcon color="purple" icon={faEdit} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
