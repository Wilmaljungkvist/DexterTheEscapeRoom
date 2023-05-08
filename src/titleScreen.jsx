// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Backstory from './backstory'
// eslint-disable-next-line no-unused-vars
import Header from './Header.jsx'

/**
 * Component for the title screen.
 *
 * @returns {string} //TO DO: write return correct.
 */
const TitleScreen = () => {
  const [showBackstory, setShowBackstory] = useState(false)

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
    // TODO: implement "about me" functionality
    alert('About Me button pressed')
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
    backgroundColor: '#92e09f',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer'
  }

  const aboutMeButtonStyle = {
    margin: '20px',
    fontSize: '1.5rem',
    padding: '1rem 2rem',
    backgroundColor: '#92cee0',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer'
  }

  if (showBackstory) {
    return <Backstory />
  }

  return (
    <div>
        <Header></Header>
      <div style={buttonContainerStyle}>
        <button style={startButtonStyle} onClick={handleStart}>Spela</button>
        <button style={aboutMeButtonStyle} onClick={handleAboutMe}>Om spelet</button>
      </div>
    </div>
  )
}

export default TitleScreen
