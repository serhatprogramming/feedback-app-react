import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedback(id) {
    if (window.confirm("Are you sure?")) {
      const updatedFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(updatedFeedback);
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
export default App;
