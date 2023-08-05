/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'

/**
 * Component for the Plant.
 *
 * @returns {JSX.Element} - The JSX element representing the Plant component.
 */
function Plant () {
  const [displayText, setDisplayText] = useState('')
  const [clickPlant, setClickPlant] = useState(false)

  /**
   * Handles when the plant is clicked.
   */
  function handlePlantClick () {
    setClickPlant(true)
    setDisplayText('Ledtråd: Jag är varken ett objekt eller en substans, men jag påverkar alla människor och saker omkring oss.')
  }

  /**
   * Handles when the close button is clicked.
   * Closes the div and hides the text.
   */
  function handleCloseClick () {
    setClickPlant(false)
    setDisplayText('')
  }

  return (
    <>
      {clickPlant && displayText && (
        <div className="plant-div">
          <button className="close-button" onClick={handleCloseClick}>
            X
          </button>
          <p className="backstory-text">{displayText}</p>
        </div>
      )}
      <img
        className="plant-image"
        src="./img/plant.png"
        onClick={handlePlantClick}
        alt="En bild på en växt med en brun kruka och stora gröna blad."
      />
    </>
  )
}

export default Plant
