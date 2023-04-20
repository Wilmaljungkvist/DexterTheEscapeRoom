import React, { useState, useEffect } from 'react'

const Backstory = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showText, setShowText] = useState(false)
  const [displayText, setDisplayText] = useState('')

  const story = [
    {
      image: './img/kitchen.png',
      text: 'I woke up early and went to the kitchen to make some coffee.'
    },
    {
      image: './img/dark.png',
      text: 'Suddenly, the power went out and the room was plunged into darkness.'
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
          top: '50%',
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
