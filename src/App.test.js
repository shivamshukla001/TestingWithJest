import { fireEvent, render, screen } from "@testing-library/react";
import {App} from './App'

test("Changes in event", ()=> {
  render(<App/>);
  let btn = screen.getByRole("button");
  fireEvent.click(btn)
  expect(screen.getByText("hello World")).toBeInTheDocument();
})