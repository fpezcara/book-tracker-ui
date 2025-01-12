import { render, screen, act } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";
import BookTrackerState from "./context/BookTrackerState";

describe("App", () => {
  // test("redirects to /reading on first render", () => {

  //   render(
  //     <MemoryRouter>
  //       <BookTrackerState>
  //         <App />
  //       </BookTrackerState>
  //     </MemoryRouter>,
  //   );

  //   const bookTrackerTitle = screen.getByRole('heading', { level: 1 });
  //   const bookList = screen.getByRole('heading', { level: 3 });
  //   expect(bookTrackerTitle).toHaveTextContent(/book tracker/i);
  //   expect(bookList).toHaveTextContent(/reading/i);
  //   expect(screen.getByText(/no books have been added/i)).toBeInTheDocument();
  // });

  test("shows page not found when page does not exist", async () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <BookTrackerState>
          <App />
        </BookTrackerState>
      </Router>,
    );
    console.log("before");
    screen.debug();

    history.push("/random");

    console.log("WHERE AM III", history.location);
    console.log("after");

    screen.debug();
    await act(async () => {
      // Wait for the 404 page to appear
      const goHomeText = await screen.findByText(/go home/i);
      expect(goHomeText).toBeInTheDocument();
      expect(screen.getByAltText("page not found")).toBeInTheDocument();
    });
    // expect(screen.getByAltText('page not found')).toBeInTheDocument()
    // expect(window.history.pathname).toBe('/404')
  });
});
