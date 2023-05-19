// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import TitleScreen from './TitleScreen'

/**
 * Component for showing the endstory to the escape room.
 *
 * @returns {JSX.Element} - The JSX element representing the Endstory component.
 */
const Endstory = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showText, setShowText] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [showFirstRoom, setShowFirstRoom] = useState(false)

  const story = [
    {
      image: './img/dexter.png',
      text: 'När du öppnar dörren får du äntligen syn på Dexter som snällt stått och väntat på att bli insläppt. Han stryker sig mot dina ben och du går ut i den friska luften.'
    },
    {
      image: './img/sun.png',
      text: 'Äntligen kunde du känna den friska luften i din näsa, aldrig hade du uppskattat att vara ute så mycket. utsikten mot havet härifrån var väldigt vacker och solen hade börjat gå upp. Du kände att allt ditt slit hade varit värt det, hade det inte varit för Dexter hade du inte fått se denna vackra utsikt.'
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
   * Goes to the titlescreen when the button is pushed.
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
          onClick={handleEnd}
        >
         Avsluta
        </button>
          )}
    </div>
  )
}

export default Endstory
