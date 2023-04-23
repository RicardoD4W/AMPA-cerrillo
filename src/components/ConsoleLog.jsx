import { useMainStore } from '../stores/mainContext'

const ConsoleLog = () => {
	const { emailLogin, passwordLogin, dataLogin, tasasLogin, user, logout } =
		useMainStore()

	return (
		<div className='absolute top-0 left-0 z-50 flex flex-col gap-3 p-5 text-white bg-gray-700 border border-white rounded opacity-25'>
			<p className='text-xs text-gray-300'>
				ConsoleLog.jsx --&gt; ./src/components
			</p>
			<p className='border-b'>
				Usuario:{' '}
				<pre className='font-medium max-w-[400px] overflow-y-auto'>
					{JSON.stringify(user)}
				</pre>{' '}
			</p>
			<p className='border-b'>
				emailLogin: <span className='font-medium '>{emailLogin}</span>{' '}
			</p>
			<p className='border-b'>
				passwordLogin: <span className='font-medium '>{passwordLogin}</span>{' '}
			</p>
			<p className='border-b'>
				dataLogin: <span className='font-medium '>{dataLogin}</span>{' '}
			</p>
			<p className='border-b'>
				tasasLogin: <span className='font-medium '>{tasasLogin}</span>{' '}
			</p>

			<button onClick={logout} className='p-1 border border-white bodder-1'>
				Logout
			</button>
		</div>
	)
}

export default ConsoleLog
