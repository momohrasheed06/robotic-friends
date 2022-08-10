import React from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import "./App.css";
import users from './user.json'
import {useState} from 'react'


function App() {
  const[searchInput, setSearchInput] = useState('')
  const[searchUser, setSearchUser] = useState([])

  const  updateSearchInput = (event) => {
    let target = event.target.value
    setSearchInput(target)
    const filterrobot = target ? users.filter((user)=>(user.name.toLowerCase().includes(searchInput.toLowerCase()))) : []
    setSearchUser([...filterrobot])

  }
  return (
    <div className='container'>
        <h1>ROBOFRIENDS</h1>
        <SearchBox updateSearch = {updateSearchInput} />
        <Cardlist users = {searchInput ? searchUser : users} />
    </div>
  )
}

export default App;
