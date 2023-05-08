// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Endstory from './endstory'

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
  function handleDoorClick () {
    if (hasKey) {
      setIsDoorOpen(true)
    } else {
      alert('the door is locked')
    }
  }

  if (isDoorOpen) {
    return <Endstory></Endstory>
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
      {!pickKey && (
      <img src="./img/key.png" onClick={pickUpKey} alt="key" style={{
        position: 'absolute',
        top: '650px',
        left: '400px',
        width: '30px',
        cursor: 'pointer'
      }} />)}
    </div>
  )
}

export default FirstRoom
