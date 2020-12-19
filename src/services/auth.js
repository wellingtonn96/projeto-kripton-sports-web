export const TOKEN_KEY = localStorage.getItem('TOKEN_KEY')
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY)
export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const setToken = (token) => {
	return localStorage.setItem('TOKEN_KEY', token)
}

export const logout = () => {
	return localStorage.clear()
}
