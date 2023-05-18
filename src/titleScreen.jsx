// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Backstory from './backstory'
// eslint-disable-next-line no-unused-vars
import About from './about'
import RiddleGame from './riddle'

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

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    flexDirection: 'column'
  }

  const startButtonStyle = {
    margin: '20px',
    fontSize: '1.5rem',
    padding: '1rem 2rem',
    marginRight: '1rem',
    backgroundColor: '#116799',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontFamily: 'myfont'
  }

  const aboutMeButtonStyle = {
    margin: '20px',
    fontSize: '1.5rem',
    padding: '1rem 2rem',
    backgroundColor: '#92cee0',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontFamily: 'myfont'
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
      <div style={buttonContainerStyle}>
        <button style={startButtonStyle} onClick={handleStart}>Spela</button>
        <button style={aboutMeButtonStyle} onClick={handleAboutMe}>Om spelet</button>
      </div>
      <RiddleGame></RiddleGame>
    </div>
  )
}

export default TitleScreen
