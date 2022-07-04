import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  )
  

  const handleInputChange = event => { 
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    props.updateUser(user.id, user)
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>LastName</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <label for="email">Enter your email:</label>

      <input
        type="email"
        name="email" value={user.email} onChange={handleInputChange}

      />

      <label for="pass">Password :</label>
      <input type="password" name="password" value={user.password} onChange={handleInputChange} />

      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
