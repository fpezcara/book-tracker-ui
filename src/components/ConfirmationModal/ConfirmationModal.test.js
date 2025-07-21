import { render, screen, waitFor } from "@testing-library/react";
import ConfirmationModal from ".";
import BookTrackerProvider from "../../context/BookTrackerProvider";
import { MemoryRouter, Route, Routes } from "react-router";
import Cookies from "js-cookie";

import { mockBookLists } from "../../../test/mocks/bookListsMock";
import { bookMock } from "../../../test/mocks/bookMock";

describe("ConfirmationModal", () => {
  const hideModalMock = jest.fn();

  test("When isVisible is set to false, it does not display the modal", () => {
    const { queryByTestId } = render(
      <BookTrackerProvider>
        <ConfirmationModal
          hideModal={hideModalMock}
          message="delete"
          book={bookMock}
        />
      </BookTrackerProvider>,
    );

    const modal = queryByTestId("confirmation-modal");

    expect(modal).toBeFalsy();
  });

  describe("When isVisible is set to true", () => {
    beforeEach(() => {
      Cookies.set("userId", "9");
      Cookies.set("currentBookList", "reading");
      fetch.mockResponse(JSON.stringify(mockBookLists));
    });

    it.each([
      ["add", "Do you want to add:"],
      ["delete", "Do you want to delete:"],
    ])(
      "and the command is to %s, the message displayed should be: %s",
      (str, expectedText) => {
        const { queryByTestId, getByText } = render(
          <BookTrackerProvider value={{ lists: mockBookLists }}>
            <MemoryRouter initialEntries={["/reading"]}>
              <Routes>
                <Route
                  path="/:name"
                  element={
                    <ConfirmationModal
                      isVisible={true}
                      hideModal={jest.fn()}
                      message={str}
                      book={bookMock}
                    />
                  }
                />
              </Routes>
            </MemoryRouter>
          </BookTrackerProvider>,
        );

        expect(queryByTestId("confirmation-modal")).toBeTruthy();
        expect(getByText(expectedText)).toBeTruthy();
      },
    );
  });
});
