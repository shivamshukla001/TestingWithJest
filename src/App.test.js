import { render, screen } from "@testing-library/react";
import App from "./App";

test("should first", () => {
  render(<App />);

  let inputType = screen.getByRole("textbox");

  let inputTypePlaceholder = screen.getByPlaceholderText("Enter Name");
  expect(inputType).toBeInTheDocument();
  expect(inputTypePlaceholder).toBeInTheDocument();
  expect(inputType).toHaveAttribute("id", "id");
  expect(inputType).toHaveAttribute("name", "username");
});
test("should second", () => {
  render(<App />);

  let inputType = screen.getByRole("textbox");

  let inputTypePlaceholder = screen.getByPlaceholderText("Enter Name");
  expect(inputType).toBeInTheDocument();
  expect(inputTypePlaceholder).toBeInTheDocument();
  expect(inputType).toHaveAttribute("id", "id");
  expect(inputType).toHaveAttribute("name", "username");
});

describe.only("UI Development Test Case", () => {
  test("Logo Testing", () => {
    render(<App />);
    let input = screen.getByPlaceholderText("Enter Name");
    expect(input).toBeInTheDocument();
  });

  test("React Testing", () => {
    render(<App />);
    let input = screen.getByPlaceholderText("Enter Name");
    expect(input).toBeInTheDocument();
  });

  test("Api Testing", () => {
    render(<App />);
    let input = screen.getByPlaceholderText("Enter Name");
    expect(input).toBeInTheDocument();
  });
});

describe.skip("Ux Development Test Case", () => {
  test("Logo Testing", () => {
    render(<App />);
    let input = screen.getByPlaceholderText("Enter Name");
    expect(input).toBeInTheDocument();
  });

  test("React Testing", () => {
    render(<App />);
    let input = screen.getByPlaceholderText("Enter Name");
    expect(input).toBeInTheDocument();
  });

  test("Api Testing", () => {
    render(<App />);
    let input = screen.getByPlaceholderText("Enter Name");
    expect(input).toBeInTheDocument();
  });
});
