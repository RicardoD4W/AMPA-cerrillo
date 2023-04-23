import { useState } from 'react'
import { useMainStore } from '../stores/mainContext'
import { useNavigate } from 'react-router-dom'
import { useRegister, useLogin } from '../services/auth'
import { ToastContainer } from 'react-toastify'
import { useIsArrayNotification } from '../hooks/useIsArrayNotification'

export function GenericLogin({ valueButtonSubmit = 'Registrarse' }) {
	const { setEmailLogin, setPassLogin, setTasasLogin, setDataLogin, setUser } =
		useMainStore()
	const navigate = useNavigate()

	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userData, setUserData] = useState(false)
	const [userTasas, setUserTasas] = useState(false)
	const [userName, setUserName] = useState('')
	const [isInvalid, setIsInvalid] = useState(false)

	const handleSubmitForm = (e) => {
		e.preventDefault()
		setEmailLogin(userEmail)
		setPassLogin(userPassword)
		setDataLogin(userData)
		setTasasLogin(userTasas)
		setUser({ name: userName, email: userEmail })

		if (valueButtonSubmit === 'Registrarse') {
			useRegister(userName, userEmail, userPassword).then((res) => {
				if (res.statusCode >= 200 && res.statusCode <= 206) {
					setUserEmail('')
					setUserName('')
					setUserPassword('')
					setUserData(false)
					setUserTasas(false)
					setIsInvalid(false)
					navigate('/iniciar-sesion')
				} else {
					setIsInvalid(true)
					useIsArrayNotification(res.message)
				}
			})
		}
		if (valueButtonSubmit === 'Iniciar Sesión') {
			useLogin(userEmail, userPassword).then((res) => {
				if (res.statusCode >= 200 && res.statusCode <= 206) {
					setUser({ ...res })
					setIsInvalid(false)
					navigate('/pagina-principal')
				} else {
					setIsInvalid(true)
					useIsArrayNotification(res.message)
				}
			})
		}
	}

	const handleChangeInputEmail = (e) => {
		setUserEmail(e.target.value)
	}
	const handleChangeInputPass = (e) => {
		setUserPassword(e.target.value)
	}
	const handleChangeInputName = (e) => {
		setUserName(e.target.value)
	}

	return (
		<div>
			<div className='h-screen '>
				<p className='absolute top-0 z-10 w-full p-2 font-semibold text-center text-white bg-blue-600'>
					AMPA EL CERRILLO del IES FERNANDO III
				</p>
				<ToastContainer />

				<div className='relative items-center h-full bg-gray-700 sm:grid sm:grid-cols-2'>
					<picture
						className='relative flex items-center justify-center w-full h-full bg-[url("./assets/ampa.jpg")]'
						style={{ backgroundSize: '100% 100%' }}
					></picture>

					<form
						onSubmit={handleSubmitForm}
						className=' lg:bg-gray-800 md:flex md:items-center md:justify-center md:m-auto md:relative max-[640px]:absolute max-[640px]:bg-gray-800/60  max-[640px]:top-1/4 max-[640px]:w-full max-[640px]:backdrop-blur-sm '
					>
						<div className='flex flex-col gap-5 p-20 rounded lg:border'>
							{valueButtonSubmit === 'Registrarse' && (
								<div>
									<label
										htmlFor='website-user'
										className='block mb-2 text-sm font-medium text-white'
									>
										Nombre Completo
									</label>
									<div className='flex'>
										<span className='inline-flex items-center px-3 text-sm text-gray-400 bg-gray-600 border border-r-0 border-gray-600 rounded-l-md'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-5 h-5'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
												/>
											</svg>
										</span>
										<input
											value={userName}
											onChange={handleChangeInputName}
											required
											type='text'
											id='website-user'
											className='max-[640px]:placeholder:text-[12px] rounded-none rounded-r-lg  border  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm  p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white '
											placeholder='Nombre Apellido1 Apellido2'
										/>
									</div>
								</div>
							)}

							<div>
								<label
									htmlFor='website-admin'
									className='block mb-2 text-sm font-medium text-white'
								>
									Email
								</label>
								<div className='flex'>
									<span
										className={
											isInvalid
												? 'border-red-600 border-r-0 inline-flex items-center px-3 text-sm text-gray-400 bg-gray-600 border   rounded-l-md'
												: 'inline-flex items-center px-3 text-sm text-gray-400 bg-gray-600 border border-r-0 border-gray-600  rounded-l-md'
										}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-5 h-5'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
											/>
										</svg>
									</span>
									<input
										value={userEmail}
										onChange={handleChangeInputEmail}
										required
										type='email'
										id='website-admin'
										className={
											isInvalid
												? 'border-red-600 border-l-0 max-[640px]:placeholder:text-[12px] rounded-none rounded-r-lg  border  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm  p-2.5  bg-gray-700  placeholder-gray-400 text-white '
												: 'max-[640px]:placeholder:text-[12px] rounded-none rounded-r-lg  border  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm  p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white '
										}
										placeholder='nombre@gmail.com'
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='website'
									className='block mb-2 text-sm font-medium text-white'
								>
									Password
								</label>
								<div className='flex'>
									<span
										className={
											isInvalid
												? ' border-red-600 inline-flex items-center px-3 text-sm text-gray-400 bg-gray-600 border border-r-0  rounded-l-md'
												: 'inline-flex items-center px-3 text-sm text-gray-400 bg-gray-600 border border-r-0 border-gray-600 rounded-l-md'
										}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-5 h-5'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
											/>
										</svg>
									</span>
									<input
										value={userPassword}
										onChange={handleChangeInputPass}
										required
										type='password'
										id='website'
										className={
											isInvalid
												? 'border-red-600 border-l-0 max-[640px]:placeholder:text-[12px] rounded-none rounded-r-lg  border   block flex-1 min-w-0 w-full text-sm  p-2.5  bg-gray-700  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
												: 'max-[640px]:placeholder:text-[12px] rounded-none rounded-r-lg  border   block flex-1 min-w-0 w-full text-sm  p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
										}
										placeholder='*********'
									/>
								</div>

								{valueButtonSubmit == 'Registrarse' && (
									<div className='flex flex-col gap-5 mt-5 text-white'>
										<label className='text-sm'>
											<input
												type='checkbox'
												className='m-2 scale-125 accent-gray-500'
												required
												checked={userData}
												onClick={() => setUserData(!userData)}
											/>
											Acepto el uso completo de mis datos personales con fines
											en la aplicación
										</label>
										<label className='text-sm'>
											<input
												className='m-2 scale-125 accent-gray-500'
												type='checkbox'
												required
												checked={userTasas}
												onClick={() => setUserTasas(!userTasas)}
											/>
											He realizado el pago previo de las tasas
										</label>
									</div>
								)}
								<div className='flex'>
									<input
										type='submit'
										className='w-full py-2 mt-8 font-semibold text-white transition-colors border rounded active:bg-gray-500 hover:text-black hover:border-black hover:bg-white'
										value={valueButtonSubmit}
									/>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
