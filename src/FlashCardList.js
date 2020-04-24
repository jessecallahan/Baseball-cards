import React from 'react'
import FlashCard from './FlashCard'
import image1 from "./assets/girffey.jpg"
import image2 from "./assets/frankthomas.jpg"
import image3 from "./assets/s-l640.jpg"

const flashcards = [
  {
    id: 1,
    question: image1,
    answer: "Ken Griffey",
    options: ["$10,000", "Nickname - The Kid"]
  },
  {
    id: 2,
    question: image2,
    answer: "Frank Thomas",
    options: ["$8,000", "Nickname - The Big Hurt"]
  },
  {
    id: 2,
    question: image3,
    answer: "Jon Kruk",
    options: ["$200", "Nickname - The Kruker"]
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
