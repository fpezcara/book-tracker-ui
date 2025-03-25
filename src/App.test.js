import { render, screen, act, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router";
import routesConfig from "./routesConfig";
import BookTrackerState from "./context/BookTrackerState";
import Cookies from "js-cookie";
import axios from "axios";

const mockBookLists = [
  {
    id: "dd578ff0-bfdb-4f16-83ae-3d9f9aa661c4",
    name: "Reading",
    updated_at: "2025-03-23T15:26:58.317Z",
    user_id: 9,
    created_at: "2025-03-23T15:26:58.317Z",
  },
  {
    id: "dd578ff0-b0eb-4f16-83ae-3d9f9aa661c4",
    name: "Wishlist",
    updated_at: "2025-03-23T15:26:58.317Z",
    user_id: 9,
    created_at: "2025-03-23T15:26:58.317Z",
  },
  {
    id: "dd578ff0-bfdb-4g16-83ae-3d9f9aa761c4",
    name: "Finished",
    updated_at: "2025-03-23T15:26:58.317Z",
    user_id: 9,
    created_at: "2025-03-23T15:26:58.317Z",
  },
];

jest.mock("axios");

describe("App", () => {
  describe("When user is logged in", () => {
    beforeEach(() => {
      Cookies.set("userId", "9");
    });

    afterEach(() => {
      Cookies.remove("userId");
    });
    test.skip("redirects to /reading on first render", () => {
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

      axios.get.mockResolvedValue({ data: mockBookLists });

      render(
        <BookTrackerState>
          <RouterProvider router={router} />
        </BookTrackerState>,
      );

      await waitFor(() => {
        expect(screen.getByTestId("booklist-select")).toBeInTheDocument();
      });

      await screen.findByText("Reading");

      const booklistSelect = await screen.findByTestId("booklist-select");

      await userEvent.selectOptions(booklistSelect, "finished");

      await screen.findByText("Finished");

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

    test.skip("clicking on Go back button when in /add-book redirects to main page", async () => {
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

  describe("When user is logged out", () => {
    test("redirects to /login", () => {
      const router = createMemoryRouter(routesConfig, {
        initialEntries: ["/reading"],
      });

      render(
        <BookTrackerState>
          <RouterProvider router={router} />
        </BookTrackerState>,
      );

      expect(router.state.location.pathname).toBe("/login");
    });
  });
});
