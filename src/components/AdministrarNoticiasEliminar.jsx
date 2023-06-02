import { useEffect, useState } from 'react'
import { useDeletePubliById, useGetAllPubli } from '../services/admin'
import { useMainStore } from '../stores/mainContext'
import { Comment } from 'react-loader-spinner'
import BadgeCard from './BadgeCard'
import { ToastContainer } from 'react-toastify'
import { useIsArrayNotification } from '../hooks/useIsArrayNotification'
import { useCorrectDeletePubli } from '../hooks/Notifications'

const AdministrarNoticiasEliminar = () => {
	const user = useMainStore((state) => state.user)

	const [publicaciones, setPublicaciones] = useState([])
	const [publicacionesFiltradas, setPublicacionesFiltradas] =
		useState(publicaciones)
	const [filtro, setFiltro] = useState('')

	useEffect(() => {
		useGetAllPubli(user.token).then((res) => {
			setPublicaciones(res.Adverts)
		})
		useGetAllPubli(user.token).then((res) => {
			setPublicacionesFiltradas(res.Adverts)
		})
	}, [])

	const handleOnChangeInputTitlte = () => {
		setFiltro(event.target.value)
		setPublicacionesFiltradas(
			publicaciones.filter(
				(publicacion) =>
					publicacion.title
						.toLowerCase()
						.trim()
						.includes(event.target.value.toLowerCase().trim()) ||
					(publicacion.type == 'ESCOLARES' &&
						'ESCOLARES'.toLowerCase().trim() ===
							event.target.value.toLowerCase().trim()) ||
					(publicacion.type == 'EXTRAESCOLARES' &&
						'EXTRAESCOLARES'.toLowerCase().trim() ===
							event.target.value.toLowerCase().trim()) ||
					(publicacion.audience == 'PRIVATE' &&
						'PRIVADA'.toLowerCase().trim() ===
							event.target.value.toLowerCase().trim()) ||
					(publicacion.audience == 'PUBLIC' &&
						'PUBLICA'.toLowerCase().trim() ===
							event.target.value.toLowerCase().trim())
			)
		)
	}

	const handleClickDeletePubli = (id) => () => {
		useDeletePubliById(user.token, id).then((res) => {
			if (res.error) {
				useIsArrayNotification(res.message)
			} else {
				useGetAllPubli(user.token).then((res) => {
					setPublicacionesFiltradas(res.Adverts)
				})
				useCorrectDeletePubli()
			}
		})
	}

	return (
		<>
			<div className=''>
				<ToastContainer />
				<section className='flex justify-center  [&>input]:rounded mb-4 flex-wrap  '>
					<input
						type='text'
						placeholder='Busque título o estado'
						value={filtro}
						onChange={handleOnChangeInputTitlte}
					/>
				</section>

				<div className='flex flex-col gap-5'>
					{publicacionesFiltradas.length > 0 ? (
						publicacionesFiltradas.map(
							({
								status,
								title,
								description,
								type,
								img,
								createdAt,
								id,
								files,
								audience,
							}) => (
								<BadgeCard
									key={id}
									id={id}
									title={title}
									type={type}
									img={img}
									fecha={createdAt._nanoseconds}
									files={files}
									audience={audience}
									action={handleClickDeletePubli}
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
			</div>
		</>
	)
}

export default AdministrarNoticiasEliminar
