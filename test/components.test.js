import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import LastRoom from '../src/components/LastRoom'

test('renders LastRoom component correctly', () => {
  const component = renderer.create(<LastRoom />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('entering incorrect password displays error message', () => {
  const { getByAltText, getByLabelText, getByText } = render(<LastRoom />)
  const safe = getByAltText('safe')

  fireEvent.click(safe)

  const passwordInput = getByLabelText('Enter password:')
  const okButton = getByText('OK')

  fireEvent.change(passwordInput, { target: { value: '1234' } })
  fireEvent.click(okButton)

  const errorMessage = getByText('Fel lösenord, försök igen.')
  expect(errorMessage).toBeTruthy()
})

