import { useState } from 'react'
import { IconMinus, IconPlus } from './Icons'

const taskSave =
	'relative max-w-sm p-6 bg-blue-300  border border-gray-200 rounded-lg shadow max-h-min '
const taskSavent =
	'relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow max-h-min'
const SuggestionCard = ({ title, description, time }) => {
	const [isSave, setIsSave] = useState(false)

	const handleClickSuggestion = () => {
		setIsSave(!isSave)
		isSave ? '' : '' //TODO Guardar y llamar a la api
	}

	return (
		<>
			<div className={isSave ? taskSave : taskSavent}>
				<button
					onClick={handleClickSuggestion}
					className='absolute top-0 right-0 p-1 m-1 transition-colors rounded-full cursor-pointer hover:bg-gray-500/20 active:bg-gray-500/50'
				>
					{isSave ? <IconMinus /> : <IconPlus />}
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
