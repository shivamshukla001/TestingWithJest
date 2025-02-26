import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("testing Group", () => {
  test("first test", () => {
    render(<App/>)
    let data = screen.getByText("this is describe paragraph");

    expect(data).toBeInTheDocument(); 
  }
  )
  test("Second Test",()=>{
    render(<App/>)
    let newData = screen.getByAltText("Ai Image")
    expect(newData).toBeInTheDocument()
  })
})