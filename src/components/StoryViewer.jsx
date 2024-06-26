/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'

/**
 * Component for viewing the stories in Backstory and Endstory.
 *
 * @param {object} props - The component props.
 * @param {string} props.image - The image URL to be displayed.
 * @param {string} props.text - The text content to be displayed.
 * @returns {JSX.Element} - The JSX element representing the StoryViewer component.
 */
function StoryViewer ({ image, text }) {
  const [showText, setShowText] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    setShowText(true)
    if (showText) {
      const timeoutId = setTimeout(() => {
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1))
        } else {
          setShowText(false)
        }
      }, 20)
      return () => clearTimeout(timeoutId)
    }
  }, [showText, displayText, text])

  useEffect(() => {
    setDisplayText('')
  }, [text])

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <img className="story-image" src={image} alt="Story Image" />
      <div className="story-div">
        <p className="backstory-text">{displayText}</p>
      </div>
    </div>
  )
}

export default StoryViewer
