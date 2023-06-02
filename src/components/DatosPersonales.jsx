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
import { useLogin } from '../services/auth'
import { ToastContainer } from 'react-toastify'

const DatosPersonales = () => {
	const navigate = useNavigate()
	const user = useMainStore((state) => state.user)
	const [childs, setChilds] = useState()

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'USER_ROLE'
			}) &&
			navigate('/iniciar-sesion')
	}, [])

	useEffect(() => {
		useSearchChildsById(user.id, user.token).then(setChilds)
	}, [])

	return (
		<>
			<StructureLayout>
				<ToastContainer />
				<Header usuario />
				<Layout>
					<UserCard />
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
			</StructureLayout>
			<Footer />
		</>
	)
}

export default DatosPersonales
