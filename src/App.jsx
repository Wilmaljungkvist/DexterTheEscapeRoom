import { useState } from 'react'
import Message from './Message.jsx'
import Header from './Header.jsx'
import TitleScreen from './titleScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      {/* <Message words="I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?" answer="pencil"></Message> */}
      <TitleScreen></TitleScreen>
    </div>
  )
}

export default App
