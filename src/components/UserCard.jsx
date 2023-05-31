import { useEffect, useState } from 'react'
import { useChangeDataUser } from '../services/user'
import { ToastContainer } from 'react-toastify'
import { useIsArrayNotification } from '../hooks/useIsArrayNotification'
import { useCorrectChangeUserDataNotify } from '../hooks/Notifications'
import { useMainStore } from '../stores/mainContext'
import { useNavigate } from 'react-router-dom'

const UserCard = ({ userImage }) => {
	const { setUser, user } = useMainStore()
	const navigate = useNavigate()

	const [isEditing, setIsEditing] = useState(false)
	const [name, setName] = useState(user.name)
	const [mail, setMail] = useState(user.email)
	const [Dni, setDni] = useState(user.dni)
	const [tlfno, setTlfno] = useState(user.phone)
	const [photo, setPhoto] = useState(userImage)
	const [fileInput, setFileInput] = useState()

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'USER_ROLE'
			}) &&
			navigate('/iniciar-sesion')
	}, [user.email])

	const handleOnChangeApplyUserData = async () => {
		const peticion = await useChangeDataUser(
			user.token,
			name,
			Dni,
			tlfno,
			mail,
			user.id,
			photo,
			fileInput
		)
		if (peticion.error) {
			setName(user.name)
			setMail(user.email)
			setDni(user.dni)
			setTlfno(user.phone)
			setIsEditing(false)
			useIsArrayNotification(peticion.message)
		}
		if (peticion.statusCode == 200) {
			useCorrectChangeUserDataNotify()
			setUser({ name, email: mail, dni: Dni, phone: tlfno })
		}
		setIsEditing(false)
	}

	const handleOnClickCloseIcon = () => {
		setName(user.name)
		setMail(user.email)
		setDni(user.dni)
		setTlfno(user.phone)
		setIsEditing(false)
	}

	const handleClickEditButton = () => {
		setName(user.name)
		setMail(user.email)
		setDni(user.dni)
		setTlfno(user.phone)
		setIsEditing(false)
		setIsEditing(!isEditing)
	}

	const handleChangeName = () => {
		setName(event.target.value)
	}
	const handleChangeMail = () => {
		setMail(event.target.value)
	}
	const handleChangeDni = () => {
		setDni(event.target.value)
	}
	const handleChangePhone = () => {
		setTlfno(event.target.value)
	}
	const handleOnSetPhoto = () => {
		setFileInput(event.target)
		setPhoto(event.target.value)
	}

	return (
		<div className='flex items-center justify-center w-full '>
			<ToastContainer />
			<div className='relative flex flex-wrap justify-center gap-5 p-2 text-gray-600 rounded sm:justify-normal bg-gradient-to-r from-gray-100 to-gray-300 w-[480px]'>
				<div
					className={`absolute right-0 mr-1 transition-colors cursor-pointer hover:text-blue-700 ${
						isEditing && 'text-blue-400'
					}`}
				>
					<svg
						onClick={handleClickEditButton}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
						/>
					</svg>
				</div>

				<figure>
					{isEditing ? (
						<input
							enctype='multipart/form-data'
							accept='image/*'
							onChange={handleOnSetPhoto}
							type='file'
						/>
					) : (
						<img
							className='object-center object-cover rounded min-w-[100px] min-h-[133px] '
							width={100}
							height={100}
							src={photo}
							alt={user.name}
						/>
					)}
				</figure>
				<section className='flex flex-col justify-center gap-2'>
					<p className='font-bold'>
						Nombre:{' '}
						{isEditing ? (
							<input
								className='font-normal capitalize rounded'
								type='text'
								value={name}
								onChange={handleChangeName}
							/>
						) : (
							<span className='font-normal capitalize'> {user.name}</span>
						)}
					</p>
					<p className='font-bold'>
						Mail:{' '}
						{isEditing ? (
							<input
								className='font-normal rounded'
								type='email'
								value={mail}
								onChange={handleChangeMail}
							/>
						) : (
							<span className='font-normal '> {user.email}</span>
						)}
					</p>
					<p className='font-bold'>
						DNI:{' '}
						{isEditing ? (
							<input
								className='font-normal rounded'
								type='text'
								value={Dni}
								onChange={handleChangeDni}
							/>
						) : (
							<span className='font-normal '> {user.dni}</span>
						)}
					</p>
					<p className='font-bold'>
						Tlfno:{' '}
						{isEditing ? (
							<input
								className='font-normal rounded'
								type='tel'
								value={tlfno}
								onChange={handleChangePhone}
							/>
						) : (
							<span className='font-normal '> {user.phone}</span>
						)}
					</p>

					{isEditing && (
						<section className='absolute bottom-0 right-0 my-1 mr-1'>
							<svg
								onClick={handleOnClickCloseIcon}
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 text-red-600 cursor-pointer'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
							<svg
								onClick={handleOnChangeApplyUserData}
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 mt-2 text-green-600 cursor-pointer'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</section>
					)}
				</section>
			</div>
		</div>
	)
}

export default UserCard
