import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import { Link, Route, Routes } from 'react-router-dom'



const App = () => {

	


	const usersData = [
		{
			id: 1, name: 'User1', username: 'User1',
			email: "User1@user ",
			password: "12345"
		},
		{
			id: 2, name: 'User2', username: 'User2',
			email: "User2@user ",
			password: "12345"
		},
		{
			id: 3, name: 'User3', username: 'User3',
			email: "User3@user",
			password: "1234"
		},
	]

	const initialFormState = {
		id: null, name: '', username: '',
		email: "",
		password: ""
	}

	
	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({
			id: user.id, name: user.name, username: user.username, email: user.email,
			password: user.password
		})
	}

	return (
		
		<div className="container">
			<h1>CRUD User</h1>


		
			
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Modifier Utilisateur</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Ajouter Utilisateur</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Afficher utilisateurs</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
			
		</div>
		
	)
}

export default App
