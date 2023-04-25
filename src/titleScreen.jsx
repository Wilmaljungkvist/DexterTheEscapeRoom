import React, { useState } from 'react'
import Backstory from './Backstory'

const TitleScreen = () => {
  const [showBackstory, setShowBackstory] = useState(false)

  const handleStart = () => {
    setShowBackstory(true)
  }

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
      <div style={buttonContainerStyle}>
        <button style={startButtonStyle} onClick={handleStart}>Spela</button>
        <button style={aboutMeButtonStyle} onClick={handleAboutMe}>Om spelet</button>
      </div>
    </div>
  )
}

export default TitleScreen
