/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Endstory from './Endstory'
// eslint-disable-next-line no-unused-vars
import PuzzleGame from './PuzzleGame'

/**
 * LastRoom component.
 *
 * @returns {JSX.Element} - The JSX element representing the LastRoom component.
 */
function LastRoom () {
  const [hasKey, setHasKey] = useState(false)
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const [pickKey, setPickKey] = useState(false)
  const [clickSafe, setClickSafe] = useState(false)
  const [openSafe, setOpenSafe] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [plantPressed, setPlantPressed] = useState(false)
  const [isCabinetOpen, setIsCabinetOpen] = useState(false)
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false)
  const [hasDoorKey, setHasDoorKey] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const password = '6743'

  /**
   * Function that sets pickKey and hasKey to true if key is picked up.
   */
  function pickUpKey () {
    setPickKey(true)
    setHasKey(true)
  }

  /**
   * Handles the door key when it is picked up.
   */
  function pickUpDoorKey () {
    setHasDoorKey(true)
  }

  /**
   * Handles the safe when it's clicked.
   */
  function handleSafeClick () {
    setClickSafe(true)
  }

  /**
   * Handles the door when it's clicked.
   */
  function handleDoorClick () {
    if (hasDoorKey) {
      setIsDoorOpen(true)
    } else {
      setDisplayText('Dörren är låst.')
      setTimeout(() => {
        setDisplayText('')
      }, 3000)
    }
  }

  /**
   * Handles change in input of the password.
   *
   * @param {*} event - The password event.
   */
  function handleInputChange (event) {
    setInputValue(event.target.value)
  }

  /**
   * Handles the submitted password.
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
   * Handles the cabinet when it's clicked.
   */
  function clickCabinet () {
    if (hasKey) {
      setIsCabinetOpen(true)
    } else {
      setDisplayText('Skåpet är låst.')
      setTimeout(() => {
        setDisplayText('')
      }, 3000)
    }
  }

  /**
   * Handles when the keypad should be seeen.
   */
  function handleKeyPad () {
    setClickSafe(false)
    setInputValue('')
  }

  if (isDoorOpen) {
    return <Endstory></Endstory>
  }

  /**
   * Handles when the plant is clicked.
   */
  function plantClicked () {
    setPlantPressed(true)
  }

  /**
   * Is true when the puzzle is solved.
   *
   * @param {boolean} isSolved - Shows if the puzzle is solved.
   */
  function handlePuzzleSolved (isSolved) {
    setIsPuzzleSolved(isSolved)
  }

  return (
    <div>
      <img
        className="background-image"
        src="./img/last.png"
        alt="Bild på sista rummet som består av en dörr och två tavlor på väggen. Tavlorna föreställer ett berg och en med fyra blommor."
        useMap="#doormap"
      />
      <map name="doormap" cursor="pointer" style={{ backgroundColor: 'black' }}>
        <area shape="rect" coords="680,100,1000,650" alt="test" onClick={handleDoorClick} />
      </map>

      {!pickKey && openSafe && (
        <img
          className="key-image"
          src="./img/key.png"
          onClick={pickUpKey}
          alt="Nyckeln till skåpet."
        />
      )}

      {!isPuzzleSolved && (
        <img
          className="cabinet-image"
          src='./img/cabinet.png'
          alt="Bild på ett skåp med två luckor."
          onClick={clickCabinet}
        />
      )}

      {isCabinetOpen && !hasDoorKey && (
        <div className='puzzle-div'>
          <PuzzleGame onPuzzleSolved={handlePuzzleSolved} />
        </div>
      )}

      {!openSafe && (
        <img
          className='safe-image'
          src="./img/safe.png"
          onClick={handleSafeClick}
          alt="Ett kassaskåp som måste öppnas med en kod."
        />
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
      <img
        className="plant-image"
        src="./img/plant.png"
        onClick={plantClicked}
        alt="En stor grön växt i en kruka."
      />
      {plantPressed && (
        <div style={{ position: 'relative' }}>
          <img
            className="letter-image"
            src='./img/letter.png'
            alt="Ett brev med siffror och en tillhörande färg."
          />
          <button
            onClick={() => setPlantPressed(false)}
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
      {isPuzzleSolved && !hasDoorKey && (
        <img
          className="door-key"
          src="./img/key.png"
          onClick={pickUpDoorKey}
          alt="Nyckeln till dörren"
        />
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

export default LastRoom
