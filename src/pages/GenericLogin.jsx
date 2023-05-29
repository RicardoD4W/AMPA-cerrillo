import { useState } from 'react'
import { useMainStore } from '../stores/mainContext'
import { Link, useNavigate } from 'react-router-dom'
import { useRegister, useLogin } from '../services/auth'
import { ToastContainer } from 'react-toastify'
import { useIsArrayNotification } from '../hooks/useIsArrayNotification'
import { useCorrectRegisterNotify } from '../hooks/Notifications'

import {
	IconEmail,
	IconNombreCompleto,
	IconPassword,
	IconPasswordInvisible,
	IconPasswordVisible,
} from '../components/Icons'

export function GenericLogin({ valueButtonSubmit = 'Registrarse' }) {
	const {
		setEmailLogin,
		setGuest,
		setPassLogin,
		setTasasLogin,
		setDataLogin,
		setUser,
		user,
	} = useMainStore()
	const navigate = useNavigate()

	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userData, setUserData] = useState(false)
	const [userTasas, setUserTasas] = useState(false)
	const [userName, setUserName] = useState('')
	const [isInvalid, setIsInvalid] = useState(false)
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

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
					useCorrectRegisterNotify(userName)
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
					setGuest(false)
					navigate(`/pagina-principal`)
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
				<Link
					to='/'
					className='absolute top-0 z-10 w-full p-2 font-semibold text-center text-white bg-slate-500'
				>
					AMPA EL CERRILLO del IES FERNANDO III
				</Link>

				<ToastContainer />

				<div className='relative items-center h-full bg-slate-300 sm:grid sm:grid-cols-2'>
					<picture
						className='relative flex items-center justify-center w-full h-full bg-[url("./assets/ampa.jpg")]'
						style={{ backgroundSize: '100% 100%' }}
					></picture>

					<form
						onSubmit={handleSubmitForm}
						className='rounded lg:bg-slate-400/70 md:flex md:items-center md:justify-center md:m-auto md:relative max-[640px]:absolute max-[640px]:bg-gray-800/60  max-[640px]:top-1/4 max-[640px]:w-full max-[640px]:backdrop-blur-sm '
					>
						<div className='flex flex-col gap-5 p-20 rounded lg:border lg:border-slate-300'>
							{valueButtonSubmit === 'Registrarse' && (
								<div>
									<label
										htmlFor='website-user'
										className='block mb-2 text-sm font-medium text-white'
									>
										Nombre Completo
									</label>
									<div className='flex'>
										<span className='inline-flex items-center px-3 text-sm border border-r-0 text-slate-700 bg-slate-300 border-slate-300 rounded-l-md'>
											<IconNombreCompleto />
										</span>
										<input
											value={userName}
											onChange={handleChangeInputName}
											required
											type='text'
											id='website-user'
											className='max-[640px]:placeholder:text-[12px] rounded-none rounded-r-lg  border   block flex-1 min-w-0 w-full text-sm  p-2.5  bg-slate-200 border-slate-200 placeholder-slate-500 text-slate-900 '
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
												? 'border-red-600 border-r-0 inline-flex items-center px-3 text-sm text-slate-700 bg-slate-300 border rounded-l-md'
												: 'inline-flex items-center px-3 text-sm text-slate-700 bg-slate-300 border border-r-0 border-slate-300 rounded-l-md'
										}
									>
										<IconEmail />
									</span>
									<input
										value={userEmail}
										onChange={handleChangeInputEmail}
										required
										type='email'
										id='website-admin'
										className={
											isInvalid
												? 'border-red-600 border-l-0 max-[640px]:placeholder:text-[12px] rounded-none rounded-r-lg  border   block flex-1 min-w-0 w-full text-sm  p-2.5  bg-slate-200  placeholder-slate-400 text-slate-600 '
												: 'max-[640px]:placeholder:text-[12px] rounded-none rounded-r-lg  border   block flex-1 min-w-0 w-full text-sm  p-2.5  bg-slate-200 border-slate-200 placeholder-slate-500 text-slate-900 '
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
												? ' border-red-600 inline-flex items-center px-3 text-sm text-slate-700 bg-slate-300 border border-r-0  rounded-l-md'
												: 'inline-flex items-center px-3 text-sm text-slate-700 bg-slate-300 border border-r-0 border-slate-300 rounded-l-md'
										}
									>
										<IconPassword />
									</span>
									<input
										value={userPassword}
										onChange={handleChangeInputPass}
										required
										type={isPasswordVisible ? 'text' : 'password'}
										id='website'
										className={
											isInvalid
												? 'border-red-600 border-x-0 max-[640px]:placeholder:text-[12px] rounded-none   border   block flex-1 min-w-0 w-full text-sm  p-2.5  bg-slate-200  placeholder-slate-400 text-slate-600 '
												: 'max-[640px]:placeholder:text-[12px] rounded-none   border   block flex-1 min-w-0 w-full text-sm  p-2.5  bg-slate-200 border-slate-200 placeholder-slate-500 text-slate-900 '
										}
										placeholder='*********'
									/>
									<span
										className={
											isInvalid
												? 'border-red-600 border-l-0 inline-flex items-center px-3 text-sm text-slate-700 bg-slate-300 border  rounded-r-lg'
												: 'inline-flex items-center px-3 text-sm text-slate-400 bg-slate-300 border border-slate-300 rounded-r-lg'
										}
									>
										{isPasswordVisible ? (
											<label
												onClick={() => {
													setIsPasswordVisible(false)
												}}
											>
												<IconPasswordVisible />
											</label>
										) : (
											<label
												onClick={() => {
													setIsPasswordVisible(true)
												}}
											>
												<IconPasswordInvisible />
											</label>
										)}
									</span>
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
										className='w-full py-2 mt-8 font-semibold text-white transition-colors rounded bg-slate-500 active:text-gray-300 active:bg-gray-500 hover:text-gray-200 hover:bg-slate-400'
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
