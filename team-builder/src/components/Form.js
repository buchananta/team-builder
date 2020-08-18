import React from 'react';



export default function Form(props) {
  const {email, username, role, submit, update} = props;


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
      <button onClick={submit} >Add Member</button>
    </form>
  )
}