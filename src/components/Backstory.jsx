/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import FirstRoom from './FirstRoom'
// eslint-disable-next-line no-unused-vars
import StoryViewer from './StoryViewer'
// eslint-disable-next-line no-unused-vars
import StoryButton from './StoryButton'

/**
 * Component for showing the Backstory to the escape room.
 *
 * @returns {JSX.Element} - the JSX element representing the Backstory component.
 */
function Backstory () {
  const [currentStep, setCurrentStep] = useState(0)
  const [showFirstRoom, setShowFirstRoom] = useState(false)

  const story = [
    {
      image: './img/forrest.png',
      text: 'Dexter är din katt som är en svart Cornish Rex. Han är din absoluta bästa vän, det är lite sorgligt men sant. Det är dock inte så konstigt eftersom du precis flyttat till en ny stad och ännu inte hunnit skaffa några vänner än. Det var en vanlig dag och du hade precis kommit hem mycket trött efter ett 8-timmars pass på ditt lagerjobb.'
    },
    {
      image: './img/home.png',
      text: 'Du möttes av Dexter vid dörren, som hälsade dig välkommen hem med ett glatt "meow". Du kände dig genast lite lugnare och gladare.'
    },
    {
      image: './img/light.png',
      text: 'Du bestämde dig för att se din favorit serie och satte dig ner på soffan.'
    },
    {
      image: './img/dark.png',
      text: '6 timmar senare hade du sett en hel säsong och insåg att tiden gick lite snabbare än du hade velat.'
    },
    {
      image: './img/bedroom.png',
      text: 'Snabbt förberedde du dig för sängen så att det inte skulle bli alltför sent, men du hann inte sova länge innan du hörde en duns. Du blev rädd eftersom du inte kunde hitta Dexter, som annars alltid låg vid dina fötter. Du reste dig upp och gick mot köket, där ljudet kom ifrån.'
    },
    {
      image: './img/kitchen.png',
      text: 'När du kom till köket såg nu något underligt, en del av tapeten hade rivits av och det visades nu en del av en dörr. Du bestämmer dig för att öppna dörren för att se om de är hit Dexter försvunnit.'
    },
    {
      image: './img/stairs.png',
      text: 'Till din fasa va de en trappa ner till en källare, mörkt va det också, men Dexter måste hittas tänkte du. Du hämtade en ficklampa, tog några djupa andetag och gick ner för den mörka trappan.'
    },
    {
      image: './img/basement.png',
      text: 'När du kom till botten av trappan befann du dig i en gammal källare. Det såg ut som om ingen hade varit där på flera år. Det va tomt, men något kändes fel, och du hade en känsla av att det fanns något mer som gömde sig där. Källardörren stängdes med en smäll, och du sprang snabbt upp för att försöka ta dig ut. Men du insåg snart att dörren var låst och att du behövde hitta en annan väg ut, men också hitta Dexter. Dina enda ledtrådar var ytterligare en låst dörr framför dig och en vält färgburk med tassavtryck på golvet som visade att Dexter hade gått genom den dörren. “Bara att börja leta efter en väg ut” tänkte du, ovetandes om det stora äventyret framför dig.'
    }
  ]

  /**
   * Handles if next button is pressed.
   */
  const handleNext = () => {
    setShowFirstRoom(false)
    setCurrentStep((prevStep) => prevStep + 1)
  }

  /**
   * Handle if start button is pressed.
   */
  const handleStart = () => {
    setShowFirstRoom(true)
    setCurrentStep(7)
  }

  if (showFirstRoom) {
    return <FirstRoom />
  }

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <StoryViewer image={story[currentStep].image} text={story[currentStep].text} ></StoryViewer>
      {currentStep < story.length - 1
        ? (
          <StoryButton onClick={handleNext} label="Nästa"></StoryButton>
          )
        : (
          <StoryButton onClick={handleStart} label="Starta"></StoryButton>
          )}
    </div>
  )
}

export default Backstory
