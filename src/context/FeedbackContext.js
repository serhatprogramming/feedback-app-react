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

  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEditState({ item, edit: true });
  };

  function deleteFeedback(id) {
    if (window.confirm("Are you sure?")) {
      const updatedFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(updatedFeedback);
    }
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  const updateFeedback = (id, updItem) => {
    updItem.id = id;
    setFeedback(feedback.map((item) => (item.id === id ? updItem : item)));
    setFeedbackEditState({ item: {}, edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEditState,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
