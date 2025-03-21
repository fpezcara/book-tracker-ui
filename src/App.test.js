import { render, screen, act } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router";
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

  test("selecting a booklist from the select input navigates to the right booklist name", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/reading"],
    });

    render(
      <BookTrackerState>
        <RouterProvider router={router} />
      </BookTrackerState>,
    );

    const booklistSelect = screen.getByTestId("booklist-select");
    await userEvent.selectOptions(booklistSelect, ["finished"]);

    expect(await screen.findByRole("heading", { level: 3 })).toHaveTextContent(
      "finished",
    );
    expect(booklistSelect.value).toBe("finished");
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
      expect(screen.getByAltText("page not found")).toBeVisible();
    });
  });

  test("clicking on Add Book button navigates to /add-book", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/finished"],
    });

    render(
      <BookTrackerState>
        <RouterProvider router={router} />
      </BookTrackerState>,
    );

    const addBookButton = await screen.findByTestId("add-book-button");
    userEvent.click(addBookButton);

    expect(await screen.findByTestId("search-by-input")).toBeInTheDocument();
    expect(
      await screen.findByTestId("search-by-options-select"),
    ).toBeInTheDocument();
  });

  test("clicking on Go back button when in /add-book redirects to main page", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/wishlist", "/wishlist/add-book"],
    });

    render(
      <BookTrackerState>
        <RouterProvider router={router} />
      </BookTrackerState>,
    );

    const goBackButton = await screen.findByTestId("go-back-button");
    userEvent.click(goBackButton);

    expect(await screen.findByTestId("home-container")).toBeInTheDocument();
    expect(
      await screen.findByText(/no books have been added/i),
    ).toBeInTheDocument();
    expect(router.state.location.pathname).toBe("/wishlist");
  });
});
