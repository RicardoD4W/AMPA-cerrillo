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
	const [publicacionesFiltradas, setPublicacionesFiltradas] = useState([])
	const [filtro, setFiltro] = useState('')
	const [isExtraescolar, setIsExtraescolar] = useState(true)
	const [isEscolar, setIsEscolar] = useState(true)
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'USER_ROLE'
			}) &&
			navigate('/iniciar-sesion')
	}, [])

	useEffect(() => {
		usePublicacionesUser(user.token).then((res) => {
			setPublicaciones(res.Adverts)
		})
		usePublicacionesUser(user.token).then((res) => {
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

	const handleOnCheckEscolar = () => {
		setIsEscolar(!isEscolar)

		if (isEscolar) {
			setIsExtraescolar(true)
			setPublicacionesFiltradas(
				publicaciones.filter(
					(publicacion) => isEscolar && publicacion.type === 'ESCOLARES'
				)
			)
		} else {
			setPublicacionesFiltradas(publicaciones)
		}
	}

	const handleOnCheckExtraEscolar = () => {
		setIsExtraescolar(!isExtraescolar)

		if (isExtraescolar) {
			setIsEscolar(true)
			setPublicacionesFiltradas(
				publicaciones.filter(
					(publicacion) =>
						isExtraescolar && publicacion.type === 'EXTRAESCOLARES'
				)
			)
		} else {
			setPublicacionesFiltradas(publicaciones)
		}
	}

	const handleOnGoPreviusPage = () => {
		if (offset <= 0) return
		setOffset(offset - 4)
	}
	const handleOnGoNextPage = () => {
		if (offset + 4 >= publicaciones.length) return
		setOffset(offset + 4)
	}

	return (
		<>
			<StructureLayout>
				<Header usuario />
				<Layout>
					<div>
						<section className='flex sm:justify-between justify-center [&>input]:rounded m-3 flex-wrap  '>
							<input
								type='text'
								placeholder='Busque por título'
								value={filtro}
								onChange={handleOnChangeInputTitlte}
							/>
							{/* <div className='flex items-center gap-5 text-center'>
								<svg
									onClick={handleOnGoPreviusPage}
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className={`w-6 h-6 transition-transform hover:scale-125 ${
										offset <= 0
											? 'text-gray-400 hover:scale-100 cursor-not-allowed'
											: 'cursor-pointer'
									}`}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
									/>
								</svg>
								<svg
									onClick={handleOnGoNextPage}
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className={`w-6 h-6 transition-transform  hover:scale-125 ${
										offset + 4 >= publicaciones.length
											? 'text-gray-400 hover:scale-100 cursor-not-allowed'
											: 'cursor-pointer'
									}`}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
									/>
								</svg>
							</div> */}
							<div className='flex text-center gap-x-5'>
								<label>
									<span>Extraescolares</span>{' '}
									<input
										className='accent-slate-500'
										type='checkbox'
										checked={!isExtraescolar}
										onChange={handleOnCheckExtraEscolar}
									/>
								</label>
								<label>
									<span>Escolares</span>{' '}
									<input
										className=' accent-slate-500'
										type='checkbox'
										checked={!isEscolar}
										onChange={handleOnCheckEscolar}
									/>{' '}
								</label>
							</div>
						</section>

						<div className='inline-flex flex-wrap items-center justify-center gap-5'>
							{publicacionesFiltradas.length > 0 ? (
								publicacionesFiltradas
									// .slice(offset, offset + 4)
									.map(
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
				</Layout>
				<Footer />
			</StructureLayout>
		</>
	)
}

export default UserPage
