import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  if (!feedback || feedback.length !== 0) {
    return (
      <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>
          Average Rating:{" "}
          {(
            feedback.reduce((prev, item) => {
              return prev + item.rating;
            }, 0) / feedback.length
          )
            .toFixed(1)
            .replace(/[.,]0$/, "")}
        </h4>
      </div>
    );
  }
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
