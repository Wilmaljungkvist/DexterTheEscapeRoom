// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import LastRoom from './lastRoom'

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

  /**
   * Function that sets pickKey and hasKey to true if key is picked up.
   */
  function pickUpKey () {
    setPickKey(true)
    setHasKey(true)
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
      <img
        className="cabinet"
        src='./img/cabinet.png'
        alt="letter"
      />
      {!pickKey && (
        <img src="./img/key.png" onClick={pickUpKey} alt="key" style={{
          position: 'absolute',
          top: '650px',
          left: '400px',
          width: '30px',
          cursor: 'pointer'
        }} />
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
