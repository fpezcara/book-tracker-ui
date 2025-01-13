import { render, screen, act } from "@testing-library/react";
import { fireEvent } from "@testing-library/user-event";
import App from "./App";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routesConfig from "./routesConfig";
import BookTrackerState from "./context/BookTrackerState";
describe("App", () => {
  test("redirects to /reading on first render", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/reading"],
    });

    render(
      <BookTrackerState>
        <RouterProvider router={router} />
      </BookTrackerState>,
    );
    const bookTrackerTitle = screen.getByRole("heading", { level: 1 });
    const bookList = screen.getByRole("heading", { level: 3 });
    expect(bookTrackerTitle).toHaveTextContent(/book tracker/i);
    expect(bookList).toHaveTextContent(/reading/i);
    expect(screen.getByText(/no books have been added/i)).toBeInTheDocument();
  });

  test("shows page not found when page does not exist", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/random"],
    });

    render(
      <BookTrackerState>
        <RouterProvider router={router} />
      </BookTrackerState>,
    );

    await act(async () => {
      const goHomeText = await screen.findByText(/go home/i);
      expect(goHomeText).toBeInTheDocument();
      expect(screen.getByAltText("page not found")).toBeInTheDocument();
    });
  });
});
