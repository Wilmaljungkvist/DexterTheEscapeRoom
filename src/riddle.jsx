// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

/**
 *
 * @param root0
 * @param root0.riddleAnswer
 * @param root0.whenSolved
 * @param root0.question
 */
function RiddleGame ({ riddleAnswer, whenSolved, question }) {
  const [answer, setAnswer] = useState('')

  /**
   *
   * @param event
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (answer.toLowerCase() === riddleAnswer.toLowerCase()) {
      whenSolved(true)
    } else {
      setAnswer('')
    }
  }

  /**
   *
   * @param event
   */
  const handleInputChange = (event) => {
    setAnswer(event.target.value)
  }
  return (
        <div className="riddle">
            <p className="riddlequestion">{question}</p>
            <form className="riddlesubmit" onSubmit={handleSubmit}>
                <label className="riddlelabel" htmlFor='answerInput'>Lös gåtan för att komma in i skåpet: </label>
                <input className="riddleinput" type="text" id="answerInput" value={answer} onChange={handleInputChange} />
                <button className="riddlebutton" type="submit">Är det rätt svar?</button>
            </form>
        </div>
  )
}

export default RiddleGame
