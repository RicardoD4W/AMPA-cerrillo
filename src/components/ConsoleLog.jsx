import { useMainStore } from '../stores/mainContext'

const ConsoleLog = () => {
	const {
		emailLogin,
		role,
		passwordLogin,
		dataLogin,
		tasasLogin,
		logout,
		name,
	} = useMainStore()

	return (
		<div className='absolute top-0 left-0 z-50 flex flex-col gap-3 p-5 text-white bg-gray-700 border border-white rounded'>
			<p className='text-xs text-gray-300'>
				ConsoleLog.jsx --&gt; ./src/components
			</p>
			<p className='border-b'>
				Nombre entero: <span className='font-medium'>{name}</span>{' '}
			</p>
			<p className='border-b'>
				Email Login: <span className='font-medium'>{emailLogin}</span>{' '}
			</p>
			<p className='border-b'>
				Password Login: <span className='font-medium'>{passwordLogin}</span>{' '}
			</p>
			<p className='border-b'>
				Marcada casilla datos:{' '}
				<span className='font-medium'>{dataLogin.toString()}</span>{' '}
			</p>
			<p className='border-b'>
				Marcada casilla pago:{' '}
				<span className='font-medium'>{tasasLogin.toString()}</span>{' '}
			</p>
			<p className='border-b'>
				Role: <span className='font-medium'>{role}</span>{' '}
			</p>
			<div>
				<button onClick={logout} className='p-1 border border-white bodder-1'>
					Logout
				</button>
			</div>
		</div>
	)
}

export default ConsoleLog
