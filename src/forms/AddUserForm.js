import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '', email: '', password: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>LastName</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<label for="email">Enter your  email:</label>	
			<input
				type="email"
				name="email" value={user.email} onChange={handleInputChange}

			/>

			<label for="pass">Password :</label>
			<input type="password" name="password" value={user.password} onChange={handleInputChange} />

			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
