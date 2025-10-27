import BookTrackerContext from "../../src/context/BookTrackerContext";

const BookTrackerContextMock = ({ children, value }) => {
  return (
    <BookTrackerContext.Provider value={value}>
      {children}
    </BookTrackerContext.Provider>
  );
};

export default BookTrackerContextMock;
