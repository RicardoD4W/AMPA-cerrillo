import { IconPlus } from './Icons'

const SuggestionCard = ({ title, description, time }) => {
	return (
		<>
			<div className='relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow '>
				<button className='absolute top-0 right-0 p-1 m-1 transition-colors rounded-full cursor-pointer hover:bg-gray-500/20 active:bg-gray-500/50'>
					<IconPlus />
				</button>
				<div>
					<h5 className='p-1 mb-2 text-lg font-semibold tracking-tight text-center text-gray-900 border-b-2 md:text-2xl sm:text-xl border-slate-300 '>
						{title}
					</h5>
				</div>
				<p className='mb-3 text-xs font-normal text-gray-500 sm:text-sm md:text-base '>
					{description}
				</p>
			</div>
		</>
	)
}

export default SuggestionCard
