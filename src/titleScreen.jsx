// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Backstory from './Backstory'
// eslint-disable-next-line no-unused-vars
import About from './About'

/**
 * Component for the title screen.
 *
 * @returns {string} //TO DO: write return correct.
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
    <div className="title">
       <header>
      <img className="dexter" src="./img/headern.png" alt="Dexter: the escape room" />
       </header>
      <div className="buttoncontainer">
        <button className="startButton" onClick={handleStart}>Spela</button>
        <button className="aboutButton" onClick={handleAboutMe}>Om spelet</button>
      </div>
    </div>
  )
}

export default TitleScreen
