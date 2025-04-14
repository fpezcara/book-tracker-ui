import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router";
import routesConfig from "../../routesConfig";
import Cookies from "js-cookie";
import BookTrackerState from "../../context/BookTrackerState";
import { API_URL } from "../../utils/constants";
import Registration from "./";

jest.mock("../../utils/constants", () => ({
  API_URL: "book-tracker-api.com",
}));

const submitForm = (bodyPayload) => {
  // Fill out the form
  fireEvent.change(screen.getByPlaceholderText("Email address"), {
    target: { value: bodyPayload.email_address },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: bodyPayload.password },
  });
  fireEvent.change(screen.getByPlaceholderText("Password Confirmation"), {
    target: { value: bodyPayload.password_confirmation },
  });

  // Submit the form
  fireEvent.click(screen.getByRole("button", { name: /register/i }));
};

describe("Registration", () => {
  const bodyPayload = {
    email_address: "test@example.com",
    password: "password123",
    password_confirmation: "password123",
  };

  const userId = 9;

  beforeEach(() => {
    fetch.resetMocks();
  });

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
    const bodyPayload = {
      email_address: "test@example.com",
      password: "password123",
      password_confirmation: "password123",
    };
    fetch.mockResponseOnce(JSON.stringify({ user_id: userId }));

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/register"],
    });

    render(
      <BookTrackerState>
        <RouterProvider router={router}>
          <Registration />
        </RouterProvider>
      </BookTrackerState>,
    );

    submitForm(bodyPayload);

    await waitFor(() => {
      expect(router.state.location.pathname).toBe("/reading");
    });

    await waitFor(() => {
      expect(Cookies.get("userId")).toBe(userId.toString());
    });

    await waitFor(() => {
      expect(Cookies.get("currentBookList")).toBe("reading");
    });

    expect(fetch).toHaveBeenCalledWith(
      `${API_URL}/users`,
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          user: bodyPayload,
        }),
      }),
    );
  });

  it("displays error message in form if email address has already been taken", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/register"],
    });

    fetch.mockRejectOnce(
      new Error("Validation failed: Email address has already been taken"),
    );

    render(
      <BookTrackerState>
        <RouterProvider router={router}>
          <Registration />
        </RouterProvider>
      </BookTrackerState>,
    );

    submitForm(bodyPayload);

    await waitFor(() => {
      expect(
        screen.getByText(/Please choose a different email./i),
      ).toBeInTheDocument();
    });
  });

  it("displays error message in form if password & password_confirmation do not match", async () => {
    fetch.mockRejectOnce(
      new Error(
        "Validation failed: Password confirmation doesn't match Password",
      ),
    );

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/register"],
    });

    render(
      <BookTrackerState>
        <RouterProvider router={router}>
          <Registration />
        </RouterProvider>
      </BookTrackerState>,
    );

    submitForm(bodyPayload);

    await waitFor(() => {
      expect(screen.getByText(/do not match./i)).toBeInTheDocument();
    });
  });

  it("displays generic error message on error ", async () => {
    fetch.mockRejectOnce(new Error());

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/register"],
    });

    render(
      <BookTrackerState>
        <RouterProvider router={router}>
          <Registration />
        </RouterProvider>
      </BookTrackerState>,
    );

    submitForm(bodyPayload);

    await waitFor(() => {
      expect(
        screen.getByText(/an error occurred during registration./i),
      ).toBeInTheDocument();
    });
  });
});
