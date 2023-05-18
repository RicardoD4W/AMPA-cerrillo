import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMainStore } from '../../stores/mainContext'
import StructureLayout from '../../components/StructureLayout'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'

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

	return (
		<>
			<StructureLayout>
				<Header usuario />
				<Layout></Layout>
				<Footer />
			</StructureLayout>
		</>
	)
}

export default UserPage
