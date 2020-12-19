import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Collaborator from './pages/Collaborator'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/colaboradores" component={Collaborator} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	)
}
