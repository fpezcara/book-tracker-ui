import { render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import ConfirmationModal from ".";
import BookTrackerProvider from "../../context/BookTrackerProvider";
import { MemoryRouter, Route, Routes } from "react-router";
import Cookies from "js-cookie";

import { mockBookLists } from "../../../test/mocks/bookListsMock";
import { bookMock } from "../../../test/mocks/bookMock";
import { addBookToList, removeBookFromList } from "../../utils/requests";

jest.mock("../../utils/requests", () => ({
  addBookToList: jest.fn(),
  removeBookFromList: jest.fn(),
}));

const renderComponent = ({ isVisible = false, message }) => {
  Cookies.set("userId", mockBookLists[0].user_id);
  Cookies.set("currentBookList", mockBookLists[0].name.toLowerCase());
  fetch.mockResponse(JSON.stringify(mockBookLists));

  return render(
    <BookTrackerProvider value={{ lists: mockBookLists }}>
      <MemoryRouter initialEntries={["/reading"]}>
        <Routes>
          <Route
            path="/:name"
            element={
              <ConfirmationModal
                isVisible={isVisible}
                hideModal={jest.fn()}
                message={message}
                book={bookMock}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </BookTrackerProvider>,
  );
};

describe("ConfirmationModal", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("When isVisible is set to false, it does not display the modal", async () => {
    const { queryByTestId } = renderComponent({ message: "add" });

    await waitFor(() => {
      expect(queryByTestId("confirmation-modal")).toBeFalsy();
    });
  });

  describe("When isVisible is set to true", () => {
    it.each([
      ["add", "Do you want to add:"],
      ["delete", "Do you want to delete:"],
    ])(
      "and the command is to %s, the message displayed should be: %s",
      (str, expectedText) => {
        const { queryByTestId, getByText } = renderComponent({
          isVisible: true,
          message: str,
        });

        waitFor(() => {
          expect(queryByTestId("confirmation-modal")).toBeTruthy();
          expect(getByText(expectedText)).toBeTruthy();
        });
      },
    );
  });

  describe('When the message is "add"', () => {
    it("it calls addBookToList with the correct arguments", async () => {
      const { getByTestId } = renderComponent({
        isVisible: true,
        message: "add",
      });

      fetch.mockResponseOnce(JSON.stringify({ book: bookMock }));
      const acceptButton = await getByTestId(
        "confirmation-modal-accept-button",
      );

      await userEvent.click(acceptButton);

      waitFor(() => {
        expect(addBookToList).toHaveBeenCalledWith(
          mockBookLists[0].user_id.toString(),
          mockBookLists[0].id,
          bookMock,
        );
      });
    });
  });

  describe('When the message is "delete"', () => {
    it("it calls removeBookToList with the correct arguments", async () => {
      const { findByTestId } = renderComponent({
        isVisible: true,
        message: "delete",
      });

      fetch.mockResponseOnce(JSON.stringify({ book_id: bookMock.id }));
      const acceptButton = await findByTestId(
        "confirmation-modal-accept-button",
      );

      await userEvent.click(acceptButton);

      await waitFor(() => {
        expect(removeBookFromList).toHaveBeenCalledWith(
          mockBookLists[0].user_id.toString(),
          mockBookLists[0].id,
          bookMock.id,
        );
      });
    });
  });
});
