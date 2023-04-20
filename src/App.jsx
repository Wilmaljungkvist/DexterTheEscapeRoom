import { useState } from 'react'
import Message from './Message.jsx'
import Header from './Header.jsx'
import Backstory from './backstory.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Message words="I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?" answer="pencil"></Message>
      <Backstory></Backstory>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
