import { fireEvent, render, screen } from "@testing-library/react";
import {App} from './App'

test("Changes in event", ()=> {
  render(<App/>);
  let input = screen.getByRole('textbox')
  fireEvent.change(input,{target:{value:"xyz"}});
 
  
  expect(input.value).toBe('xyz')
})