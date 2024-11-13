import React, { useState, useContext } from 'react'
import Login from './components/auth/Login'
import EmployeeDash from './components/dashboard/EmployeeDash'
import Lenis from 'lenis'
import { useEffect } from 'react'
import AdminDash from './components/dashboard/AdminDash'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider';

function App() {
	// useStates
	const [user, setUser] = useState('')
	const [userData, setUserData] = useState('')

	// useEffects
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	useEffect(() => {
		if (user) {
			const loggedInUser = localStorage.getItem("loggedInUser")
		}
	}, [user])

	// useEffect(() => {
	// 	localStorage.clear()
	// 	setLocalStorage()

	// })



	// contexts
	const AuthData = useContext(AuthContext)
	// console.log(AuthData)

	// functions
	const handleLogin = (email, password) => {
		if (AuthData) {
			const employee = AuthData.employeeData.find((e) => e.password == password && e.email == email)
			const admin = AuthData.adminData.find((e) => e.password == password && e.email == email)
			if (employee) {
				setUser("Employee")
				localStorage.setItem("loggedInUser", JSON.stringify({ role: "Employee" }))
				setUserData(employee)

			}
			else if (admin) {
				setUser("Admin")
				localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin" }))
				// console.log(admin)
				setUserData(admin)
			}
			else {
				alert("Incorrect credentials")
			}
		}
	}
	// ... rest of the component code
	return (
		<div className='bg-zinc-950 min-h-screen w-screen'>
			{!user ? <Login handleLogin={handleLogin} /> : ""}
			{user == "Admin" ? <AdminDash /> : (user == "Employee" ? <EmployeeDash data={userData} /> : "")}

		</div>
	)
}

export default App
