import React, { useState } from 'react';
import './App.css';
import PhotoCarousel from './components/PhotoCarousel';
import BirthdayCard from './components/BirthdayCard';
import Gift from './components/Gift';

function App() {
  const [partyOn, setPartyOn] = useState(false);          

  return (
    <div className="App text-center py-5 bg-light">
      <h1 className="display-4 text-danger mb-4">🎉 Happy Birthday! 🎉</h1>

      <PhotoCarousel />

      <BirthdayCard />

      <Gift onOpen={() => setPartyOn(true)} partyOn={partyOn} />
    </div>
  );
}

export default App;
