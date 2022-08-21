import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, feedbackEditState, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");
  const [rating, setRating] = useState(10);
  useEffect(() => {
    if (feedbackEditState.edit) {
      setText(feedbackEditState.item.text);
      setRating(feedbackEditState.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEditState]);

  function handleInput(e) {
    if (e.target.value === "") {
      setBtnDisabled(true);
      setWarningMessage("");
    } else if (e.target.value.trim().length <= 10) {
      setWarningMessage("Feedback should be at least 10 characters long.");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setWarningMessage("");
    }
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim().length > 10) {
    }
    const newFeedback = {
      rating,
      text,
    };
    if (feedbackEditState.edit) {
      updateFeedback(feedbackEditState.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
    setText("");
    setBtnDisabled(true);
    setRating(10);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} rate={rating} />
        <div className="input-group">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type={"submit"} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {warningMessage && <div className="message">{warningMessage}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
