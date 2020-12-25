import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { setToken } from '../../services/auth'

import './style.css'

import LogoImg from '../../assets/logo.png'

export default function Login() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const history = useHistory()

	function handleLogin(e) {
		e.preventDefault()

		const data = { login, password }

		api
			.post('sigin', data)
			.then((response) => {
				const { id, email, name, lastname, token } = response.data

				localStorage.setItem('id', id)
				localStorage.setItem('email', email)
				localStorage.setItem('name', name)
				localStorage.setItem('lastname', lastname)

				setToken(token)

				return history.push('/dashboard')
			})
			.catch((error) => console.log(error))
	}

	return (
		<div className="container-login">
			<div className="login">
				<div className="logo">
					<img src={LogoImg} alt="" />
				</div>

				<form onSubmit={handleLogin}>
					<div>
						<div>
							<label htmlFor="login">
								Login
								<input
									type="text"
									placeholder="login address"
									value={login}
									onChange={(e) => setLogin(e.target.value)}
								/>
							</label>
						</div>
					</div>
					<div>
						<div>
							<label htmlFor="inputPassword">
								Senha
								<input
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>
						</div>
					</div>

					<button type="submit" value="submit">
						Login
					</button>
				</form>

				<div>
					<a href="/">Esqueceu a senha?</a>
				</div>
			</div>
		</div>
	)
}
