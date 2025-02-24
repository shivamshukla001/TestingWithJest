import {render, screen} from '@testing-library/react'
import App from './App'

test('should first', () => { 
  render(<App/>);
  let text = screen.getByText(/First React Test Case/i)
  let text2 = screen.getByTitle("AI Generated Image")
  let input = screen.getByPlaceholderText("Enter Your Name")

  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(input).toBeInTheDocument();

 })

