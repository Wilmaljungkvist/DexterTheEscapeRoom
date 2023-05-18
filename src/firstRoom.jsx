// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import LastRoom from './lastRoom'
// eslint-disable-next-line no-unused-vars
import RiddleGame from './riddle'

/**
 * First room component.
 *
 * @returns {string} // TO DO: Write the return type
 */
function FirstRoom () {
  const [hasKey, setHasKey] = useState(false)
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const [pickKey, setPickKey] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [clickSafe, setClickSafe] = useState(false)
  const [openSafe, setOpenSafe] = useState(false)
  const [password, setPassword] = useState('6743')
  const [inputValue, setInputValue] = useState('')
  const [isCabinetOpen, setIsCabinetOpen] = useState(false)
  const [isCabinetClicked, setIsCabinetClicked] = useState(false)
  const [riddleSolved, setRiddleSolved] = useState(false)

  const riddleAnswer = 'ingenting'
  /**
   * Function that sets pickKey and hasKey to true if key is picked up.
   */
  function pickUpKey () {
    setPickKey(true)
    setHasKey(true)
  }

  /**
   *
   * @param solved
   */
  function handleRiddleSolved (solved) {
    if (solved) {
      setRiddleSolved(true)
      setIsCabinetOpen(true)
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
   * Function for what happens when the safe is clicked.
   */
  function safe () {
    setClickSafe(true)
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
      setDisplayText('Wrong password, try again.')
      setTimeout(() => {
        setDisplayText('')
      }, 3000)
    }
  }

  /**
   * Function that sets the door to open if the door is clicked when the user has the key.
   */
  function handleDoorClick () {
    if (hasKey) {
      setIsDoorOpen(true)
    } else {
      setDisplayText('The door is locked.')
      setTimeout(() => {
        setDisplayText('')
      }, 3000)
    }
  }

  /**
   *
   */
  function cabinetClicked () {
    setIsCabinetClicked(true)
  }

  /**
   *
   */
  function handleKeyPad () {
    setClickSafe(false)
    setInputValue('')
  }

  if (isDoorOpen) {
    return <LastRoom />
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
      }}/>
      <map name='doormap' cursor='pointer' style={{ backgroundColor: 'black' }} >
        <area shape='rect' coords="900,200,1150,550" alt='test' onClick={handleDoorClick} />
      </map>
      {isCabinetClicked && !riddleSolved && (
        <div className="riddlediv">
        <RiddleGame riddleAnswer={riddleAnswer}
        question="Fattiga har mig, rika behöver mig. Äter du mig dör du. Vad är jag?"
        whenSolved={handleRiddleSolved}></RiddleGame>
        </div>
      )}
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
        className="paper"
        src='./img/paper.png'
        alt="cabinet"
        onClick={cabinetClicked}
      />

<img
        className="weatherpaper"
        src='./img/weather.png'
        alt="cabinet"
        onClick={cabinetClicked}
      />

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
