/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

/**
 * Component for the buttons in the Endstory and Backstory.
 *
 * @param {object} props - The component props.
 * @param {Function} props.onClick - The click event handler for the button.
 * @param {string} props.label - The label/text to be displayed on the button.
 * @returns {JSX.Element} - The JSX element representing the ButtonComponent.
 */
function ButtonComponent ({ onClick, label }) {
  return (
    <button className="start-next-btn" onClick={onClick}>
      {label}
    </button>
  )
}

export default ButtonComponent
