import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import StructureLayout from '../../components/StructureLayout'
import { useMainStore } from '../../stores/mainContext'
import { useNavigate } from 'react-router-dom'
import { usePublicaciones } from '../../services/common'
import Card from '../../components/Card'

const GuestPage = () => {
	const navigate = useNavigate()

	const user = useMainStore((state) => state.user)
	const guest = useMainStore((state) => state.guest)

	const [publicaciones, setPublicaciones] = useState([])

	useEffect(() => {
		if (guest) return

		user.roles?.map((rol) => {
			if (rol === 'SUPERADMIN_ROLE' && user.paid) {
				// redirigir a pag,  prioridad mas alto
			}
			if (rol === 'ADMIN_ROLE' && user.paid) {
				// redirigir a pag, prioridad media
				navigate('/pagina-admin')
			}
			if (rol === 'USER_ROLE' && user.paid) {
				// redirigir a pag, prioridad baja
				navigate('/pagina-usuario')
			}
		})
	}, [])
	useEffect(() => {
		if (!guest) return
		usePublicaciones().then(setPublicaciones)
	}, [])

	return (
		<>
			<StructureLayout>
				<Header />
				<Layout>
					<div className='inline-flex flex-wrap items-center justify-center gap-5'>
						{publicaciones.map(
							({ title, description, type, img, createdAt, id }) => (
								<Card
									key={id}
									img={img[0]}
									title={title}
									subtitle={description}
									type={type}
								/>
							)
						)}
					</div>
				</Layout>
				<Footer />
			</StructureLayout>
		</>
	)
}

export default GuestPage
