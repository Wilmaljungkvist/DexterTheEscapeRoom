/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import RiddleGame from './RiddleGame'
// eslint-disable-next-line no-unused-vars
import WeatherPaper from './WeatherPaper'

/**
 * Component for the Riddle and cabinet.
 *
 * @param {object} props - The props object.
 * @param {Function} props.handleRiddleSolved - Callback function called when the riddle is solved.
 * @param {boolean} props.isCabinetOpen - Is true when the cabinet is opened.
 * @returns {JSX.Element} - The JSX element representing the RiddleAndCabinet component.
 */
function RiddleAndCabinet ({ isCabinetOpen, handleRiddleSolved }) {
  const [isCabinetClicked, setIsCabinetClicked] = useState(false)
  const riddleAnswer = 'ingenting'

  /**
   * Handles click on cabinet.
   */
  function cabinetClicked () {
    setIsCabinetClicked(true)
  }

  /**
   * Handles when the riddle is solved.
   *
   * @param {boolean} solved - Is true when the riddle is solved.
   */
  function handleRiddleSolvedInternal (solved) {
    if (solved) {
      setIsCabinetClicked(false)
      handleRiddleSolved(solved)
    }
  }

  return (
    <>
      {!isCabinetOpen && (
        <img
          className="cabinet-first"
          src='./img/cabinet.png'
          alt="Bild på ett skåp med två luckor."
          onClick={cabinetClicked}
        />
      )}
      <WeatherPaper isCabinetOpen={isCabinetOpen}></WeatherPaper>
      {isCabinetClicked && !isCabinetOpen && (
        <div className="riddle-div">
          <button
            onClick={() => setIsCabinetClicked(false)}
            style={{
              position: 'absolute',
              left: '100%'
            }}
          >
            X
          </button>
          <RiddleGame
            riddleAnswer={riddleAnswer}
            question="Fattiga har mig, rika behöver mig. Äter du mig dör du. Vad är jag?"
            whenSolved={handleRiddleSolvedInternal}
          />
        </div>
      )}
    </>
  )
}

export default RiddleAndCabinet
