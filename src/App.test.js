import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";

/**
 * Spec
 *
 * - there is a form with three input fields
 *    - Name: text input (default value: "")
 *    - Age: number input (default value: 0)
 *    - Location: select input (default value: none)
 * - shows initial value
 * - Age input has minimum threshold of 0
 * - when submit is pressed,
 *    - the values of input is asynchronously added to data
 *    - the input is cleared
 *    - while waiting for data addition, the table shows spinner
 * - upon successful addition of data,
 *    - the spinner is removed and new row is added to table
 *
 */

test("renders default values", () => {
  const { debug, container, getByRole } = render(<App />);
  const nameInput = getByRole("textbox", { name: "Name" });
  expect(nameInput).toHaveValue("");
});

test("populates table", async () => {
  const { debug, container, getByRole, getByText, getByLabelText, findByText } =
    render(<App />);
  const nameInput = getByRole("textbox", { name: "Name" });
  userEvent.type(nameInput, "Harry potter");
  userEvent.click(getByRole("button", { name: "Add Item" }));
  await waitFor(() =>
    expect(screen.queryByRole("progressbar")).toBeInTheDocument()
  );

  await waitForElementToBeRemoved(getByRole("progressbar"));
  debug(container);

  expect(getByText("Harry potter")).toBeInTheDocument();
});
