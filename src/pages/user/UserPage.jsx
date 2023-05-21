import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMainStore } from '../../stores/mainContext'
import StructureLayout from '../../components/StructureLayout'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Comment } from 'react-loader-spinner'
import { usePublicacionesUser } from '../../services/common'

const UserPage = () => {
	const user = useMainStore((state) => state.user)
	const navigate = useNavigate()
	const [publicaciones, setPublicaciones] = useState([])

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'USER_ROLE'
			}) &&
			navigate('/iniciar-sesion')
	}, [])

	useEffect(() => {
		usePublicacionesUser(user.token).then(setPublicaciones)
	}, [])

	return (
		<>
			<StructureLayout>
				<Header usuario />
				<Layout>
					<div className='inline-flex flex-wrap items-center justify-center gap-5'>
						{publicaciones ? (
							publicaciones.map(
								({
									status,
									title,
									description,
									type,
									img,
									createdAt,
									id,
									files,
								}) =>
									status && (
										<Card
											key={id}
											img={img[0]}
											title={title}
											subtitle={description}
											type={type}
											files={files}
										/>
									)
							)
						) : (
							<Comment
								visible={true}
								height='80'
								width='80'
								ariaLabel='comment-loading'
								wrapperStyle={{}}
								wrapperClass='comment-wrapper'
								color='#fff'
								backgroundColor='#4488ee'
							/>
						)}
					</div>
				</Layout>
				<Footer />
			</StructureLayout>
		</>
	)
}

export default UserPage
