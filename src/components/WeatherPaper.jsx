/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

/**
 * First room component.
 *
 * @param root0
 * @param root0.isRiddleSolved
 * @returns {JSX.Element} - The JSX element representing the FirstRoom component.
 */
function WeatherPaper ({ isCabinetOpen }) {
  const [paperClicked, setPaperClicked] = useState(false)

  /**
   * Handle click on paper.
   */
  function HandleClickPaper () {
    setPaperClicked(true)
  }

  return (
    <div>

      {!paperClicked && isCabinetOpen && (
        <img
          className="paper-image"
          src='./img/paper.png'
          alt="Ett papper som ligger på golvet i källaren."
          onClick={HandleClickPaper}
        />
      )}

      {paperClicked && (
        <div>
          <img
            className="weather-paper"
            src='./img/weather.png'
            alt="Inzoomad bild på pappret som låg på golvet, fyra solar med olika många solstrålar."
          />
          <button
            onClick={() => setPaperClicked(false)}
            style={{
              position: 'absolute',
              top: '230px',
              right: '500px'
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  )
}

export default WeatherPaper
