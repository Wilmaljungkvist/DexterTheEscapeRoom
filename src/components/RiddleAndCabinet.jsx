// RiddleAndCabinet.js
import React, { useState } from 'react'
import RiddleGame from './Riddle'

/**
 *
 * @param root0
 * @param root0.isCabinetOpen
 * @param root0.handleRiddleSolved
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
   * Handles if the riddle is solved.
   *
   * @param {boolean} solved - Is true if the riddle is solved.
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
