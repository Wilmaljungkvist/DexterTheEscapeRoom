// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

/**
 * RiddleGame component represents a riddle game.
 *
 * @param {object} props - The props object.
 * @param {string} props.riddleAnswer - The correct answer to the riddle.
 * @param {Function} props.whenSolved - Callback function called when the riddle is solved.
 * @param {string} props.question - The riddle question.
 * @returns {JSX.Element} - The JSX element representing the About component.
 */
function RiddleGame ({ riddleAnswer, whenSolved, question }) {
  const [answer, setAnswer] = useState('')

  /**
   * Handles the form submission.
   *
   * @param {Event} event - The form submission event.
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
   * Handles the input change.
   *
   * @param {Event} event - The input change event.
   */
  const handleInputChange = (event) => {
    setAnswer(event.target.value)
  }

  return (
    <div className="riddle">
      <p className="riddlequestion">{question}</p>
      <form className="riddlesubmit" onSubmit={handleSubmit}>
        <label className="riddlelabel" htmlFor="answerInput">
          Lös gåtan för att komma in i skåpet:
        </label>
        <input
          className="riddleinput"
          type="text"
          id="answerInput"
          value={answer}
          onChange={handleInputChange}
        />
        <button className="riddlebutton" type="submit">
          Är det rätt svar?
        </button>
      </form>
    </div>
  )
}

export default RiddleGame
