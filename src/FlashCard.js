import React, { useState } from 'react'

export default function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false)


  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        <img src={flashcard.question}></img>
      </div>
      <div className="back">
        {flashcard.answer}
        <div className="flashcard-options">
          {flashcard.options.map(option => {
            return <div className="flashcard-option">{option}</div>
          })}
        </div>

      </div>
    </div>
  )

}
