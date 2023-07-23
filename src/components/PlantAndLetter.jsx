/* eslint-disable jsdoc/no-undefined-types */
import React, { useState } from 'react'

/**
 *
 * @param root0
 * @param root0.plantPressed
 * @param root0.plantClicked
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
