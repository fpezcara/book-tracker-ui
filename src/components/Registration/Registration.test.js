import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router";
import routesConfig from "../../routesConfig";
import axios from "axios";
import Cookies from "js-cookie";
import BookTrackerState from "../../context/BookTrackerState";
import { API_URL } from "../../constants";

import Registration from "./";

jest.mock("axios");

jest.mock("../../constants", () => ({
  API_URL: "http://localhost:3001",
}));

describe("Registration", () => {
  afterEach(() => {
    Cookies.remove("userId");
  });

  it("renders correctly", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/register"],
    });

    const { container } = render(
      <BookTrackerState>
        <RouterProvider router={router}>
          <Registration />
        </RouterProvider>
      </BookTrackerState>,
    );

    expect(container).toMatchSnapshot();
  });

  it("submits the form and sets cookie on success", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/register"],
    });

    axios.post.mockResolvedValue({
      status: 201,
      data: { user_id: 9 },
    });

    render(
      <BookTrackerState>
        <RouterProvider router={router}>
          <Registration />
        </RouterProvider>
      </BookTrackerState>,
    );

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText("Email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password Confirmation"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => {
      expect(router.state.location.pathname).toBe("/reading");
    });

    await waitFor(() => {
      expect(Cookies.get("userId")).toBe("9");
    });

    await waitFor(() => {
      expect(Cookies.get("currentBookList")).toBe("reading");
    });

    expect(axios.post).toHaveBeenCalledWith(
      `${API_URL}/users`,
      {
        user: {
          email_address: "test@example.com",
          password: "password123",
          password_confirmation: "password123",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );
  });

  it("displays message in form if email address has already been taken", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/register"],
    });

    axios.post.mockRejectedValue({
      response: {
        status: 400,
        data: {
          message: "Validation failed: Email address has already been taken",
        },
      },
    });

    render(
      <BookTrackerState>
        <RouterProvider router={router}>
          <Registration />
        </RouterProvider>
      </BookTrackerState>,
    );

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText("Email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password Confirmation"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(async () => {
      await expect(
        await screen.findByText(/Please try again./i),
      ).toBeInTheDocument();
    });
  });
});
