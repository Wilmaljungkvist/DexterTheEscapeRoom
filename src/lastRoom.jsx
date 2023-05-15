// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Endstory from './endstory'
// eslint-disable-next-line no-unused-vars
import PuzzleGame from './puzzleGame'

/**
 * First room component.
 *
 * @returns {string} // TO DO: Write the return type
 */
function LastRoom () {
  const [hasKey, setHasKey] = useState(false)
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const [pickKey, setPickKey] = useState(false)
  const [clickSafe, setClickSafe] = useState(false)
  const [openSafe, setOpenSafe] = useState(false)
  const [password, setPassword] = useState('6743')
  const [inputValue, setInputValue] = useState('')
  const [plantPressed, setPlantPressed] = useState(false)
  const [isCabinetOpen, setIsCabinetOpen] = useState(false)
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false)

  /**
   * Function that sets pickKey and hasKey to true if key is picked up.
   */
  function pickUpKey () {
    setPickKey(true)
    setHasKey(true)
  }

  /**
   * Function for what happens when the safe is clicked.
   */
  function safe () {
    setClickSafe(true)
  }

  /**
   * Function for when the door is clicked.
   */
  function handleDoorClick () {
    if (hasKey) {
      setIsDoorOpen(true)
    } else {
      alert('the door is locked')
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
      alert('Wrong password')
    }
  }

  /**
   *
   */
  function clickCabinet () {
    if (hasKey) {
      setIsCabinetOpen(true)
    } else {
      alert('The cabinet is locked, needs a key')
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

  function handlePuzzleSolved () {
    setIsPuzzleSolved(true)
  }

  return (
    <div>
      <img
        class="basement"
        src="./img/last.png"
        alt="Basement"
        useMap="#doormap"
      />
      <map name="doormap" cursor="pointer" style={{ backgroundColor: 'black' }}>
        <area shape="rect" coords="900,200,1150,550" alt="test" onClick={handleDoorClick} />
      </map>

      {!pickKey && openSafe && (
        <img
          class="key"
          src="./img/key.png"
          onClick={pickUpKey}
          alt="key"
        />
      )}

      {!isCabinetOpen && (
  <img
      class="cabinet"
      src='./img/cabinet.png'
      alt="letter"
      onClick={clickCabinet}
    />
      )}

{isCabinetOpen && (
  <div class='puzzle'>
  <PuzzleGame onPuzzleSolved={handlePuzzleSolved} />
</div>
)}

      {!openSafe && (
      <img
      class='safe'
        src="./img/safe.png"
        onClick={safe}
        alt="safe"
      />
      )}

      {clickSafe && !openSafe && (
  <form class='form' onSubmit={handleSubmit}>
    <label htmlFor="passwordInput" style={{ fontSize: '20px', marginBottom: '10px', fontFamily: 'myfont' }}>Enter password:</label>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '10px' }}>
      <input class='input' id="passwordInput" type="password" value={inputValue} onChange={handleInputChange} />
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue + '1')}>1</button>
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue + '2')}>2</button>
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue + '3')}>3</button>
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue + '4')}>4</button>
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue + '5')}>5</button>
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue + '6')}>6</button>
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue + '7')}>7</button>
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue + '8')}>8</button>
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue + '9')}>9</button>
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue + '0')}>0</button>
      <button class="keybtn" type="button" onClick={() => setInputValue(inputValue.slice(0, -1))}>delete</button>
      <button class="subbtn" type="submit">OK</button>
      <button class="subbtn" type="button" onClick={handleKeyPad}>X</button>
    </div>
  </form>
      )}
      <img
        class="plant"
        src="./img/plant.png"
        onClick={plant}
        alt="plant"
      />
      {plantPressed && (
  <div style={{ position: 'relative' }}>
    <img
      class="letter"
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
      {isPuzzleSolved && (
        <img
        class="doorkey"
        src="./img/key.png"
        onClick={pickUpKey}
        alt="key"
      />
      )}
    </div>
  )
}

export default LastRoom
