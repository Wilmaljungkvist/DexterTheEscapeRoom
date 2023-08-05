/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import RiddleAndCabinet from '.RiddleAndCabinet'

/**
 * Component for the Puzzle and cabinet.
 *
 * @returns {JSX.Element} - The JSX element representing the PuzzleAndCabinet component.
 */
function Plant () {
  const [displayText, setDisplayText] = useState('')

  /**
   * Handles when the plant is clicked on.
   */
  function handlePlantClick () {
    setDisplayText('Hm, det fanns inget i krukan.')
    setTimeout(() => {
      setDisplayText('')
    }, 3000)
  }

  return (
    <>
      <img
        className="plant-image"
        src="./img/plant.png"
        onClick={handlePlantClick}
        alt="En bild på en växt med en brun kruka och stora gröna blad."
      />
      {displayText && (
        <p
        className="display-text"
        >
          {displayText}
        </p>
      )}
    </>
  )
}

export default Plant
