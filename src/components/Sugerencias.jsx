import { ToastContainer } from 'react-toastify'
import Footer from './Footer'
import Header from './Header'
import Layout from './Layout'
import StructureLayout from './StructureLayout'
import { useNavigate } from 'react-router-dom'
import { useMainStore } from '../stores/mainContext'
import { useEffect, useState } from 'react'
import { usePostUserSuggestion } from '../services/user'
import { useIsArrayNotification } from '../hooks/useIsArrayNotification'
import { useCorrectPostSuggestionsNotify } from '../hooks/Notifications'

const Sugerencias = () => {
	const navigate = useNavigate()

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'USER_ROLE'
			}) &&
			navigate('/iniciar-sesion')
	}, [])

	const user = useMainStore((state) => state.user)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleOnInputTitleChange = () => {
		setTitle(event.target.value)
	}
	const handleOnTextAreaChange = () => {
		setDescription(event.target.value)
	}

	const handleOnSubmitForm = () => {
		usePostUserSuggestion(user.token, title, description, user.id).then(
			(res) => {
				if (res.error) {
					useIsArrayNotification(res.message)
				} else {
					useCorrectPostSuggestionsNotify(title)
					setTitle('')
					setDescription('')
				}
			}
		)
	}

	return (
		<>
			<>
				<StructureLayout>
					<Header usuario />
					<ToastContainer />
					<Layout>
						<div className='flex flex-col items-center justify-center gap-5 py-8 rounded bg-slate-300 w-96'>
							<section>
								<input
									type='text'
									name='title'
									id='title'
									className='p-1 text-center rounded text-slate-700 placeholder:text-slate-400'
									placeholder='Título de la sugerencia '
									onChange={handleOnInputTitleChange}
									value={title}
								/>
							</section>
							<section>
								<textarea
									name='description'
									id='description'
									cols='30'
									rows='10'
									className='p-1 placeholder:text-center'
									placeholder='Descripción de la sugerencia '
									onChange={handleOnTextAreaChange}
									value={description}
								></textarea>
							</section>
							<section>
								<button
									onClick={handleOnSubmitForm}
									className='px-3 py-1 font-semibold tracking-wide text-white transition-colors rounded bg-slate-400 hover:bg-slate-500 hover:text-slate-200 active:bg-slate-200 active:text-slate-500'
								>
									Enviar
								</button>
							</section>
						</div>
					</Layout>
				</StructureLayout>
				<Footer />
			</>
		</>
	)
}

export default Sugerencias
