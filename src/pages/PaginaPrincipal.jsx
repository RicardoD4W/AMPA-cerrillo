import { useMainStore } from '../stores/mainContext'

const PaginaPrincipal = () => {
	const {
		emailLogin,
		passwordLogin,
		name,
		dataLogin,
		tasasLogin,
		role,
		bearerToken,
	} = useMainStore()

	return (
		<>
			<div className='flex items-center justify-center h-screen'>
				<h1>pagina principal</h1>
				<li>
					<ul>{emailLogin}</ul>
					<ul>{passwordLogin}</ul>
					<ul>{name}</ul>
					<ul>{role}</ul>
				</li>
			</div>
		</>
	)
}

export default PaginaPrincipal
