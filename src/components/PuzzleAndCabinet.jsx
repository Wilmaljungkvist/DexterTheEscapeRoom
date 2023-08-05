/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import PuzzleGame from './PuzzleGame'

/**
 * Component for the Puzzle and cabinet.
 *
 * @param {object} props - The props object.
 * @param {boolean} props.hasKey - Is true when the key is found.
 * @param {boolean} props.isCabinetOpen - Is true when the cabinet is open.
 * @param {booleab} props.hasDoorKey - Is true when the key to the door is found.
 * @param {Function} props.handlePuzzleSolved - Callback function called when the puzzle is solved.
 * @param {Function} props.clickCabinet - Callback function called when the cabinet is clicked.
 * @returns {JSX.Element} - The JSX element representing the PuzzleAndCabinet component.
 */
function PuzzleAndCabinet ({ hasKey, isCabinetOpen, hasDoorKey, handlePuzzleSolved, clickCabinet }) {
  return (
    <>
      {!isCabinetOpen && (
        <img
          className="cabinet-image"
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
