import {render, screen}from '@testing-library/react';
import App from './App';

test('should first', () => { 
  render(<App/>)
  
  let inputType = screen.getByRole("textbox");

  let inputTypePlaceholder = screen.getByPlaceholderText("Enter Name")
  expect(inputType).toBeInTheDocument();
  expect(inputTypePlaceholder).toBeInTheDocument();
  expect(inputType).toHaveAttribute('id',"id")
  expect(inputType).toHaveAttribute('name',"username")

 })