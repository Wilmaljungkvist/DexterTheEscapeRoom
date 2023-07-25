/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

/**
 * A React component that represents a plant and a letter.
 *
 * @param {object} props - The props object.
 * @param {Function} props.plantPressed - Callback function called when the plant is pressed.
 * @param {Function} props.plantClicked - Callback function called when the plant is clicked.
 * @returns {JSX.Element} - The JSX element representing the PlantAndLetter component.
 */
function PlantAndLetter ({ plantPressed, plantClicked }) {
  const [showLetter, setShowLetter] = useState(false)

  /**
   * Handles hiding the letter when the "X" button is clicked.
   */
  const hideLetter = () => {
    setShowLetter(false)
  }

  return (
    <>
      <img
        className="plant-image"
        src="./img/plant.png"
        onClick={() => {
          plantClicked(true)
          setShowLetter(true)
        }}
        alt="En stor grön växt i en kruka."
      />
      {showLetter && (
        <div style={{ position: 'relative' }}>
          <img
            className="letter-image"
            src='./img/letter.png'
            alt="Ett brev med siffror och en tillhörande färg."
          />
          <button
            onClick={hideLetter}
            style={{
              position: 'absolute',
              top: '230px',
              left: '60%'
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  )
}

export default PlantAndLetter
