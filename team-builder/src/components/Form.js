import React, {useState, useEffect} from 'react';

const initialFormData = {
  'username': '',
  'email': '',
  'role': '',
}

export default function Form(props) {
  const { editMember, 
          teamMembers,
          uuid,
          setTeamMembers,
          member} = props;

  const [formData, setFormData] = useState(initialFormData)

  const subToggle = (event) => {
    event.preventDefault()
    if (member.id === undefined) submit(event)
    editMember(formData, member.id)
    setFormData(initialFormData)
  }
  const submit = (event) => {
    event.preventDefault()
    setTeamMembers([{...formData, id: uuid() }, ...teamMembers]);
    setFormData(initialFormData);
  }
  const update = (event) => {
    const prop = event.target.name;
    const value = event.target.value;
    setFormData({...formData, [prop] : value})
  }


  let {email, username, role } = formData;
  
  useEffect(() => {
    setFormData(member); 
  }, [member]);

  return (
    <form onSubmit={submit}>
      <label>Name:
      <input name='username'
             value={username}
             type='text'
             onChange={update}
      />
      </label>
      <label>Email:
      <input name='email'
             value={email}
             type='email'
             onChange={update}
      />
      </label>
      <label>Role:
      <select name='role'
              value={role}
              onChange={update}
      >
        <option>-- Select a Role --</option>
        <option value='backend engineer'>Backend Engineer</option>
        <option value='frontend engineer'>Frontend Engineer</option>
        <option value='designer' >Designer</option>
        <option value='student' >Student</option>
      </select>
      </label>
      <button onClick={subToggle} >
        {!member.id ? 'Add' : 'Edit'} Member</button>
    </form>
  )
}