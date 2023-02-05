import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("OTP input fields", () => {
  it("renders 4 input fields", () => {
    render(<App />);
    const inputFields = screen.getAllByTestId("otp-input");
    expect(inputFields).toHaveLength(4);
  });

  it("changes the value of the input fields on change", () => {
    render(<App />);
    const inputFields = screen.getAllByTestId("otp-input");
    fireEvent.change(inputFields[0], { target: { value: "1" } });
    expect(inputFields[0].value).toBe("1");
  });

  it("focuses on next input field on entering a value", () => {
    render(<App />);
    const inputFields = screen.getAllByTestId("otp-input");
    fireEvent.change(inputFields[0], { target: { value: "1" } });
    fireEvent.keyUp(inputFields[0], { keyCode: 13 });
    expect(document.activeElement).toBe(inputFields[1]);
  });

  it("focuses on previous input field on pressing backspace", () => {
    render(<App />);
    const inputFields = screen.getAllByTestId("otp-input");

    fireEvent.change(inputFields[1], { target: { value: "1" } });
    fireEvent.keyUp(inputFields[1], { keyCode: 8 });
    expect(document.activeElement).toBe(inputFields[0]);
  });
  it("input boxes must have length = 1", () => {
    render(<App />);
    const inputBoxes = screen.getAllByTestId("otp-input");
    inputBoxes.forEach((inputBox) => {
      fireEvent.change(inputBox, { target: { value: "1" } });
      expect(inputBox.value.length).toBe(1);
    });
  });
});
