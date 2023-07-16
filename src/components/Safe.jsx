import React, { useState } from 'react'

/**
 * Safe component.
 *
 * @param {Object} props - The component props.
 * @returns {JSX.Element} - The JSX element representing the Safe component.
 */
function Safe({ password }) {
  const [openSafe, setOpenSafe] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [clickSafe, setClickSafe] = useState(false);

  /**
   * Handles change in password input.
   *
   * @param {*} event - The password event.
   */
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  /**
   * Handles click on safe.
   */
  function handleSafeClick() {
    setClickSafe(true)
  }

  /**
   * Handles password input.
   *
   * @param {*} event - The submit event.
   */
  function handleSubmit(event) {
    event.preventDefault()
    if (inputValue === password) {
      setOpenSafe(true)
    } else {
      setInputValue('')
      setDisplayText('Fel lösenord, försök igen.');
      setTimeout(() => {
        setDisplayText('')
      }, 3000)
    }
  }

  /**
   * Handles when keypad should be seen.
   */
  function handleKeyPad() {
    setClickSafe(false)
    setInputValue('')
  }

  return (
    <div>
      {!openSafe && (
        <img
          className="safe-image"
          src="./img/safe.png"
          onClick={handleSafeClick}
          alt="Bild på ett grått kassaskåp som öppnas med en kod."
        />
      )}

      {clickSafe && !openSafe && (
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="passwordInput" style={{ fontSize: '20px', marginBottom: '10px', fontFamily: 'myfont' }}>
            Skriv in lösenordet:
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '10px' }}>
            <input className="input" id="passwordInput" type="password" value={inputValue} onChange={handleInputChange} />
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <button key={number} className="key-btn" type="button" onClick={() => setInputValue(inputValue + number)}>
                {number}
              </button>
            ))}
            <button className="key-btn" type="button" onClick={() => setInputValue(inputValue.slice(0, -1))}>
              radera
            </button>
            <button className="submit-btn" type="submit">OK</button>
            <button className="submit-btn" type="button" onClick={handleKeyPad}>
              X
            </button>
          </div>
        </form>
      )}

      {displayText && (
        <p className="display-text">
          {displayText}
        </p>
      )}
    </div>
  )
}

export default Safe