import { useEffect, useState } from 'react'
import { useGetAllPubli } from '../services/admin'
import { useMainStore } from '../stores/mainContext'
import Layout from './Layout'
import Card from './Card'
import { Comment } from 'react-loader-spinner'

const AdministrarNoticiasAll = () => {
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
			publicaciones.filter((publicacion) =>
				publicacion.title
					.toLowerCase()
					.trim()
					.includes(event.target.value.toLowerCase().trim())
			)
		)
	}

	return (
		<>
			<div className=''>
				<section className='flex justify-center  [&>input]:rounded mb-4 flex-wrap  '>
					<input
						type='text'
						placeholder='Busque por título'
						value={filtro}
						onChange={handleOnChangeInputTitlte}
					/>
				</section>

				<div className='inline-flex flex-wrap items-center justify-center gap-5'>
					{publicaciones && publicacionesFiltradas.length > 0 ? (
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
							}) =>
								status && (
									<Card
										key={id}
										id={id}
										userId={user.id}
										role='admin'
										img={img[0]}
										title={title}
										subtitle={description}
										type={type}
										files={files}
										fecha={createdAt._nanoseconds}
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

export default AdministrarNoticiasAll
