import React from 'react';
const api = {
  key: "58b783e3a2f433f05eee3b76c028a9bf",
  base: "https://api.openweathermap.org/data/2.5/"
}
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App warm">
      <main>
        <div className='search-box'>
          <input type="text" className='search-bar' placeholder='Search...'/>
        </div>
      </main>
    </div>
  );
}

export default App;
