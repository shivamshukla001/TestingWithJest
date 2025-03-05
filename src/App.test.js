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