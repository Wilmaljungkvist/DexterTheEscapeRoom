/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import LastRoom from './LastRoom'
// eslint-disable-next-line no-unused-vars
import RiddleGame from './Riddle'

/**
 * First room component.
 *
 * @returns {JSX.Element} - The JSX element representing the FirstRoom component.
 */
function FirstRoom () {
  const [hasKey, setHasKey] = useState(false)
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const [pickKey, setPickKey] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [clickSafe, setClickSafe] = useState(false)
  const [openSafe, setOpenSafe] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isCabinetOpen, setIsCabinetOpen] = useState(false)
  const [isCabinetClicked, setIsCabinetClicked] = useState(false)
  const [riddleSolved, setRiddleSolved] = useState(false)
  const [paperClicked, setPaperClicked] = useState(false)
  const password = '4829'
  const riddleAnswer = 'ingenting'

  /**
   * Handles key pickup.
   */
  function pickUpKey () {
    setPickKey(true)
    setHasKey(true)
  }

  /**
   * Handles the cabinet if the riddle is solved.
   *
   * @param {boolean} solved - Is true if the riddle is solved.
   */
  function handleRiddleSolved (solved) {
    if (solved) {
      setRiddleSolved(solved)
      setIsCabinetOpen(solved)
    }
  }

  /**
   * Handles change in password input.
   *
   * @param {*} event - The password event.
   */
  function handleInputChange (event) {
    setInputValue(event.target.value)
  }

  /**
   * Handles click on safe.
   */
  function handleSafeClick () {
    setClickSafe(true)
  }

  /**
   * Handles password input.
   *
   * @param {*} event - The submit event.
   */
  function handleSubmit (event) {
    event.preventDefault()
    if (inputValue === password) {
      setOpenSafe(true)
    } else {
      setInputValue('')
      setDisplayText('Fel lösenord, försök igen.')
      setTimeout(() => {
        setDisplayText('')
      }, 3000)
    }
  }

  /**
   * Handles click on the door.
   */
  function handleDoorClick () {
    if (hasKey) {
      setIsDoorOpen(true)
    } else {
      setDisplayText('Dörren är låst.')
      setTimeout(() => {
        setDisplayText('')
      }, 3000)
    }
  }

  /**
   * Handles click on the plant.
   */
  function handlePlantClick () {
    setDisplayText('Hm, det fanns inget i krukan.')
    setTimeout(() => {
      setDisplayText('')
    }, 3000)
  }

  /**
   * Handles click on the painting.
   */
  function handlePaintingClick () {
    setDisplayText('Tavlan sitter fast, den går inte att ta loss.')
    setTimeout(() => {
      setDisplayText('')
    }, 3000)
  }

  /**
   * Handles click on cabinet.
   */
  function cabinetClicked () {
    setIsCabinetClicked(true)
  }

  /**
   * Handles when keypad should be seen.
   */
  function handleKeyPad () {
    setClickSafe(false)
    setInputValue('')
  }

  if (isDoorOpen) {
    return <LastRoom />
  }
  /**
   * Handle click on paper.
   */
  function HandleClickPaper () {
    setPaperClicked(true)
  }

  return (
    <div>
      <img
      className="background-image"
      src="./img/basement.png"
      alt="En källare med en dörr, en färgburk och ett hål bredvid dörren. Kattavtryck syns från färgen till hålet."
      useMap="#doormap"
       />
      <map name='doormap' cursor='pointer'>
        <area shape='rect' coords="900,200,1150,550" alt='En mappning utav dörren i källaren.' onClick={handleDoorClick} />
      </map>
      {isCabinetClicked && !riddleSolved && (
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
          <RiddleGame riddleAnswer={riddleAnswer}
            question="Fattiga har mig, rika behöver mig. Äter du mig dör du. Vad är jag?"
            whenSolved={handleRiddleSolved}></RiddleGame>
        </div>
      )}
      <img
        className="plant-image"
        src="./img/plant.png"
        onClick={handlePlantClick}
        alt="En bild på en växt med en brun kruka och stora gröna blad."
      />
      {!riddleSolved && (
        <img
          className="cabinet-first"
          src='./img/cabinet.png'
          alt="Bild på ett brunt skåp med två luckor."
          onClick={cabinetClicked}
        />
      )}
      {!openSafe && (
        <img
          className='safe-image'
          src="./img/safe.png"
          onClick={handleSafeClick}
          alt="Bild på ett grått kassaskåp som öppnas med en kod."
        />
      )}
      {!pickKey && openSafe && (
        <img
          className="key-image"
          src="./img/key.png"
          onClick={pickUpKey}
          alt="Bild på en nyckel till dörren."
        />
      )}

      <img
        className="painting"
        src="./img/painting.png"
        onClick={handlePaintingClick}
        alt="Bild på en tavla med en solros."
      />

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
            onClick={cabinetClicked}
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

      {clickSafe && !openSafe && (
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="passwordInput" style={{ fontSize: '20px', marginBottom: '10px', fontFamily: 'myfont' }}>Enter password:</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '10px' }}>
            <input className='input' id="passwordInput" type="password" value={inputValue} onChange={handleInputChange} />
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <button
                key={number}
                className="key-btn"
                type="button"
                onClick={() => setInputValue(inputValue + number)}
              >
                {number}
              </button>
            ))}
            <button
              className="key-btn"
              type="button"
              onClick={() => setInputValue(inputValue.slice(0, -1))}
            >
              radera
            </button>
            <button className="submit-btn" type="submit">OK</button>
            <button className="submit-btn" type="button" onClick={handleKeyPad}>X</button>
          </div>
        </form>
      )}

      {displayText && (
        <p
        className="display-text"
        >
          {displayText}
        </p>
      )}
    </div>
  )
}

export default FirstRoom
