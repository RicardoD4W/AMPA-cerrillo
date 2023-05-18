import { useEffect, useState } from 'react'
import './scroll.css'

const Card = ({ title, subtitle, type, img }) => {
	const [color, setColor] = useState()
	useEffect(() => {
		switch (type) {
			case 'EXTRAESCOLARES':
				setColor('purple')
				break
			case 'ESCOLARES':
				setColor('blue')
				break
		}
	}, [])

	return (
		<div className='max-w-[300px]  border rounded-lg shadow bg-slate-50 border-slate-300 '>
			<figure>
				<img
					className='rounded-t-lg object-cover w-full h-[150px] object-center'
					src={img}
					alt={title}
				/>
			</figure>
			<div className='p-3 max-h-[200px]  '>
				<h5 className='mb-2 text-xl font-bold tracking-tight text-slate-800'>
					{title}
				</h5>

				<p className=' border-slate-400  overflow-auto max-h-[100px] mb-2 text-sm font-normal text-slate-500 pr-2'>
					{subtitle}
				</p>

				<span
					className={` text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-${color}-900 text-${color}-300`}
				>
					{type}
				</span>
			</div>
		</div>
	)
}

export default Card
