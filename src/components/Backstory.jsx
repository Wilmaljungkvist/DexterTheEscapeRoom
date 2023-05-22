/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import FirstRoom from './FirstRoom'

/**
 * Component for showing the Backstory to the escape room.
 *
 * @returns {JSX.Element} - The JSX element representing the Backstory component.
 */
const Backstory = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showText, setShowText] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [showFirstRoom, setShowFirstRoom] = useState(false)

  const story = [
    {
      image: './img/forrest.png',
      text: 'Dexter är din katt som är en svart Cornish Rex. Han är din absoluta bästa vän, och det är lite sorgligt, men sant, eftersom du precis har flyttat till en ny stad och ännu inte hunnit skaffa många vänner än. Det var en vanlig dag, och du hade precis kommit hem mycket trött efter ett 8-timmars pass på ditt lagerjobb.'
    },
    {
      image: './img/home.png',
      text: 'Du möttes av Dexter vid dörren, som hälsade dig välkommen hem med ett glatt "meow". Du kände dig genast lite lugnare och gladare när du såg hans mjuka päls och hörde hans välkomnande ljud.'
    },
    {
      image: './img/light.png',
      text: 'Du bestämde dig för att se din favorit serie och satte dig ner på soffan för att slappna av en stund.'
    },
    {
      image: './img/dark.png',
      text: '6 timmar senare hade du sett en helt säsong och insåg att tiden gick lite snabbare än du hade velat.'
    },
    {
      image: './img/bedroom.png',
      text: 'Snabbt förberedde du dig för sängen så att det inte skulle bli alltför sent, men du hann inte sova länge innan du hörde en duns. Du blev rädd eftersom du inte kunde hitta Dexter, som annars alltid låg vid dina fötter. Du reste dig upp och gick mot köket, där ljudet kom ifrån.'
    },
    {
      image: './img/kitchen.png',
      text: 'När du kom till köket såg nu något underligt, en del av tapeten hade rivits av och det visades nu en del av en dörr. Du bestämmer dig för att öppna dörren för att se om de är hit Dexter farit'
    },
    {
      image: './img/stairs.png',
      text: 'Till din fasa va de en trappa ner till en källare, mörkt va det också, men Dexter måste hittas tänkte du. Du hämtade en ficklampa, tog några djupa andetag och gick ner för den mörka trappan.'
    },
    {
      image: './img/basement.png',
      text: 'När du kom till botten av trappan befann du dig i en gammal källare. Det såg ut som om ingen hade bott där på flera år, och det fanns spindelnät överallt. Men något kändes fel, och du hade en känsla av att det fanns något mer som gömde sig där. Källardörren stängdes med en smäll, och du sprang snabbt upp för att försöka ta dig ut. Men du insåg snart att dörren var låst och att du behövde hitta en annan väg ut, men också hitta Dexter. Dina enda ledtrådar var ytterligare en låst dörr framför dig och en vält färgburk med tassavtryck på golvet som visade att Dexter hade gått genom den dörren. “Bara att börja leta efter en väg ut” tänkte du, ovetandes om det stora äventyret framför dig'
    }
  ]

  useEffect(() => {
    setShowText(true)
    if (showText) {
      const text = story[currentStep].text
      const timeoutId = setTimeout(() => {
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1))
        } else {
          setShowText(false)
        }
      }, 20)
      return () => clearTimeout(timeoutId)
    }
  }, [showText, currentStep, displayText, story])

  /**
   * Handles if next button is pressed.
   */
  const handleNext = () => {
    setCurrentStep(0)
    setCurrentStep(currentStep + 1)
    setShowText(true)
    setDisplayText('')
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
      <img
        className="story"
        src={story[currentStep].image}
        alt="backstory image"
      />
      <div
        className="storydiv"
      >
        <p class="backstorytext">{displayText}</p>
      </div>
      {currentStep < story.length - 1
        ? (
          <button
            className="startnextbtn"
            onClick={handleNext}
          >
            Nästa
          </button>
          )
        : (
          <button
            className="startnextbtn"
            onClick={handleStart}
          >
            Starta
          </button>
          )}
    </div>
  )
}

export default Backstory