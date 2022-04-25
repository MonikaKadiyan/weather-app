import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

// Things to test
// 1. I want to see the search input
test('App component renders correctly', () => {
  render(<App />)
  const inputNode = screen.getByPlaceholderText('Search...')
  expect(inputNode)
})
// What are you trying to do ?//i am trying to find tag input by placeholder text that will assure me of search bar. we already found it . What next assertion
// 2. I want to type and see the results

// Get the component to be tested
// get the library to test with

// Render the component

// Before rendering, find out the  dependencies component need to render. Dependecny refer to any code which is supplied to our component from other files or 3rd party library. In our case - look for the code which you have not written and you are using it - fetch is one dependecy. api is also outside component

// Once component is rendered, list down the user behaviours you want to test
