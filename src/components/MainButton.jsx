import { Link } from 'react-router-dom'

const MainButton = ({ title, route, acction }) => {
	if (acction) {
		return (
			<Link
				onClick={acction}
				to={route}
				className='px-4 py-3 font-bold text-white transition-all border-b-8 rounded bg-slate-400 border-slate-500 active:border-b-0 active:bg-slate-600 active:text-gray-300 hover:bg-gray-400 hover:border-slate-500'
			>
				{title}
			</Link>
		)
	} else {
		return (
			<Link
				to={route}
				className='px-4 py-3 font-bold text-white transition-all border-b-8 rounded bg-slate-400 border-slate-500 active:border-b-0 active:bg-slate-600 active:text-gray-300 hover:bg-gray-400 hover:border-slate-500'
			>
				{title}
			</Link>
		)
	}
}

export default MainButton
