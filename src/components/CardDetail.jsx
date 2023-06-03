import { useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Layout from './Layout'
import StructureLayout from './StructureLayout'
import { useEffect, useState } from 'react'
import { useMainStore } from '../stores/mainContext'
import { useGetOnePubli } from '../services/common'
import { FallingLines } from 'react-loader-spinner'

const CardDetail = () => {
	useEffect(() => {
		!user.email && navigate('/iniciar-sesion')
	}, [])

	const user = useMainStore((state) => state.user)
	const navigate = useNavigate()
	const { role, id, idPublicacion } = useParams()

	const [publicacion, setPublicacion] = useState()
	const [fechaPublicacion, setFechaPublicacion] = useState()
	useEffect(() => {
		useGetOnePubli(user.token, idPublicacion).then((res) => {
			setPublicacion(res)
			setFechaPublicacion(
				new Date(res.createdAt._nanoseconds).toLocaleDateString()
			)
		})
	}, [])

	return (
		<>
			<StructureLayout>
				{role == 'pagina-usuario' && <Header usuario />}
				{role == 'pagina-admin' && <Header admin />}
				<Layout>
					{publicacion ? (
						<div className='w-[60%] border rounded-lg shadow bg-slate-50 border-slate-300'>
							<figure>
								<img
									className='TODO ESTILAR FOTO'
									src={publicacion.img}
									alt={publicacion.title}
								/>
							</figure>
							<div className='p-3 '>
								<h5 className='mb-2 text-lg font-bold tracking-tight text-slate-800'>
									{publicacion.title}
									<span className='float-right mr-1 text-sm italic font-normal'>
										{fechaPublicacion}
									</span>
								</h5>

								<p className=' border-slate-400 min-h-[80px] overflow-auto mb-2 text-sm font-normal text-slate-500 pr-2'>
									{publicacion.description}
								</p>

								<section className='flex flex-wrap '>
									{publicacion.type === 'EXTRAESCOLARES' && (
										<span
											className={`flex items-center text-xs font-medium mr-2 px-2.5 py-[2px] rounded bg-purple-700/80 text-purple-300 `}
										>
											{publicacion.type}
										</span>
									)}
									{publicacion.type === 'ESCOLARES' && (
										<span
											className={`flex items-center text-xs font-medium mr-2 px-2.5 py-[2px] rounded bg-blue-700/80 text-blue-300`}
										>
											{publicacion.type}
										</span>
									)}
									{publicacion.files &&
										publicacion.files.map((value) => (
											<span key={value}>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth={1.5}
													stroke='currentColor'
													className={`w-6 h-6  `}
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
													/>
												</svg>
											</span>
										))}
								</section>
							</div>
						</div>
					) : (
						<FallingLines
							color='#48e'
							width='100'
							visible={true}
							ariaLabel='falling-lines-loading'
						/>
					)}
				</Layout>
			</StructureLayout>
			<Footer />
		</>
	)
}

export default CardDetail
