import { fireEvent, render, screen } from "@testing-library/react";
import { App } from './App'
import cleanDb from "./service";

beforeAll(() => {
  // console.log("******* BEFORE ALL *****");
  cleanDb()
})
beforeEach(() => {
  // console.log("***** BEFORE EACH *****");
  cleanDb()
})

test("Changes in event 1", () => {
  console.log("Tast Case 1");

  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn)
  expect(screen.getByText("hello World")).toBeInTheDocument();
})
test("Changes in event 2", () => {
  console.log("Tast Case 2");
  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn)
  expect(screen.getByText("hello World")).toBeInTheDocument();
})
test("Changes in event 3", () => {
  console.log("Tast Case 3");
  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn)
  expect(screen.getByText("hello World")).toBeInTheDocument();
})


afterAll(() => {
  console.log("After All");

})

afterEach(() => {
  console.log("After each");

})