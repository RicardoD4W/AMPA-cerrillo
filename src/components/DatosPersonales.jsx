import { useEffect, useState } from 'react'
import { useMainStore } from '../stores/mainContext'
import Footer from './Footer'
import Header from './Header'
import Layout from './Layout'
import StructureLayout from './StructureLayout'
import { useNavigate } from 'react-router-dom'
import UserCard from './UserCard'
import { useSearchChildsById } from '../services/user'
import ChildCard from './ChildCard'
import { BallTriangle } from 'react-loader-spinner'

const DatosPersonales = () => {
	const navigate = useNavigate()

	const user = useMainStore((state) => state.user)
	const [userImage, setuserImage] = useState(user.img)
	const [childs, setChilds] = useState()

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'USER_ROLE'
			}) &&
			navigate('/iniciar-sesion')

		user.img
			? setuserImage(user.img)
			: setuserImage(
					'https://img.freepik.com/vector-premium/icono-avatar-masculino-persona-desconocida-o-anonima-icono-perfil-avatar-predeterminado-usuario-redes-sociales-hombre-negocios-silueta-perfil-hombre-aislado-sobre-fondo-blanco-ilustracion-vectorial_735449-120.jpg'
			  )
	}, [])

	useEffect(() => {
		useSearchChildsById(user.id, user.token).then(setChilds)
	}, [])

	return (
		<>
			<StructureLayout>
				<Header usuario />
				<Layout>
					<UserCard userImage={userImage} />
				</Layout>

				<div className='flex flex-wrap items-center justify-center'>
					{childs ? (
						childs.map((child) => (
							<ChildCard
								id={child.id}
								key={child.id}
								name={child.name}
								course={child.course}
								classroom={child.classroom}
								mode={child.mode}
								img={''}
							/>
						))
					) : (
						<BallTriangle
							height={100}
							width={100}
							radius={5}
							color='#4488ee'
							ariaLabel='ball-triangle-loading'
							wrapperClass={{}}
							wrapperStyle=''
							visible={true}
						/>
					)}
				</div>

				<Footer />
			</StructureLayout>
		</>
	)
}

export default DatosPersonales
