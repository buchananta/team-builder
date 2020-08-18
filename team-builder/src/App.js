import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
const initialTeamMembers = [{
  'id': 1,
  'username': 'Trevor',
  'email': 'trevor@trevorbuchanan.com',
  'role': 'student',
}, {
  'id': 2,
  'username': 'Linus',
  'email': 'torvalds@osdl.org',
  'role': 'benevolent dictator'
}]
const initialFormData = {
  'username': '',
  'email': '',
  'role': '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [formData, setFormData] = useState(initialFormData)

  const updateForm = (event) => {
    debugger;
    const prop = event.target.name;
    const value = event.target.value;
    setFormData({...formData, [prop] : value})
  }
  
  const submitMember = (event) => {
    event.preventDefault()
    setTeamMembers([formData, ...teamMembers]);
    setFormData(initialFormData);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <Form
        email={formData.email}
        username={formData.username}
        role={formData.role}
        update={updateForm}
        submit={submitMember} />
      <section className='teamMembers'>
        {teamMembers.map(person => {
          return (
            <div className='member-container'>
              <p>UserName: {person.username}</p>
              <p>E-mail: {person.email}</p>
              <p>Role: {person.role}</p>
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default App;
