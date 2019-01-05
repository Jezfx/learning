import React from "react";
import { render, fireEvent } from "react-testing-library";
import App from "./App";

test("is should increment when clicked on button", () => {
  const { container } = render(<App />);
  const button = container.firstChild;

  expect(button.textContent).toBe("0");

  console.log(button.textContent);

  fireEvent.click(button);
  // expect(button.textContent).toBe("1");
});
