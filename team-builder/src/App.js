import React, { useState } from 'react';
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
const uuid = function() {
  let id = 3;
  return () => id = id + 1;
}();

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [member, setMember] = useState({}); //memberToEdit

  const editMember = (editedMember, id) => {
    editedMember = {id, ...editedMember};
    const filtered = teamMembers.filter( member => {
      return member.id !== id
    })
    setTeamMembers([editedMember, ...filtered]);
    setMember({});
  }  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <Form
        editMember={editMember}
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
        member={member}
        uuid={uuid}
      />
      <section className='teamMembers'>
        {teamMembers.map(person => {
          return (
            <div key={person.id} className='member-container'>
              <button onClick={() => setMember(person)}>[edit]</button>
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
