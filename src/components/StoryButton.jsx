/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

/**
 * Component for the buttons in the Endstory and Backstory.
 *
 * @param root0
 * @param root0.onClick
 * @param root0.label
 */
function ButtonComponent ({ onClick, label }) {
  return (
    <button className="start-next-btn" onClick={onClick}>
      {label}
    </button>
  )
}

export default ButtonComponent
