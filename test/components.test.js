import React from 'react'
import renderer from 'react-test-renderer'
import LastRoom from '../src/LastRoom'
import Backstory from '../src/Backstory'
import Endstory from '../src/Endstory'
import firstRoom from '../src/FirstRoom'
import PuzzleGame from '../src/PuzzleGame'
import TitleScreen from '../src/TitleScreen'

describe('LastRoom component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<LastRoom />).toJSON()
    expect(tree)
  })
})

test('password submission with correct password should open the safe', () => {
  const component = renderer.create(<LastRoom />)
  const instance = component.root
  const event = { target: { value: '6743' }, preventDefault: jest.fn() }

  const inputElement = instance.findByProps({ id: 'passwordInput' })
  inputElement.props.onChange(event)

  const formElement = instance.findByType('form')
  formElement.props.onSubmit(event)

  expect(instance.findByProps({ className: 'safe' })).toBeFalsy()
})
