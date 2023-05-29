import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { useChangeDataChild } from '../services/user'
import { useMainStore } from '../stores/mainContext'
import { useIsArrayNotification } from '../hooks/useIsArrayNotification'
import {
	useCorrectChangeChildDataNotify,
	useCorrectChangeUserDataNotify,
} from '../hooks/Notifications'

const ChildCard = ({ name, course, mode, classroom, img, id }) => {
	const { user } = useMainStore()

	const [isEditing, setIsEditing] = useState(false)
	const [childImg, setChildImg] = useState(img)
	const [childName, setChildName] = useState(name)
	const [childCourse, setChildCourse] = useState(course)
	const [childMode, setChildMode] = useState(mode)
	const [childClassroom, setChildClassroom] = useState(classroom)

	const handleChangeChildName = () => {
		setChildName(event.target.value)
	}
	const handleChangeChildCourse = () => {
		setChildCourse(event.target.value)
	}
	const handleChangeChildMode = () => {
		setChildMode(event.target.value)
	}
	const handleChangeChildClassroom = () => {
		setChildClassroom(event.target.value)
	}

	const handleClickEditButton = () => {
		setChildName(name)
		setChildCourse(course)
		setChildMode(mode)
		setChildClassroom(classroom)
		setIsEditing(!isEditing)
	}

	const handleOnClickCloseIcon = () => {
		setChildName(name)
		setChildCourse(course)
		setChildMode(mode)
		setChildClassroom(classroom)
		setIsEditing(false)
	}

	const handleOnChangeApplyChildData = async () => {
		const peticion = await useChangeDataChild(
			id,
			user.token,
			childName,
			childCourse,
			childClassroom,
			childMode
		)

		if (peticion.error) {
			setChildName(name)
			setChildCourse(course)
			setChildMode(mode)
			setChildClassroom(classroom)
			setIsEditing(false)
			useIsArrayNotification(peticion.message)
		}
		if (peticion.id) {
			useCorrectChangeChildDataNotify(peticion.name)
			setChildName(peticion.name)
			setChildCourse(peticion.course)
			setChildMode(peticion.mode)
			setChildClassroom(peticion.classroom)
			setIsEditing(false)
		}
		setIsEditing(false)
	}

	useEffect(() => {
		!childImg &&
			setChildImg(
				'https://img.freepik.com/vector-premium/icono-avatar-masculino-persona-desconocida-o-anonima-icono-perfil-avatar-predeterminado-usuario-redes-sociales-hombre-negocios-silueta-perfil-hombre-aislado-sobre-fondo-blanco-ilustracion-vectorial_735449-120.jpg'
			)
	}, [])

	return (
		<div className='m-3'>
			<ToastContainer />
			<div className='relative flex flex-wrap justify-center gap-5 p-2 text-gray-600 rounded w-80 sm:justify-normal bg-gradient-to-r from-gray-100 to-gray-300'>
				<div
					className={`absolute right-0 mr-1 transition-colors cursor-pointer hover:text-blue-700 ${
						isEditing && 'text-blue-400'
					}`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
						onClick={handleClickEditButton}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
						/>
					</svg>
				</div>

				<figure>
					<img
						className='object-center object-cover rounded min-w-[100px] min-h-[133px] '
						width={100}
						height={100}
						src={childImg}
						alt={name}
					/>
				</figure>
				<section className='flex flex-col justify-center gap-2'>
					<p className='font-bold'>
						Nombre:{' '}
						{isEditing ? (
							<input
								className='font-normal capitalize rounded'
								type='text'
								value={childName}
								onChange={handleChangeChildName}
							/>
						) : (
							<span className='font-normal capitalize'> {childName} </span>
						)}
					</p>
					<p className='font-bold'>
						Curso:{' '}
						{isEditing ? (
							<input
								className='font-normal rounded'
								type='text'
								value={childCourse}
								onChange={handleChangeChildCourse}
							/>
						) : (
							<span className='font-normal '> {childCourse} </span>
						)}
					</p>
					<p className='font-bold'>
						Modalidad:{' '}
						{isEditing ? (
							<input
								className='font-normal rounded'
								type='text'
								value={childMode}
								onChange={handleChangeChildMode}
							/>
						) : (
							<span className='font-normal '>{childMode}</span>
						)}
					</p>
					<p className='font-bold'>
						Clase:{' '}
						{isEditing ? (
							<input
								className='font-normal rounded'
								type='text'
								maxLength='1'
								value={childClassroom}
								onChange={handleChangeChildClassroom}
							/>
						) : (
							<span className='font-normal '>{childClassroom} </span>
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
								onClick={handleOnChangeApplyChildData}
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

export default ChildCard
