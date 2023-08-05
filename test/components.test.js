import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
// eslint-disable-next-line no-unused-vars
import LastRoom from '../src/components/LastRoom'
// eslint-disable-next-line no-unused-vars
import Safe from '../src/components/Safe'

test('renders LastRoom component correctly', () => {
  const component = renderer.create(<LastRoom />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders Safe component correctly', () => {
  const password = 'correctPassword'
  const whenSolved = jest.fn()
  const { container } = render(<Safe password={password} whenSolved={whenSolved} />)
  expect(container).toBeDefined()
})
