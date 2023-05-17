// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import TitleScreen from './titleScreen'

/**
 * Component for the title screen.
 *
 * @returns {string} //TO DO: write return correct.
 */
const About = () => {
  const [back, setBack] = useState(false)

  /**
   * Shows backstory when the start button is pressed.
   */
  const handleBack = () => {
    setBack(true)
  }

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    flexDirection: 'column'
  }

  const backButtonStyle = {
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

  if (back) {
    return <TitleScreen />
  }

  return (
    <div className="title">
       <h1 className="about">Om Dexter: the escape room</h1>
       <div className="abouttext">
       <p>DDexter: The Escape Room är ett spännande point-and-click spel där du spelar som ägaren till Dexter, Dexter är din älskade katt som springer bort mitt i natten. Din uppgift är att lösa pussel och utmaningar för att hitta vägen ut. </p>
       <p>Dexter: The Escape Room är kompatibelt med de populära webbläsarna Chrome, Safari och Firefox, och det har testats på både Windows och Mac-operativsystemen för en smidig spelupplevelse. Spelet kan också fungera på andra webbläsare och plattformar, även om det inte kan garanteras. Det funkar inte på ios eller android än, men är något som skall implementeras i framtiden.</p>
       <p>Speltiden kan veriera beroende på spelarens färdigheter, men en genomsnittlig spelare kan förvänta sig 5-15 minuter.</p>
       <h2>Planerade implementationer för framtiden</h2>
       </div>
      <div style={buttonContainerStyle}>
        <button style={backButtonStyle} onClick={handleBack}>Tillbaka</button>
      </div>
    </div>
  )
}

export default About
