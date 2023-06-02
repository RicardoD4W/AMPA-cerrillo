import { useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Layout from './Layout'
import StructureLayout from './StructureLayout'
import { useEffect } from 'react'
import { useMainStore } from '../stores/mainContext'

const CardDetail = () => {
	const user = useMainStore((state) => state.user)
	const navigate = useNavigate()
	const { role, id, idPublicacion } = useParams()

	useEffect(() => {
		!user.email && navigate('/iniciar-sesion')
	}, [])

	return (
		<>
			<StructureLayout>
				{role == 'pagina-usuario' && <Header usuario />}
				{role == 'pagina-admin' && <Header admin />}
				<Layout>
					<p>{role}</p>
					<p>{id}</p>
					<p>{idPublicacion}</p>
				</Layout>
			</StructureLayout>
			<Footer />
		</>
	)
}

export default CardDetail
