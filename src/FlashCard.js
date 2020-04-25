import React, { useState } from 'react'

export default function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false)


  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        <img src={flashcard.question} width="300px" height="525px" ></img>
      </div>
      <div className="back">
        <img src={flashcard.answer} width="300px" height="525px" ></img>
        {/* <div className="flashcard-options">
          {flashcard.options.map(option => {
            return <div className="flashcard-option">{option}</div> */}

      </div>

    </div>

  )

}
