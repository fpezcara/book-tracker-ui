import { render } from "@testing-library/react";
import Button from "./";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Button", () => {
  it("renders correctly with given props", () => {
    const { container, getByText } = render(
      <Button
        title="accept"
        className="button accept"
        onClickHandler={jest.fn()}
        dataTestId="test-button"
      />,
    );

    expect(container).toMatchSnapshot();
    expect(getByText(/accept/i)).toBeVisible();
    expect(container.querySelector(".button.accept")).toBeInTheDocument();
  });

  it("calls onClickButton when button is clicked", async () => {
    const onClickButton = jest.fn();
    const { getByText } = render(
      <Button
        title="test"
        className="button accept"
        value="/testing"
        onClickHandler={onClickButton}
        dataTestId="test-button"
      />,
    );

    await userEvent.click(getByText(/test/i));

    expect(onClickButton).toHaveBeenCalledTimes(1);
  });

  describe("Navigation", () => {
    it("does not navigate if no value is provided", async () => {
      const { getByText } = render(
        <Button
          title="test"
          className="button accept"
          onClickHandler={jest.fn()}
          dataTestId="test-button"
        />,
      );

      await userEvent.click(getByText(/test/i));
      expect(mockNavigate).not.toHaveBeenCalled();
    });

    it("does navigates if value is provided", async () => {
      const { getByText } = render(
        <Button
          title="test"
          className="button accept"
          value="/testing"
          onClickHandler={jest.fn()}
          dataTestId="test-button"
        />,
      );

      await userEvent.click(getByText(/test/i));
      expect(mockNavigate).toHaveBeenCalledWith("/testing");
    });
  });
});
