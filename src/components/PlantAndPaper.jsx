/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

/**
 * Component for the plant and paper.
 *
 * @param {object} props - The props object.
 * @param {Function} props.plantClicked - Callback function called when the plant is clicked.
 * @param {boolean} props.plantPressed - Is true when plant is clicked.
 * @returns {JSX.Element} - The JSX element representing the PlantAndPaper component.
 */
function PlantAndPaper ({ plantPressed, plantClicked }) {
  const [showLetter, setShowLetter] = useState(false)

  /**
   * Hides the paper when the "X" button is clicked.
   */
  const hidePaper = () => {
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
            onClick={hidePaper}
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

export default PlantAndPaper
