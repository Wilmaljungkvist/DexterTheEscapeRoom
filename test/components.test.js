import React from 'react'
import renderer from 'react-test-renderer'
import LastRoom from '../src/components/LastRoom'

test('password submission with correct password should open the safe', () => {
  const component = renderer.create(<LastRoom />)
  const instance = component.root
  const event = { target: { value: '6743' }, preventDefault: jest.fn() }

  const inputElement = instance.findByProps({ id: 'passwordInput' })
  inputElement.props.onChange(event)

  const buttonElement = instance.findByProps({ type: 'submit' })
  buttonElement.props.onClick(event)

  expect(instance.findByProps({ className: 'safe' })).toBeFalsy()
})
