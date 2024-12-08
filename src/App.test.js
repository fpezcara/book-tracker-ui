import { render, screen } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import BookTrackerState from "./context/BookTrackerState";

describe("App", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <BookTrackerState>
        <App />
      </BookTrackerState>
    </Router>,
  );

  it("redirects to the right page on first render", () => {
    const bookTrackerTitle = screen.getByText(/book tracker/i);

    expect(bookTrackerTitle).toBeInTheDocument();
  });
});
