// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

/**
 *
 * @param root0
 * @param root0.riddleAnswer
 * @param root0.whenSolved
 */
function RiddleGame ({ riddleAnswer, whenSolved }) {
  const [answer, setAnswer] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    if(answer.toLowerCase() === riddleAnswer.toLowerCase()) {
        whenSolved()
    } else {
        setAnswer('')
    }
  }

  const handleInputChange = (event) => {
    setAnswer(event.target.value)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='answerInput'>Lös gåtan för att komma in i skåpet: </label>
            <input type="text" id="answerInput" value={answer} onChange={handleInputChange} />
            <button type="submit">Är det rätt svar?</button>
        </form>
    </div>
  )
}

export default RiddleGame
