import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMainStore } from '../../stores/mainContext'

const AdminPage = () => {
	const user = useMainStore((state) => state.user)
	const navigate = useNavigate()

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'ADMIN_ROLE'
			}) &&
			navigate('/iniciar-sesion')
	}, [])

	return <>admin page</>
}

export default AdminPage
