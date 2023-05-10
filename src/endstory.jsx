// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import TitleScreen from './titleScreen'

/**
 * Component for showing the backstory to the escape room.
 *
 * @returns {string} //TO DO: write correct return.
 */
const Endstory = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showText, setShowText] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [showFirstRoom, setShowFirstRoom] = useState(false)

  const story = [
    {
      image: './img/dexter.png',
      text: 'När du öppnar dörren får du äntligen syn på Dexter som snällt stått och väntat på att bli insläppt. Han stryker sig mot dina ben och du tar honom i ett hårt grepp ut igen'
    },
    {
      image: './img/sun.png',
      text: 'Äntligen hade du kommit ut och kunde känna den friska luften i din näsa, utsikten ut mot havet härifrån var väldigt vacker och solen hade börjat gå upp. Du kände att allt ditt slit hade varit värt det, hade det inte varit för Dexter hade du inte fått se denna vackra utsikt.'
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
   * Shows next picture and text if there are more to the story.
   */
  const handleNext = () => {
    setCurrentStep(currentStep + 1)
    setShowText(true)
    setDisplayText('')
  }

  /**
   * Starts the first game when the start button is pressed.
   */
  const handleEnd = () => {
    setShowFirstRoom(true)
    setCurrentStep(1)
  }

  if (showFirstRoom) {
    return <TitleScreen />
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
          objectFit: 'cover',
          border: 'solid 10px white'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '90%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#ebe0df',
          fontSize: '20px',
          boxShadow: '10px 5px 5px black',
          borderRadius: '20px',
          padding: '1rem',
          maxHeight: '15%',
          overflow: 'auto'
        }}
      >
        <p class="backstorytext">{displayText}</p>
      </div>
      {currentStep < story.length - 1
        ? (
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            bottom: '0.5rem',
            right: '1rem',
            fontSize: '1.5rem',
            fontFamily: 'coffee',
            backgroundColor: '#ebe0df',
            borderRadius: '1rem',
            padding: '0.5rem 1rem',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Nästa
        </button>
          )
        : (
        <button
          onClick={handleEnd}
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            fontSize: '1.5rem',
            fontFamily: 'coffee',
            backgroundColor: '#ebe0df',
            borderRadius: '1rem',
            padding: '0.5rem 1rem',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
         Avsluta
        </button>
          )}
    </div>
  )
}

export default Endstory
