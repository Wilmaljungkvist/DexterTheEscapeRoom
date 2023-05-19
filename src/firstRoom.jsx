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
   * Handles the riddle if the riddle is solved.
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
  function safe () {
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
      setDisplayText('Wrong password, try again.')
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
   * Handles click on keypad.
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
      <img src="./img/basement.png" alt="Basement" useMap="#doormap" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '1500px',
        height: '800px',
        border: 'solid 10px white'
      }} />
      <map name='doormap' cursor='pointer' style={{ backgroundColor: 'black' }} >
        <area shape='rect' coords="900,200,1150,550" alt='test' onClick={handleDoorClick} />
      </map>
      {isCabinetClicked && !riddleSolved && (
        <div className="riddlediv">
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
        className="plant"
        src="./img/plant.png"
        onClick={handlePlantClick}
        alt="plant"
      />
      {!riddleSolved && (
        <img
          className="cabinetfirst"
          src='./img/cabinet.png'
          alt="cabinet"
          onClick={cabinetClicked}
        />
      )}
      {!openSafe && (
        <img
          className='safe'
          src="./img/safe.png"
          onClick={safe}
          alt="safe"
        />
      )}
      {!pickKey && openSafe && (
        <img
          className="key"
          src="./img/key.png"
          onClick={pickUpKey}
          alt="key"
        />
      )}

      <img
        className="painting"
        src="./img/painting.png"
        onClick={handlePaintingClick}
        alt="plant"
      />

      {!paperClicked && isCabinetOpen && (
        <img
          className="paper"
          src='./img/paper.png'
          alt="cabinet"
          onClick={HandleClickPaper}
        />
      )}

      {paperClicked && (
        <div>
          <img
            className="weatherpaper"
            src='./img/weather.png'
            alt="cabinet"
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

export default FirstRoom
