/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import TitleScreen from './TitleScreen'
// eslint-disable-next-line no-unused-vars
import StoryViewer from './StoryViewer'

/**
 * Component for showing the endstory in the escape room.
 *
 * @returns {JSX.Element} - The JSX element representing the Endstory component.
 */
const Endstory = () => {
  const [currentStep, setCurrentStep] = useState(0)
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

  /**
   * Handles if next button is pressed.
   */
  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }

  /**
   * Handles if end button is pressed.
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
      <StoryViewer image={story[currentStep].image} text={story[currentStep].text} ></StoryViewer>
      {currentStep < story.length - 1
        ? (
          <StoryButton onClick={handleNext} label="Nästa"></StoryButton>
          )
        : (
          <StoryButton onClick={handleEnd} label="Avsluta"></StoryButton>
          )}
    </div>
  )
}

export default Endstory
