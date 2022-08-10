import React from 'react';
function SearchBox({updateSearch}) {
  
  return (
    <div className='searchbox'>
        <input 
        onChange={updateSearch}
        type="text" 
        placeholder='search robot'
         />
    </div>
  )
}

export default SearchBox;


