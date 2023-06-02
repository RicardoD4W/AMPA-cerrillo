import { useEffect, useState } from 'react'
import './scroll.css'

const Card = ({ title, subtitle, type, img, files, fecha }) => {
	const [fechaPublicacion, setFechaPublicacion] = useState(fecha)

	useEffect(() => {
		setFechaPublicacion(new Date(fecha).toLocaleDateString())
	}, [])

	return (
		<div className='max-w-[300px] min-w-[300px]  border rounded-lg shadow bg-slate-50 border-slate-300  overflow-hidden'>
			<figure>
				<img
					className='rounded-t-lg object-cover w-full h-[150px] object-center'
					src={img}
					alt={title}
				/>
			</figure>
			<div className='p-3 max-h-[205px]  '>
				<h5 className='mb-2 overflow-auto text-lg font-bold tracking-tight text-slate-800'>
					{title}
					<span className='float-right mr-1 text-sm italic font-normal'>
						{fechaPublicacion}
					</span>
				</h5>

				<p className=' border-slate-400 min-h-[80px] overflow-auto max-h-[100px] mb-2 text-sm font-normal text-slate-500 pr-2'>
					{subtitle}
				</p>

				<section className='flex flex-wrap '>
					{type === 'EXTRAESCOLARES' && (
						<span
							className={`flex items-center text-xs font-medium mr-2 px-2.5 py-[2px] rounded bg-purple-700/80 text-purple-300 `}
						>
							{type}
						</span>
					)}
					{type === 'ESCOLARES' && (
						<span
							className={`flex items-center text-xs font-medium mr-2 px-2.5 py-[2px] rounded bg-blue-700/80 text-blue-300`}
						>
							{type}
						</span>
					)}
					{files &&
						files.map(() => (
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
						))}
				</section>
			</div>
		</div>
	)
}

export default Card
