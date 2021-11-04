import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

/**
 * Spec
 *
 * - there is a form with three input fields
 *    - Name: text input (default value: "")
 *    - Age: number input (default value: 0)
 *    - Location: select input (default value: none)
 * - Age input has minimum threshold of 0
 * - when submit is pressed,
 *    - the values of input is asynchronously added to data
 *    - the input is cleared
 *    - while waiting for data addition, the table shows spinner
 * - upon successful addition of data,
 *    - the spinner is removed and new row is added to table
 *
 */

test("renders learn react link", () => {
  const { debug, container } = render(<App />);
  debug(container);
});
