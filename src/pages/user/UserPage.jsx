import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMainStore } from '../../stores/mainContext'

const UserPage = () => {
	const user = useMainStore((state) => state.user)
	const navigate = useNavigate()

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'USER_ROLE'
			}) &&
			navigate('/iniciar-sesion')
	}, [])

	return <>user page</>
}

export default UserPage
