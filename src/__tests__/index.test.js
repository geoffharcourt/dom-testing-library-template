import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../'

test('increments the count', () => {
  const {getByTestId} = render(<Counter />)
  const button = getByTestId('my-test-id')
  fireEvent.click(button)
  expect(button).toHaveTextContent('1')
  fireEvent.click(button)
  expect(button).toHaveTextContent('2')
})
