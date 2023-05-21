import { useEffect, useState } from 'react'
import { useMainStore } from '../stores/mainContext'
import Footer from './Footer'
import Header from './Header'
import Layout from './Layout'
import StructureLayout from './StructureLayout'
import { useNavigate } from 'react-router-dom'

const DatosPersonales = () => {
	const navigate = useNavigate()

	const user = useMainStore((state) => state.user)
	const [userImage, setuserImage] = useState(user.img)

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

	return (
		<>
			<StructureLayout>
				<Header usuario />
				<Layout>
					<div className='flex items-center justify-center w-full '>
						<div className='flex flex-wrap justify-center gap-5 p-2 text-gray-600 rounded bg-gradient-to-r from-gray-100 to-gray-300 sm:justify-normal w-96'>
							<figure>
								<img
									className='object-center object-cover rounded min-w-[100px] min-h-[133px] '
									width={100}
									height={100}
									src={userImage}
									alt={user.name}
								/>
							</figure>
							<section className='flex flex-col justify-center gap-2'>
								<p className='font-bold'>
									Nombre:{' '}
									<span className='font-normal capitalize'> {user.name}</span>
								</p>
								<p className='font-bold'>
									Mail: <span className='font-normal '> {user.email}</span>
								</p>
								<p className='font-bold'>
									DNI: <span className='font-normal'> {user.dni}</span>
								</p>
								<p className='font-bold'>
									Tlfno: <span className='font-normal'> {user.phone}</span>
								</p>
							</section>
						</div>
					</div>
				</Layout>
				<Layout>
					<button className='px-5 py-2 font-semibold transition-all duration-300 rounded bg-gradient-to-r from-white to-gray-400 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:text-white '>
						Editar
						{/* TODO editar datos */}
						{/* TODO añadir hijos */}
					</button>
				</Layout>
				<Footer />
			</StructureLayout>
		</>
	)
}

export default DatosPersonales
