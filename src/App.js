import React, { useState } from 'react';
import FlashCardList from './FlashCardList'
import Header from './header'
import image1 from "./assets/download-1.jpg"
import image2 from "./assets/download-2.jpg"
import './app.css'


function App() {
  const [flashcards, setFlashcards] = useState(FLASHCARDS)
  return (
    <React.Fragment>
      <Header />
      <FlashCardList flashcards={flashcards} />
    </React.Fragment>
  );
}

export default App;



const FLASHCARDS = [
  {
    id: 1,
    question: image1,
    answer: "George Clinton",
    options: ["Lead Singer", "Nickname - Atomic Dog"]
  },
  {
    id: 2,
    question: image2,
    answer: "Bernie Worell",
    options: ["Keyboardist", "Backup Singer"]
  }
]