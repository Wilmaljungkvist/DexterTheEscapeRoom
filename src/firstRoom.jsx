// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

/**
 * First room component.
 *
 * @returns {string} // TO DO: Write the return type
 */
function FirstRoom () {
  const [hasKey, setHasKey] = useState(false)
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const [pickKey, setPickKey] = useState(false)

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
  // eslint-disable-next-line no-unused-vars
  function handleDoorClick () {
    if (hasKey) {
      setIsDoorOpen(true)
    } else {
    // TO DO: Set else if key isn't picked up.
    }
  }

  return (
    <div>
      <img src="./img/basement.png" alt="Basement" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        border: 'solid 10px white'
      }}/>
      {!pickKey && (
      <img src="./img/key.png" onClick={pickUpKey} alt="key" style={{
        position: 'absolute',
        top: '900px',
        left: '400px',
        width: '30px',
        cursor: 'pointer'
      }} />)}
    </div>
  )
}

export default FirstRoom
