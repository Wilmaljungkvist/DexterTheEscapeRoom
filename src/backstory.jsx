import React, { useState, useEffect } from 'react'

const Backstory = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showText, setShowText] = useState(false)
  const [displayText, setDisplayText] = useState('')

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
      text: 'Du satte dig ner på soffan och slappnade av en stund med Dexter bredvid dig.'
    },
    {
      image: './img/dark.png',
      text: 'Du fastnade framför TV:n och insåg att tiden gick lite snabbare än du hade velat.'
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
    }
  ]

  useEffect(() => {
    if (showText) {
      const text = story[currentStep].text
      const timeoutId = setTimeout(() => {
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1))
        }
      }, 50)
      return () => clearTimeout(timeoutId)
    }
  }, [showText, currentStep, displayText, story])

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
    setShowText(true)
    setDisplayText('')
  }

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <img
        src={story[currentStep].image}
        alt="backstory image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '85%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '1rem'
        }}
      >
        <p>{displayText}</p>
      </div>
      {!showText && currentStep < story.length - 1 && (
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            fontSize: '1.5rem'
          }}
        >
          Next
        </button>
      )}
    </div>
  )
}

export default Backstory
