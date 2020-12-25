import React, { useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { TOKEN_KEY } from '../../services/auth'

import DefaultLayout from '../_layouts/DefaultLayout'

import './style.css'

export default function CollabortorsForm() {
	const [name, setName] = useState('')
	const [lastname, setLastname] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [comfirmPass, setComfirmPass] = useState('')
	const [typeUser, setTypeUser] = useState('')

	const history = useHistory()

	function handleCollaborators(e) {
		e.preventDefault()

		const data = {
			name,
			lastname,
			email,
			phone,
			login,
			password,
			comfirmPass,
			id_type: typeUser,
		}

		api
			.post('collaborators', data, {
				headers: {
					authorization: `Bearer ${TOKEN_KEY}`,
				},
			})
			.then((response) => {
				alert('cadastro realizado com sucesso!')
				history.push('/dashboard')
			})
			.catch((error) => alert('falha ao cadastrar colaborador!'))
	}

	return (
		<DefaultLayout>
			<div className="form-container">
				<div className="form-row">
					<h1>Cadastrar colaborador</h1>
					<form onSubmit={handleCollaborators}>
						<div className="form-header">
							<i>
								<FiUser />
							</i>
							<h4>Informações Pessoais</h4>
						</div>
						<div className="form-group">
							<label htmlFor="name">Nome</label>
							<input
								name="name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="lastname">Sobrenome</label>
							<input
								name="lastname"
								type="text"
								value={lastname}
								onChange={(e) => setLastname(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								name="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="phone">Telefone</label>
							<input
								name="phone"
								type="text"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div className="form-header">
							<i>
								<FiUser />
							</i>
							<h4>Perfil de usuário</h4>
						</div>
						<div className="form-group">
							<label htmlFor="login">Login</label>
							<input
								name="login"
								type="text"
								value={login}
								onChange={(e) => setLogin(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="password">Senha</label>
							<input
								name="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="comfirmPass">Comfirmar senha</label>
							<input
								name="comfirmPass"
								type="password"
								value={comfirmPass}
								onChange={(e) => setComfirmPass(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="userType">Tipo usuario:</label>
							<select
								name="userType"
								value={typeUser}
								onChange={(e) => setTypeUser(e.target.value)}
							>
								<option value="1">GERENTE</option>
								<option value="2">VENDEDOR</option>
							</select>
						</div>

						<div className="button-group">
							<button className="button-cancelar" type="button">
								cancelar
							</button>
							<button className="button-salvar" type="submit">
								salvar
							</button>
						</div>
					</form>
				</div>
			</div>
		</DefaultLayout>
	)
}
