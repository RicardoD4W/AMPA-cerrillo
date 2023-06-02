import { useEffect, useState } from 'react'
import { IconTrash } from './Icons'
import { useMainStore } from '../stores/mainContext'
import { useDeletePubliById } from '../services/admin'
import { useIsArrayNotification } from '../hooks/useIsArrayNotification'
import { useCorrectDeletePubli } from '../hooks/Notifications'
import { ToastContainer } from 'react-toastify'

const BadgeCard = ({
	id,
	title,
	type,
	img,
	fecha,
	files,
	audience,
	action,
}) => {
	const user = useMainStore((state) => state.user)
	const [fechaPublicacion, setFechaPublicacion] = useState(fecha)
	useEffect(() => {
		setFechaPublicacion(new Date(fecha).toLocaleDateString())
	}, [])

	return (
		<>
			<article className='rounded-xl p-0.5 shadow-xl transition hover:shadow-sm '>
				<div className='rounded-[10px] bg-white  p-2'>
					<span className='block text-xs text-slate-500'>
						{fechaPublicacion}
					</span>

					<div className='flex flex-wrap '>
						<div className='flex items-center gap-x-1 md:w-[700px]'>
							{img && (
								<img className='object-cover w-10' src={img} alt={title} />
							)}
							<h3 className='mt-0.5 text-lg font-medium text-slate-800 '>
								{title}
							</h3>
							{files.length > 0 && (
								<span>
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
							)}
						</div>

						<div className='flex justify-end flex-1'>
							{type === 'EXTRAESCOLARES' && (
								<span
									className={`flex items-center text-xs font-medium mr-2 px-2 rounded bg-purple-700/80 text-purple-300 `}
								>
									{type}
								</span>
							)}
							{type === 'ESCOLARES' && (
								<span
									className={`flex items-center text-xs font-medium mr-2 px-2 rounded bg-blue-700/80 text-blue-300`}
								>
									{type}
								</span>
							)}

							{audience === 'PUBLIC' && (
								<span
									className={`flex items-center text-xs font-medium mr-2 px-2 rounded bg-green-700/80 text-green-300 `}
								>
									PÚBLICA
								</span>
							)}
							{audience === 'PRIVATE' && (
								<span
									className={`flex items-center text-xs font-medium mr-2 px-2 rounded bg-red-700/80 text-red-300`}
								>
									PRIVADA
								</span>
							)}

							<div className='ml-4 transition-colors cursor-pointer hover:text-red-600'>
								<button onClick={action(id)}>
									<IconTrash />
								</button>
							</div>
						</div>
					</div>
				</div>
			</article>
		</>
	)
}

export default BadgeCard
