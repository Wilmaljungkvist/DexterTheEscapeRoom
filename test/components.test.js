import React from 'react'
import renderer from 'react-test-renderer'
import LastRoom from '../src/lastRoom'
import Backstory from '../src/backstory'
import Endstory from '../src/endstory'
import firstRoom from '../src/firstRoom'
import PuzzleGame from '../src/puzzleGame'
import TitleScreen from '../src/titleScreen'

describe('LastRoom component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<LastRoom />).toJSON()
    expect(tree)
  })
})

test('password submission with correct password should open the safe', () => {
  const component = renderer.create(<LastRoom />);
  const instance = component.root;
  const event = { target: { value: '6743' }, preventDefault: jest.fn() };

  const inputElement = instance.findByProps({ id: 'passwordInput' });
  inputElement.props.onChange(event);
  
  const formElement = instance.findByType('form');
  formElement.props.onSubmit(event);

  expect(instance.findByProps({ className: 'safe' })).toBeFalsy();
});
