import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
	FaBarcode,
	FaShoppingCart,
	FaBell,
	FaSearch,
	FaFolder,
	FaBars,
	FaChartBar,
	FaCreditCard,
	FaUsers,
	FaTh,
	FaPlus,
} from 'react-icons/fa'

import { FiSettings } from 'react-icons/fi'

import { AiFillDashboard, AiOutlineLogout, AiFillAccountBook } from 'react-icons/ai'
import { logout } from '../../../services/auth'

import logoImg from '../../../assets/logo.png'
import perfilImg from '../../../assets/img_ws.jpg'

// import Modal from '../../../components/modal'

import './style.css'

export default function DefaultLayout({ children }) {
	const [menu, setMenu] = useState(false)
	const [dropSidemenu, setDropSidemenu] = useState(false)

	const name = localStorage.getItem('name')
	const email = localStorage.getItem('email')

	const history = useHistory()

	function handleLogout() {
		logout()

		return history.push('/')
	}

	return (
		<div>
			<div className="container">
				<aside className="side-bar">
					<div className="logo">
						<img src={logoImg} alt="logo" />
					</div>
					<ul>
						<Link to="/dashboard">
							<li>
								<i>
									<AiFillDashboard />
								</i>
								Dashboard
							</li>
						</Link>
						<li>
							<i>
								<FaTh />
							</i>
							<a href="link-item">PDV</a>
						</li>
						<li
							onClick={() => setDropSidemenu(!dropSidemenu)}
							onKeyPress={() => setDropSidemenu(!menu)}
							role="presentation"
						>
							<i>
								<FaBarcode />
							</i>
							<a href="link-item">Produtos</a>
						</li>
						{dropSidemenu ? (
							<ul className="dropdown-sidemenu">
								<li>Account</li>
								<li>Account</li>
								<li>Setting</li>
								<li>Logout</li>
							</ul>
						) : null}
						<li>
							<i>
								<FaFolder />
							</i>
							<a href="link-item">Categorias</a>
						</li>
						<li>
							<i>
								<FaShoppingCart />
							</i>
							<a href="link-item">Vendas</a>
						</li>
						<li>
							<i>
								<FaPlus />
							</i>
							<a href="link-item">Compras</a>
						</li>
						<li>
							<i>
								<FaCreditCard />
							</i>
							<a href="link-item">Cartães</a>
						</li>
						<li>
							<i>
								<FaUsers />
							</i>
							<a href="link-item">Pessoas</a>
						</li>
						<li>
							<i>
								<FiSettings />
							</i>
							<a href="link-item">Configurações</a>
						</li>
						<li>
							<i className="search">
								<FaChartBar />
							</i>
							<a href="link-item">Relatórios</a>
						</li>
					</ul>
				</aside>
				<main className="main">
					<header className="header">
						<ul className="nav-left">
							<li>
								<i className="icon-header">
									<FaBars />
								</i>
							</li>
							<li>
								<input type="text" />
							</li>
							<li>
								<i className="icon-header">
									<FaSearch />
								</i>
							</li>
						</ul>

						<ul className="nav-right">
							<li>
								<i className="icon-header">
									<FaBell />
								</i>
							</li>
							<li>
								<img
									src={perfilImg}
									alt="perfil usuario"
									onClick={() => setMenu(!menu)}
									onKeyPress={() => setMenu(!menu)}
									role="presentation"
								/>
								{menu ? (
									<ul className="dropdown">
										<li>
											<img src={perfilImg} alt="" />
											<div className="user-perfil">
												<h6 className="user-title">{name}</h6>
												<p className="user-subtitle">{email}</p>
											</div>
										</li>
										<li>
											<i>
												<AiFillAccountBook />
											</i>
											Account
										</li>
										<li>
											<i>
												<FiSettings />
											</i>
											Setting
										</li>
										<li
											onClick={() => handleLogout()}
											onKeyPress={() => handleLogout()}
											role="presentation"
										>
											<i>
												<AiOutlineLogout />
											</i>
											Logout
										</li>
									</ul>
								) : null}
							</li>
						</ul>
					</header>

					<div className="content">{children}</div>

					<div className="footer">
						<p>Krypton Suplementos © 2020 | Todos os direitos reservados.</p>
					</div>

					{/* <div>
						<Modal />
					</div> */}
				</main>
			</div>
		</div>
	)
}

DefaultLayout.propTypes = {
	children: PropTypes.element.isRequired,
}
