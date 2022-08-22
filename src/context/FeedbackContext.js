import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5100/feedback/");
    const feedback = await response.json();
    setFeedback(feedback);
    setIsLoading(false);
  };

  const editFeedback = (item) => {
    setFeedbackEditState({ item, edit: true });
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure?")) {
      await fetch(`http://localhost:5100/feedback/${id}`, {
        method: "DELETE",
      });

      const updatedFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(updatedFeedback);
    }
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5100/feedback/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5100/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    // updItem.id = id;
    setFeedback(feedback.map((item) => (item.id === id ? data : item)));
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
