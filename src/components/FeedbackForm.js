import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState } from "react";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");
  const [rating, setRating] = useState(10);

  function handleInput(e) {
    if (e.target.value === "") {
      setBtnDisabled(true);
      setWarningMessage("");
    } else if (e.target.value.trim().length <= 10) {
      setWarningMessage("Feedback should be at least 10 characters long.");
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
    handleAdd(newFeedback);
    setText("");
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
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
