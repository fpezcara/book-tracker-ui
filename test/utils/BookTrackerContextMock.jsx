import BookTrackerContext from "../../src/context/BookTrackerContext";

const BookTrackerContextMock = ({ children, values }) => {
  return (
    <BookTrackerContext.Provider value={{ ...values }}>
      {children}
    </BookTrackerContext.Provider>
  );
};

export default BookTrackerContextMock;
