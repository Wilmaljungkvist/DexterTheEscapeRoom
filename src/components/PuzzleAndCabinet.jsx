/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import PuzzleGame from './PuzzleGame'

/**
 * Component for the Puzzle and cabinet.
 *
 * @param {object} props - The props object.
 * @param {Function} props.hasKey - Callback function called when the key to the cabinet is found.
 * @param {Function} props.isCabinetOpen - Callback function called when the cabinet is open.
 * @param {Function} props.hasDoorKey - Callback function called when the key to the door is found.
 * @param {Function} props.handlePuzzleSolved - Callback function called when the puzzle is solved.
 * @param {Function} props.clickCabinet - Callback function called when the cabinet is clicked.
 * @returns {JSX.Element} - The JSX element representing the PlantAndLetter component.
 */
function PuzzleAndCabinet ({ hasKey, isCabinetOpen, hasDoorKey, handlePuzzleSolved, clickCabinet }) {
  return (
    <>
      {!isCabinetOpen && (
        <img
          className="cabinet-first"
          src='./img/cabinet.png'
          alt="Bild på ett skåp med två luckor."
          onClick={clickCabinet}
        />
      )}
      {isCabinetOpen && !hasDoorKey && (
        <div className='puzzle-div'>
          <PuzzleGame onPuzzleSolved={handlePuzzleSolved} />
        </div>
      )}
    </>
  )
}

export default PuzzleAndCabinet
