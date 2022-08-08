import React from 'react';
import {useState} from 'react';

function SearchBox() {
    const [search, setSearch] = useState('')
  return (
    <div className='searchbox'>
            <h1>{search}</h1>  <h1>{search}</h1>
        <input 
        onChange={(event)=>{setSearch(event.target.value)}}
        type="text" placeholder='search robot' />
    </div>
  )
}

export default SearchBox;


