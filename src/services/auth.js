const LOGIN_ENDPOINT = import.meta.env.VITE_LOGIN_ENDPOINT
const REGISTER_ENDPOINT = import.meta.env.VITE_REGISTER_ENDPOINT

const useLogin = (userEmail, userPassword) => {
	let myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')

	let raw = JSON.stringify({
		email: userEmail,
		password: userPassword,
	})

	let requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	}

	return fetch(LOGIN_ENDPOINT, requestOptions).then((res) => res.json())
}

const useRegister = (userName, userEmail, userPassword) => {
	let myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')

	let raw = JSON.stringify({
		name: userName,
		email: userEmail,
		password: userPassword,
	})

	let requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	}

	return fetch(REGISTER_ENDPOINT, requestOptions).then((res) => res.json())
}

export { useLogin, useRegister }
