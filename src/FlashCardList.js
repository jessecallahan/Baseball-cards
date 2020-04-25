import React from 'react'
import FlashCard from './FlashCard'
import image1 from "./assets/griffey.jpg"
import image1a from "./assets/griffeyback.jpg"
import image2 from "./assets/nolan.jpg"
import image2a from "./assets/nolanback.jpg"
import image3 from "./assets/tony1.jpg"
import image3a from "./assets/tonyback.jpg"
import image4 from "./assets/frank.jpg"
import image4a from "./assets/frankback.jpg"

const flashcards = [
  {
    id: 1,
    question: image1,
    answer: image1a
    // options: ["$10,000", "Nickname - The Kid"]
  },
  {
    id: 2,
    question: image2,
    answer: image2a,
    // options: ["$8,000", "Nickname - The Big Hurt"]
  },
  {
    id: 3,
    question: image3,
    answer: image3a,
    // options: ["$200", "Nickname - The Kruker"]
  },
  {
    id: 4,
    question: image4,
    answer: image4a,
    // options: ["$200", "Nickname - The Kruker"]
  }
]
function FlashCardList() {
  return (

    <div className="card-grid">
      {flashcards.map(flashcard => {
        return <FlashCard flashcard={flashcard} key={flashcard.id} />
      })}

    </div>
  )
}
export default FlashCardList;
