import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router";
import routesConfig from "./routesConfig";
import BookTrackerProvider from "./context/BookTrackerProvider";
import Cookies from "js-cookie";
import { mockBookLists } from "../test/mocks/bookListsMock";
import QueryProviderMock from "../test/utils/QueryProviderMock";

const renderComponent = (router) => {
  return render(
    <QueryProviderMock>
      <BookTrackerProvider value={{ isPending: false }}>
        <RouterProvider router={router} />
      </BookTrackerProvider>
    </QueryProviderMock>,
  );
};

jest.mock("./utils/constants", () => ({
  API_URL: "book-tracker-api.com",
}));

describe("App", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe("When user is logged out", () => {
    test("redirects to /login", () => {
      const router = createMemoryRouter(routesConfig, {
        initialEntries: ["/reading"],
      });

      renderComponent(router);

      expect(router.state.location.pathname).toBe("/login");
    });
  });

  describe("When user is logged in", () => {
    beforeEach(() => {
      Cookies.set("userId", "9");

      fetch.mockResponse(JSON.stringify(mockBookLists));
    });

    afterEach(() => {
      Cookies.remove("userId");
      Cookies.remove("currentBookList");

      jest.clearAllMocks();
    });

    test("redirects to /reading on first render", async () => {
      const router = createMemoryRouter(routesConfig, {
        initialEntries: ["/"],
      });
      Cookies.set("currentBookList", "reading");

      const { container } = renderComponent(router);

      await waitFor(() => {
        screen.queryByTestId("booklist-select");
      });

      const bookTrackerTitle = await screen.findByRole("heading", { level: 1 });
      const bookList = await screen.findByRole("heading", { level: 3 });

      expect(bookTrackerTitle).toHaveTextContent(/book tracker/i);
      expect(bookList).toHaveTextContent(/reading/i);
      expect(screen.getByText(/no books have been added/i)).toBeInTheDocument();
      expect(router.state.location.pathname).toBe("/reading");

      expect(container).toMatchSnapshot();
    });

    test("selecting a booklist from the select input navigates to the right booklist name", async () => {
      const router = createMemoryRouter(routesConfig, {
        initialEntries: ["/reading"],
      });
      Cookies.set("currentBookList", "reading");

      renderComponent(router);

      await waitFor(() => {
        expect(screen.getByTestId("booklist-select")).toBeInTheDocument();
      });

      await screen.findByText("Reading");

      const booklistSelect = screen.queryByTestId("booklist-select");
      const bookListHeading = screen.queryByRole("heading", { level: 3 });

      await userEvent.selectOptions(booklistSelect, "finished");

      expect(Cookies.get("currentBookList")).toBe("finished");

      expect(bookListHeading).toHaveTextContent(/finished/i);

      expect(booklistSelect.value).toBe("finished");
    });

    test("shows page not found when page does not exist", async () => {
      const router = createMemoryRouter(routesConfig, {
        initialEntries: ["/random/random"],
      });

      renderComponent(router);

      const goHomeText = await screen.findByText(/go home/i);

      expect(goHomeText).toBeInTheDocument();
      expect(screen.getByAltText("page not found")).toBeVisible();
      await waitFor(() => {
        expect(router.state.location.pathname).toBe("/not-found");
      });
    });

    test("clicking on Add Book button navigates to /add-book", async () => {
      const router = createMemoryRouter(routesConfig, {
        initialEntries: ["/finished"],
      });
      Cookies.set("currentBookList", "finished");

      renderComponent(router);

      const addBookButton = await screen.findByTestId("add-book-button");
      userEvent.click(addBookButton);

      expect(await screen.findByTestId("search-by-input")).toBeInTheDocument();
      expect(
        await screen.findByTestId("search-by-options-select"),
      ).toBeInTheDocument();
    });

    test("clicking on Home button when in /add-book redirects to main page", async () => {
      const router = createMemoryRouter(routesConfig, {
        initialEntries: ["/wishlist", "/wishlist/add-book"],
      });
      Cookies.set("currentBookList", "wishlist");

      renderComponent(router);

      await waitFor(() => {
        expect(
          screen.getByTestId("search-by-options-select"),
        ).toBeInTheDocument();
      });

      const homeButton = screen.getByText("Home");

      userEvent.click(homeButton);

      expect(await screen.findByTestId("home-container")).toBeInTheDocument();
      await waitFor(() => {
        expect(
          screen.getByText(/no books have been added/i),
        ).toBeInTheDocument();
      });

      const bookListHeading = screen.queryByRole("heading", { level: 3 });
      expect(bookListHeading).toHaveTextContent(/wishlist/i);

      expect(router.state.location.pathname).toBe("/wishlist");
    });
  });
});
