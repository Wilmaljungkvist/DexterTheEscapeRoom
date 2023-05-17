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
       <p>Dexter: The Escape Room är ett spännande point-and-click spel där du spelar som ägaren till Dexter, Dexter är din älskade katt som springer bort mitt i natten. Din uppgift är att lösa pussel och utmaningar för att hitta vägen ut. </p>
       <p>Dexter: The Escape Room är kompatibelt med de populära webbläsarna Chrome, Safari och Firefox, och det har testats på både Windows och Mac-operativsystemen för en smidig spelupplevelse. Spelet kan också fungera på andra webbläsare och plattformar, även om det inte kan garanteras. Det funkar inte på ios eller android än, men är något som skall implementeras i framtiden.</p>
       <p>Speltiden kan veriera beroende på spelarens färdigheter, men en genomsnittlig spelare kan förvänta sig 5-15 minuter.</p>
       <h2>Planerade implementationer för framtiden</h2>
       <ol>
        <li>Timer: Vi planerar att implementera en timerfunktion som visar den totala tiden det tar att klara spelet. Detta låter spelarna utmana sig själva och försöka slå sina egna rekord.</li>
        <li>Spara: Vi arbetar på att lägga till en sparfunktion som gör det möjligt för spelare att spara sin framsteg om de kommer till ett rum och vill stänga ner utan att behöva börja om från början.</li>
        <li>Inloggning: För att lättare kunna spara och spela från flera enheter.</li>
        <li>Flera rum: Vi planerar att lägga till flera rum med olika typer av pussel och utmaningar för att hålla spelarna engagerade och ge dem mer variation i spelet.</li>
        <li>Ledtrådar: Om en spelare fastnar i ett rum ska spelaren kunna få lätta ledtrådar som inte ger svaret till pusslet.</li>
        <li>Flera språk: I dagsläget går det bara att spela på svenska, men vi vill ha fler språk.</li>
       </ol>
       <p>Detta spel är skapat av Wilma Ljungkvist, till kursen mjukvaruutvecklingsprojekt. Där man under 10 veckor skulle ta fram ett mjukvaruutvecklingsprojekt. Spelet är skrivet i React och javascript och deployas visa netlify.</p>
       <h3 className="thanks">Tack för att du väljer att spela!</h3>
       </div>
      <div style={buttonContainerStyle}>
        <button style={backButtonStyle} onClick={handleBack}>Tillbaka</button>
      </div>
    </div>
  )
}

export default About
