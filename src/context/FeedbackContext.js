import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: "1",
      text: "This is body from FeedbackContext",
      rating: 10,
    },
  ]);

  function deleteFeedback(id) {
    if (window.confirm("Are you sure?")) {
      const updatedFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(updatedFeedback);
    }
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
    console.log(feedback);
  }

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
