// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function RiddleGame ({ riddleAnswer, whenSolved }) {
const [answer, setAnswer] = useState('')

function handleSubmit () {
    alert('You submitted')
}

function handleInputChange () {
    alert('You changed the answer')
}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='answerInput'>Lös gåtan för att komma in i skåpet: </label>
            <input type="text" id="answerInput" value={answer} onChange={handleInputChange} />
            <button type="submit">Är det rätt svar?</button>
        </form>
    </div>
)

}

export default RiddleGame
