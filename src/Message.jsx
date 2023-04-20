
import React, { useState } from 'react'

const Message = ({ words, answer }) => {
  const [guess, setGuess] = useState('')

  const handleChange = (event) => {
    setGuess(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (guess === answer) {
      alert('Congratulations! You solved the puzzle.');
    } else {
      alert('Sorry, that is not the correct answer. Please try again.')
    }
    setGuess('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Find the word:</h2>
      <p>{words}</p>
      <label>
        Your answer:
        <input type="text" value={guess} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Message
