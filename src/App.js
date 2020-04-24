import React, { useState } from 'react';
import FlashCardList from './FlashCardList'
import Header from './header'

import './app.css'


function App() {

  return (
    <React.Fragment>
      <Header />
      <FlashCardList />
    </React.Fragment>
  );
}

export default App;



