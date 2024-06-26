/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import LastRoom from './LastRoom'
// eslint-disable-next-line no-unused-vars
import Safe from './Safe'
// eslint-disable-next-line no-unused-vars
import Plant from './Plant'
// eslint-disable-next-line no-unused-vars
import RiddleAndCabinet from './RiddleAndCabinet'

/**
 * Component for the first room.
 *
 * @returns {JSX.Element} - The JSX element representing the FirstRoom component.
 */
function FirstRoom () {
  const [hasKey, setHasKey] = useState(false)
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const [pickKey, setPickKey] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [openSafe, setOpenSafe] = useState(false)
  const [isCabinetOpen, setIsCabinetOpen] = useState(false)
  const password = '4829'

  /**
   * Handles key pickup.
   */
  function pickUpKey () {
    setPickKey(true)
    setHasKey(true)
  }

  /**
   * Handles the cabinet when the riddle is solved.
   *
   * @param {boolean} solved - Is true when the riddle is solved.
   */
  function handleRiddleSolved (solved) {
    if (solved) {
      setIsCabinetOpen(solved)
    }
  }

  /**
   * Handles when the door is clicked.
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
   * Handles the safe when it's opened.
   *
   * @param {boolean} solved - Is true when the safe is opened.
   */
  function handleSafeSolved (solved) {
    if (solved) {
      setOpenSafe(solved)
    }
  }

  if (isDoorOpen) {
    return <LastRoom />
  }

  return (
    <div>
      <img
      className="background-image"
      src="./img/basement.png"
      alt="En källare med en dörr, en färgburk och ett hål bredvid dörren. Kattavtryck syns från färgen till hålet."
      useMap="#doormap"
       />
      <map name='doormap' cursor='pointer'>
        <area shape='rect' coords="900,200,1150,550" alt='En mappning utav dörren i källaren.' onClick={handleDoorClick} />
      </map>
      <RiddleAndCabinet
        isCabinetOpen={isCabinetOpen}
        handleRiddleSolved={handleRiddleSolved}
      />
      {!openSafe && (
        <Safe password={password} whenSolved={handleSafeSolved}></Safe>
      )}
      {!pickKey && openSafe && (
        <img
          className="key-image"
          src="./img/key.png"
          onClick={pickUpKey}
          alt="Bild på en nyckel till dörren."
        />
      )}

      <Plant></Plant>

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

export default FirstRoom
