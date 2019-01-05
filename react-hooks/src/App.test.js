import React from "react";
import { render, fireEvent } from "react-testing-library";
import App from "./App";

afterEach(() => {
  window.localStorage.removeItem("counter");
});

test("is should increment when clicked on button", () => {
  window.localStorage.setItem("counter", 0);
  const { container, rerender } = render(<App />);
  const button = container.firstChild;

  expect(button.textContent).toBe("0");

  console.log(button.textContent);

  fireEvent.click(button);

  // rerender(<App />);
  // expect(button.textContent).toBe("1");
});
