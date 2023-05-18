// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Endstory from './endstory'
// eslint-disable-next-line no-unused-vars
import PuzzleGame from './puzzleGame'

/**
 * First room component.
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
  const [pickDoorKey, setPickDoorKey] = useState(false)
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
   * Function that sets pickDoorKey and hasDoorKey to true if key is picked up.
   */
  function pickUpDoorKey () {
    setPickDoorKey(true)
    setHasDoorKey(true)
  }

  /**
   * Function for what happens when the safe is clicked.
   */
  function handleSafeClick () {
    setClickSafe(true)
  }

  /**
   * Function for when the door is clicked.
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
   * Function for when a password is inputed.
   *
   * @param {*} event - The password event.
   */
  function handleInputChange (event) {
    setInputValue(event.target.value)
  }

  /**
   * Function for when the password is submitted.
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
   *
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
   *
   */
  function handleKeyPad () {
    setClickSafe(false)
    setInputValue('')
  }

  if (isDoorOpen) {
    return <Endstory></Endstory>
  }

  /**
   *
   */
  function plant () {
    setPlantPressed(true)
  }

  /**
   *
   * @param isSolved
   */
  function handlePuzzleSolved (isSolved) {
    setIsPuzzleSolved(isSolved)
  }

  return (
    <div>
      <img
        className="basement"
        src="./img/last.png"
        alt="Basement"
        useMap="#doormap"
      />
      <map name="doormap" cursor="pointer" style={{ backgroundColor: 'black' }}>
        <area shape="rect" coords="680,100,1000,650" alt="test" onClick={handleDoorClick} />
      </map>

      {!pickKey && openSafe && (
        <img
        className="key"
          src="./img/key.png"
          onClick={pickUpKey}
          alt="key"
        />
      )}

      {!isPuzzleSolved && (
  <img
      className="cabinet"
      src='./img/cabinet.png'
      alt="letter"
      onClick={clickCabinet}
    />
      )}

{isCabinetOpen && !hasDoorKey && (
  <div className='puzzle'>
  <PuzzleGame onPuzzleSolved={handlePuzzleSolved} />
</div>
)}

      {!openSafe && (
      <img
      className='safe'
        src="./img/safe.png"
        onClick={handleSafeClick}
        alt="safe"
      />
      )}

      {clickSafe && !openSafe && (
  <form className='form' onSubmit={handleSubmit}>
    <label htmlFor="passwordInput" style={{ fontSize: '20px', marginBottom: '10px', fontFamily: 'myfont' }}>Enter password:</label>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '10px' }}>
      <input className='input' id="passwordInput" type="password" value={inputValue} onChange={handleInputChange} />
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue + '1')}>1</button>
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue + '2')}>2</button>
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue + '3')}>3</button>
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue + '4')}>4</button>
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue + '5')}>5</button>
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue + '6')}>6</button>
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue + '7')}>7</button>
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue + '8')}>8</button>
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue + '9')}>9</button>
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue + '0')}>0</button>
      <button className="keybtn" type="button" onClick={() => setInputValue(inputValue.slice(0, -1))}>delete</button>
      <button className="subbtn" type="submit">OK</button>
      <button className="subbtn" type="button" onClick={handleKeyPad}>X</button>
    </div>
  </form>
      )}
      <img
        className="plant"
        src="./img/plant.png"
        onClick={plant}
        alt="plant"
      />
      {plantPressed && (
  <div style={{ position: 'relative' }}>
    <img
      className="letter"
      src='./img/letter.png'
      alt="letter"
    />
    <button
      onClick={() => setPlantPressed(false)}
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
      {isPuzzleSolved && !hasDoorKey && (
        <img
        className="doorkey"
        src="./img/key.png"
        onClick={pickUpDoorKey}
        alt="key"
      />
      )}
      {displayText && (
        <p
          style={{
            position: 'absolute',
            top: '700px',
            left: '500px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '5px'
          }}
        >
          {displayText}
        </p>
      )}
    </div>
  )
}

export default LastRoom
