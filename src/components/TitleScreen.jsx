/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Backstory from './Backstory'
// eslint-disable-next-line no-unused-vars
import About from './About'

/**
 * Component for the title screen.
 *
 * @returns {JSX.Element} - The JSX element representing the TitleScreen component.
 */
const TitleScreen = () => {
  const [showBackstory, setShowBackstory] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  /**
   * Shows backstory when the start button is pressed.
   */
  const handleStart = () => {
    setShowBackstory(true)
  }

  /**
   * Shows about me when the about me button is pressed.
   */
  const handleAboutMe = () => {
    setShowAbout(true)
  }

  if (showBackstory) {
    return <Backstory />
  }

  if (showAbout) {
    return <About />
  }

  return (
    <div className="title-div">
      <header>
        <img className="dexter-image" src="./img/headern.png" alt="Dexter: the escape room" />
      </header>
      <div className="button-container">
        <button className="start-button" onClick={handleStart}>Spela</button>
        <button className="about-button" onClick={handleAboutMe}>Om spelet</button>
      </div>
    </div>
  )
}

export default TitleScreen
