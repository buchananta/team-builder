import React, {useState, useEffect} from 'react';

//basic design and reset for the Form
const initialFormData = {
  'username': '',
  'email': '',
  'role': '',
}

export default function Form(props) {
  //Taking to manh props, should refactor this.
  const { editMember, 
          teamMembers,
          uuid,
          setTeamMembers,
          member} = props;

  const [formData, setFormData] = useState(initialFormData)

  //decide if the submitted form data is to
  //edit an already existing member, or create a new one
  //and send it to the appropriate function
  const subToggle = (event) => {
    event.preventDefault()
    if (member.id === undefined) submit(event)
    else {editMember(formData, member.id)
    setFormData(initialFormData) }
  }
  //add formdata to array of teamMembers
  const submit = (event) => {
    event.preventDefault()
    setTeamMembers([{...formData, id: uuid() }, ...teamMembers]);
    setFormData(initialFormData);
  }
  //keep formdata updated
  const update = (event) => {
    const prop = event.target.name;
    const value = event.target.value;
    setFormData({...formData, [prop] : value})
  }
 //if member exists [edit] button pressed
 //get that member data and assign it to the form 
  useEffect(() => {
    setFormData(member); 
  }, [member]);
  
  //simplify variable names for the component
  let {email, username, role } = formData;
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