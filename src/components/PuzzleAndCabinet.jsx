/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import PuzzleGame from './PuzzleGame'

/**
 *
 * @param root0
 * @param root0.hasKey
 * @param root0.isCabinetOpen
 * @param root0.hasDoorKey
 * @param root0.handlePuzzleSolved
 * @param root0.clickCabinet
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
