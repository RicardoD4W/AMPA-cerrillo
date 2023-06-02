import { useState } from 'react'
import { IconAddPublicacion, IconCloseModal } from './Icons'
import ModalCreatePubli from './ModalCreatePubli'
import { usePostOnePubli } from '../services/admin'
import { useMainStore } from '../stores/mainContext'
import { ToastContainer } from 'react-toastify'
import { useIsArrayNotification } from '../hooks/useIsArrayNotification'
import { useCorrectPostPubli } from '../hooks/Notifications'

const AdministrarNoticiasCrear = () => {
	const user = useMainStore((state) => state.user)

	const [open, setOpen] = useState(false)
	const [titulo, setTitulo] = useState('')
	const [descripccion, setDescripccion] = useState('')
	const [audiencia, setAudiencia] = useState('')
	const [tipo, setTipo] = useState('')
	const [publishOn, setPublishOn] = useState('')
	const [publishOut, setPublishOut] = useState('')
	const [photo, setPhoto] = useState('')
	const [files, setFiles] = useState('')

	const handleChangeTitulo = () => {
		setTitulo(event.target.value)
	}
	const handleChangeDescripccion = () => {
		setDescripccion(event.target.value)
	}
	const handleChangeAudiencia = () => {
		setAudiencia(event.target.value)
	}
	const handleChangeTipo = () => {
		setTipo(event.target.value)
	}
	const handleChangePublishOn = () => {
		setPublishOn(event.target.value)
	}
	const handleChangePublishOut = () => {
		setPublishOut(event.target.value)
	}
	const handleChangePhoto = () => {
		setPhoto(event.target.value)
	}
	const handleChangeFile = () => {
		setFiles(event.target.value)
	}

	const handleCancelAction = () => {
		setOpen(false)
		setTitulo('')
		setDescripccion('')
		setAudiencia('')
		setTipo('')
		setPublishOn('')
		setPublishOut('')
	}

	const handleClickPostPubli = () => {
		usePostOnePubli(
			user.token,
			titulo,
			descripccion,
			audiencia.toUpperCase(),
			tipo.toUpperCase(),
			new Date(publishOn),
			publishOut
		).then((res) => {
			if (res.error) useIsArrayNotification(res.message)
			else {
				useCorrectPostPubli()
				setTimeout(() => {
					handleCancelAction()
				}, 1500)
			}
		})
	}

	const handleFormatMinDate = (day = 0) => {
		let today = new Date()
		let dd = today.getDate() + day
		let mm = today.getMonth() + 1
		let yyyy = today.getFullYear()

		if (dd < 10) {
			dd = '0' + dd
		}
		if (mm < 10) {
			mm = '0' + mm
		}

		today = yyyy + '-' + mm + '-' + dd

		return today
	}

	return (
		<>
			{!open && <ToastContainer />}
			<button
				className='relative flex items-center justify-center text-white transition-colors rounded cursor-pointer bg-slate-400 w-60 h-80 hover:bg-slate-400/50 active:bg-slate-400 '
				type='button'
				onClick={() => setOpen(true)}
			>
				<IconAddPublicacion />
			</button>
			{open && (
				<>
					<div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
						{open && <ToastContainer />}
						<div className='relative max-w-3xl my-6'>
							<div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
								<div className='flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200'>
									<h3 className='text-3xl font-semibold'>Crear Publicación</h3>
									<button onClick={handleCancelAction}>
										<IconCloseModal />
									</button>
								</div>

								<div className='relative flex flex-col gap-5 p-6 [&>label]:flex [&>label]:items-center [&>label>span]:w-24'>
									<label>
										<span>Título: </span>
										<input
											className='border rounded border-slate-400 placeholder:text-center'
											type='text'
											value={titulo}
											onChange={handleChangeTitulo}
											placeholder='Título de la publicación'
										/>
									</label>
									<label>
										<span>Descripcción: </span>
										<textarea
											className='w-48 h-24 text-sm border rounded border-slate-400 placeholder:text-center'
											type='text'
											value={descripccion}
											onChange={handleChangeDescripccion}
											placeholder='Descripcción de la publicación'
										/>
									</label>
									<label>
										<span>Audiencia: </span>
										<div
											className='flex gap-3'
											onChange={handleChangeAudiencia}
										>
											<label className='flex gap-1'>
												Público
												<input
													className='border rounded border-slate-400 placeholder:text-center'
													type='radio'
													value='PUBLIC'
													placeholder='Título de la publicación'
													name='audiencia'
												/>
											</label>
											<label className='flex gap-1'>
												Privado
												<input
													className='border rounded border-slate-400 placeholder:text-center'
													type='radio'
													value='PRIVATE'
													placeholder='Título de la publicación'
													name='audiencia'
												/>
											</label>
										</div>
									</label>
									<label>
										<span>Tipo: </span>
										<div className='flex gap-3' onChange={handleChangeTipo}>
											<label className='flex gap-1'>
												Escolar
												<input
													className='border rounded border-slate-400 placeholder:text-center'
													type='radio'
													value='ESCOLARES'
													placeholder='Título de la publicación'
													name='tipo'
												/>
											</label>
											<label className='flex gap-1'>
												Extraescolar
												<input
													className='border rounded border-slate-400 placeholder:text-center'
													type='radio'
													value='EXTRAESCOLARES'
													placeholder='Título de la publicación'
													name='tipo'
												/>
											</label>
										</div>
									</label>
									<label>
										<span>Foto: </span>
										<input
											value={photo}
											onChange={setPhoto}
											type='file'
											accept='image/*'
											className='w-[9.5rem]'
										/>
										{/* TODO estilar input */}
									</label>
									<label>
										<span>Pdfs: </span>
										<input
											value={files}
											onChange={setFiles}
											type='file'
											accept='application/pdf'
											className='w-[7.5rem]'
											multiple
										/>
									</label>
									<label>
										<span>Fecha de publicación: </span>
										<input
											className='border rounded border-slate-400 placeholder:text-center'
											type='date'
											min={handleFormatMinDate()}
											value={publishOn}
											onChange={handleChangePublishOn}
											placeholder='Título de la publicación'
										/>
									</label>
									<label>
										<span>Fecha para borrarse: </span>
										<input
											className='border rounded border-slate-400 placeholder:text-center'
											type='date'
											min={handleFormatMinDate(1)}
											value={publishOut}
											onChange={handleChangePublishOut}
											placeholder='Título de la publicación'
										/>
									</label>
								</div>
								<div className='flex items-center justify-between p-3 border-t border-solid rounded-b border-slate-200'>
									<button
										className='px-4 py-2 mb-1 mr-1 text-sm font-bold text-red-400 uppercase transition-all duration-150 ease-linear border-2 border-transparent rounded outline-none hover:border-2 hover:border-red-500 hover:text-red-500 background-transparent focus:outline-none'
										type='button'
										onClick={handleCancelAction}
									>
										Cerrar
									</button>
									<button
										className='px-4 py-2 mb-1 mr-1 text-sm font-bold text-blue-400 uppercase transition-all duration-150 ease-linear border-2 border-blue-400 rounded shadow outline-none hover:text-blue-500 hover:border-blue-500 botder-1 hover:shadow-lg focus:outline-none'
										type='button'
										onClick={handleClickPostPubli}
									>
										Publicar
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='fixed inset-0 z-40 bg-black opacity-25'></div>
				</>
			)}
		</>
	)
}

export default AdministrarNoticiasCrear
