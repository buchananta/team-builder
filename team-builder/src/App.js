import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const initialTeamMembers = [{
  'id': 1,
  'username': 'Trevor',
  'email': 'trevor@trevorbuchanan.com',
  'role': 'student',
}]

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);



  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
        {teamMembers.map(person => {
          return (
            <div className='member-container'>
              <p>UserName: {person.username}</p>
              <p>E-mail: {person.email}</p>
              <p>Role: {person.role}</p>
            </div>
          )
        })}
    </div>
  );
}

export default App;
