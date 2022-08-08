import React from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import "./App.css";

function App() {
  return (
    <div className='container'>
        <h1>ROBOFRIENDS</h1>
        <SearchBox />
        <Cardlist />
    </div>
  )
}

export default App;
