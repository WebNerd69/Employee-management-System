import React, { useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDash from './components/dashboard/EmployeeDash'
import Lenis from 'lenis'
import { useEffect } from 'react'
import AdminDash from './components/dashboard/AdminDash'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

function App() {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])
	const [user, setUser] = useState('')
	useEffect(() => {
		localStorage.clear()
		setLocalStorage()
		getLocalStorage()
	})

	const handleLogin = (email, password) => {
		if(email=="user@gmail.com"&&password==1234){
			setUser("User")
		}else if(email=="admin@gmail.com"&&password ==1234){
			setUser("Admin")
		}else{
			alert("Incorrect credentials")
			
		}
	}
	// ... rest of the component code
	return (
		<div className='bg-zinc-950 min-h-screen w-screen'>
			{!user ? <Login handleLogin={handleLogin}/> : user=="Admin"?<AdminDash/>:<EmployeeDash/>}
			
		</div>
	)
}

export default App
