// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Endstory from './endstory'

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
      alert('Wrong password')
    }
  }

  /**
   *
   */
  function handleKeyPad () {
    setClickSafe(false)
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

  const keyButtonStyles = {
    padding: '10px',
    fontSize: '20px',
    backgroundColor: '#d9d9d9',
    border: '2px solid black',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer',
    fontFamily: 'myfont'
  }

  return (
    <div>
      <img
        src="./img/last.png"
        alt="Basement"
        useMap="#doormap"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1500px',
          height: '800px',
          border: 'solid 10px white'
        }}
      />
      <map name="doormap" cursor="pointer" style={{ backgroundColor: 'black' }}>
        <area shape="rect" coords="900,200,1150,550" alt="test" onClick={handleDoorClick} />
      </map>
      {!pickKey && (
        <img
          src="./img/key.png"
          onClick={pickUpKey}
          alt="key"
          style={{
            position: 'absolute',
            top: '650px',
            left: '400px',
            width: '30px',
            cursor: 'pointer'
          }}
        />
      )}
      <img
        src="./img/safe.png"
        onClick={safe}
        alt="safe"
        style={{
          position: 'absolute',
          top: '650px',
          left: '500px',
          width: '100px',
          cursor: 'pointer'
        }}
      />
      {clickSafe && !openSafe && (
  <form onSubmit={handleSubmit} style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5'
  }}>
    <label htmlFor="passwordInput" style={{ fontSize: '20px', marginBottom: '10px', fontFamily: 'myfont' }}>Enter password:</label>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '10px' }}>
      <input id="passwordInput" type="password" value={inputValue} onChange={handleInputChange} style={{
        border: '2px solid black',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        fontSize: '20px',
        gridColumn: 'span 3'
      }} />
      <button type="button" onClick={() => setInputValue(inputValue + '1')} style={keyButtonStyles}>1</button>
      <button type="button" onClick={() => setInputValue(inputValue + '2')} style={keyButtonStyles}>2</button>
      <button type="button" onClick={() => setInputValue(inputValue + '3')} style={keyButtonStyles}>3</button>
      <button type="button" onClick={() => setInputValue(inputValue + '4')} style={keyButtonStyles}>4</button>
      <button type="button" onClick={() => setInputValue(inputValue + '5')} style={keyButtonStyles}>5</button>
      <button type="button" onClick={() => setInputValue(inputValue + '6')} style={keyButtonStyles}>6</button>
      <button type="button" onClick={() => setInputValue(inputValue + '7')} style={keyButtonStyles}>7</button>
      <button type="button" onClick={() => setInputValue(inputValue + '8')} style={keyButtonStyles}>8</button>
      <button type="button" onClick={() => setInputValue(inputValue + '9')} style={keyButtonStyles}>9</button>
      <button type="button" onClick={() => setInputValue(inputValue + '0')} style={keyButtonStyles}>0</button>
      <button type="button" onClick={() => setInputValue(inputValue.slice(0, -1))} style={keyButtonStyles}>delete</button>
      <button type="submit" style={{
        padding: '10px 20px',
        fontSize: '20px',
        backgroundColor: '#9e8f6a',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: 'myfont'
      }}>OK</button>
      <button type="button" onClick={handleKeyPad} style={{
        padding: '10px 20px',
        fontSize: '20px',
        backgroundColor: '#9e8f6a',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: 'myfont'
      }}>X</button>
    </div>
  </form>
      )}
      <img
        src="./img/plant.png"
        onClick={plant}
        alt="safe"
        style={{
          position: 'absolute',
          top: '360px',
          left: '1100px',
          width: '400px',
          cursor: 'pointer'
        }}
      />
      {plantPressed && (
  <div style={{ position: 'relative' }}>
    <img
      src='./img/letter.png'
      alt="letter"
      style={{
        position: 'fixed',
        top: '30%',
        left: '35%',
        width: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
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

    </div>
  )
}

export default LastRoom
