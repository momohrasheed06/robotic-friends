import React from 'react';
import Card from './Card';
import users from './user.json';

function Cardlist() {
  return (
    <div className='card-details'>
        {
            users.map((user)=>(
                <Card 
                key = {user.id}
                name = {user.name}
                username = {user.username}
                email = {user.email}
                />

            ))
        }
    </div>
  )
}

export default Cardlist;