import React, { useState } from 'react'

/**
 *
 */
function FirstRoom () {
  const [hasKey, setHasKey] = useState(false)
  const [isDoorOpen, setIsDoorOpen] = useState(false)

  /**
   *
   */
  function handleKeyClick () {
    setHasKey(true)
  }

  /**
   *
   */
  function handleDoorClick () {
    if (hasKey) {
      setIsDoorOpen(true)
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
      {hasKey && (
        <img
          src="./img/key.png"
          alt="Key"
          style={{
            position: 'absolute',
            top: '50px',
            left: '100px'
          }}
        />
      )}
      {!isDoorOpen
        ? (
        <img
          src="/door.png"
          alt="Door"
          style={{
            position: 'absolute',
            top: '100px',
            left: '200px',
            cursor: hasKey ? 'pointer' : 'default',
            opacity: hasKey ? 1 : 0.5
          }}
          onClick={handleDoorClick}
        />
          )
        : (
        <p>Congratulations! You have opened the door!</p>
          )}
    </div>
  )
}

export default FirstRoom
