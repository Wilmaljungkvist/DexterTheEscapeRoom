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

  if (showBackstory) {
    return <Backstory />
  }

  return (
    <div>
      <h1>Dexter: the escape room</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleAboutMe}>About Me</button>
    </div>
  )
}

export default TitleScreen
