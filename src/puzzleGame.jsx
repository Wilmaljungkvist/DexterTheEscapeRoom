import React, { useState, useEffect } from 'react'

/**
 *
 * @param root0
 *
 * @param root0.onPuzzleSolved
 *
 * @returns {JSX.Element} - The JSX element representing the Backstory component.
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
   *
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
   *
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
   *
   * @param row
   * @param col
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
      [newPuzzle[row][col], newPuzzle[emptyRow][emptyCol]] = [newPuzzle[emptyRow][emptyCol],
        newPuzzle[row][col]
      ]
      setPuzzle(newPuzzle)

      if (checkSolved(newPuzzle)) {
        setSolved(true)
      }
    }
  }

  /**
   *
   * @param row
   * @param col
   * @param value
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
    <div className="puzzle">
        <p>Solve the puzzle!</p>
      <div className="board">
        {puzzle.map((row, rowIndex) =>
          <div className="row" key={rowIndex}>
            {row.map((value, colIndex) =>
              renderCell(rowIndex, colIndex, value)
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PuzzleGame
