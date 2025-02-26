import { fireEvent, render, screen } from "@testing-library/react";
import { App } from './App'
import cleanDb from "./service";



test("Changes in event 1", () => {
  console.log("Tast Case 1");

 const container=  render(<App />);
 expect(container).toMatchSnapshot();
  
})



