<<<<<<< HEAD
import {fireEvent, render, screen} from '@testing-library/react'
import App from './App'
import handleReturnStatement from './helper';


test("Functional COmponent Testing", ()=>{
  render(<App/>)
    let btn = screen.getByTestId("btn");
    fireEvent.click(btn);
    expect(screen.getByText("hiii")).toBeInTheDocument()

})

test("functional return method testing", ()=>{
  expect(handleReturnStatement()).toMatch("hii")
})
=======
import { fireEvent, render, screen } from "@testing-library/react";
import { App } from './App'
import cleanDb from "./service";



test("Changes in event 1", () => {
  console.log("Tast Case 1");

 const container=  render(<App />);
 expect(container).toMatchSnapshot();
  
})



>>>>>>> 1c955688edb5f7cfe7b9adbf5ba87c145cbc115a
