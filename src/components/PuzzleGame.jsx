/* eslint-disable jsdoc/no-undefined-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'

/**
 * Component to the puzzle game.
 *
 * @param {object} props - The props object.
 * @param {Function} props.onPuzzleSolved - Callback function called when the puzzle is solved.
 * @returns {JSX.Element} - The JSX element representing the PuzzleGame component.
 */
function PuzzleGame ({ onPuzzleSolved }) {
  const [puzzle, setPuzzle] = useState([])
  const [solved, setSolved] = useState(false)

  useEffect(() => {
    const newPuzzle = createPuzzle()
    setPuzzle(newPuzzle)
  }, [])

  useEffect(() => {
    const isSolved = checkSolved()
    setSolved(isSolved)
    onPuzzleSolved(isSolved)
  }, [puzzle, onPuzzleSolved])

  /**
   * Creates a new puzzle.
   *
   * @returns {number[][]} - The new puzzle.
   */
  function createPuzzle () {
    const numbers = [null, 1, 3, 4, 2, 5, 7, 8, 6]

    const newPuzzle = [
      numbers.slice(0, 3),
      numbers.slice(3, 6),
      numbers.slice(6, 9)
    ]

    return newPuzzle
  }

  /**
   * Checks if the puzzle is solved.
   *
   * @returns {boolean} - True if the puzzle is solved, false otherwise.
   */
  function checkSolved () {
    const flatPuzzle = puzzle.flat()
    for (let i = 0; i < flatPuzzle.length; i++) {
      if (flatPuzzle[i] !== i + 1 && !(i === 8 && flatPuzzle[i] === null)) {
        return false
      }
    }
    return true
  }

  /**
   * Handles the move of a puzzle piece.
   *
   * @param {number} row - The row index of the clicked piece.
   * @param {number} col - The column index of the clicked piece.
   */
  function handleMove (row, col) {
    if (solved) {
      return
    }

    const newPuzzle = [...puzzle]
    let emptyRow, emptyCol

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (newPuzzle[i][j] === null) {
          emptyRow = i
          emptyCol = j
        }
      }
    }

    if (
      (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
      (col === emptyCol && Math.abs(row - emptyRow) === 1)
    ) {
      [newPuzzle[row][col], newPuzzle[emptyRow][emptyCol]] = [
        newPuzzle[emptyRow][emptyCol],
        newPuzzle[row][col]
      ]
      setPuzzle(newPuzzle)

      if (checkSolved(newPuzzle)) {
        setSolved(true)
      }
    }
  }

  /**
   * Renders a puzzle cell.
   *
   * @param {number} row - The row index of the cell.
   * @param {number} col - The column index of the cell.
   * @param {number|null} value - The value of the cell.
   * @returns {JSX.Element} - The JSX element representing the puzzle cell.
   */
  function renderCell (row, col, value) {
    return (
      <div
        className="cell"
        key={`${row}-${col}`}
        onClick={() => handleMove(row, col)}
        style={{
          opacity: value === null ? 0 : 1,
          cursor: solved ? 'default' : 'pointer'
        }}
      >
        {value}
      </div>
    )
  }

  return (
    <div className="puzzle-game">
      <p style={{ fontFamily: 'myfont' }}>Klara pusslet!</p>

      <div className="board">
        {puzzle.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((value, colIndex) =>
              renderCell(rowIndex, colIndex, value)
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PuzzleGame
