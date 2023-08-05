/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import TitleScreen from './TitleScreen'

/**
 * Component for the About page.
 *
 * @returns {JSX.Element} - The JSX element representing the About component.
 */
function About () {
  const [seeAbout, setSeeAbout] = useState(false)

  /**
   * Handles when back button is pressed.
   */
  const handleBack = () => {
    setSeeAbout(true)
  }

  if (seeAbout) {
    return <TitleScreen />
  }

  return (
        <div className="title-div">
            <h1>Om Dexter: the escape room</h1>
            <div>
                <p>Dexter: The Escape Room är ett spännande point-and-click spel där du spelar som ägaren till Dexter, Dexter är din älskade katt som springer bort mitt i natten. Din uppgift är att lösa pussel och utmaningar för att hitta vägen ut. </p>
                <p>Dexter: The Escape Room är kompatibelt med de populära webbläsarna Chrome, Safari och Firefox och det har testats på både Windows och Mac-operativsystemen. Spelet kan också fungera på andra webbläsare och plattformar, även om det inte kan garanteras. Det funkar inte på ios eller android, men något som ska implememteras.</p>
                <p>Speltiden kan veriera beroende på spelarens färdigheter, men en genomsnittlig spelare kan förvänta sig 15-25 minuter totalt. En vanlig tid för personerna som utförde användartester.</p>
                <h2>Planerade implementationer för framtiden</h2>
                <ol>
                    <li>Timer: Det planeras att implementera en timerfunktion som visar den totala tiden det tar att klara spelet.</li>
                    <li>Spara: Att lägga till en sparfunktion planeras i framtiden. Detta då spelare ska kunna spara sina framsteg. Inte aktuellt i dagsläget dock då de enbart finns två rum.</li>
                    <li>Inloggning: Spelaren ska kunna logga in för att lättare kunna spara och spela från flera enheter.</li>
                    <li>Flera rum: Det planeras att lägga till flera rum och fler pussel för att hålla spelarna engagerade och ge dem mer variation.</li>
                    <li>Ledtrådar: Om en spelare fastnar i ett rum ska spelaren kunna få ledtrådar för att kunna komma vidare i spelet. Ledtrådarna kommer vara baserade på vad som klarats i rummet innan och vart spelaren fastnat.</li>
                </ol>
                <p>Detta spel är skapat av Wilma Ljungkvist, till kursen mjukvaruutvecklingsprojekt. Där man under 10 veckor skulle ta fram ett mjukvaruutvecklingsprojekt. Spelet är utvecklat med React och javascript och deployas via netlify.</p>
                <h3>Tack för att du väljer att spela Dexter: the escape room!</h3>
            </div>
            <div className="button-container">
                <button className="about-button" onClick={handleBack}>Tillbaka</button>
            </div>
        </div>
  )
}

export default About
