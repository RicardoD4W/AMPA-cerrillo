import { ToastContainer } from 'react-toastify'
import Header from './Header'
import Layout from './Layout'
import StructureLayout from './StructureLayout'
import Footer from './Footer'
import { IconSaveSuggestions, IconSuggestions } from './Icons'
import { useEffect, useRef, useState } from 'react'
import { useMainStore } from '../stores/mainContext'
import { useNavigate } from 'react-router-dom'
import { useGetAllSuggestions } from '../services/admin'
import SuggestionCard from './SuggestionCard'

const tabSelected =
	'inline-flex p-3 transition-colors border-b-2 rounded-t-lg border-slate-900 text-slate-900  group'
const tabNoSelected =
	'inline-flex p-3 transition-colors border-b-2 border-transparent rounded-t-lg hover:text-slate-400 hover:border-slate-300 group'

const AdminisTrarPeticiones = () => {
	const user = useMainStore((state) => state.user)
	const navigate = useNavigate()

	const [selectedAll, setSelectedAll] = useState(true)
	const [selectedSave, setSelectedSave] = useState(false)
	const [suggestionList, setSuggestionList] = useState([])
	const [filterSuggestionList, setFilterSuggestionList] = useState([])
	const [saveSuggestionList, setSaveSuggestionList] = useState([])
	const [filtro, setFiltro] = useState('')

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'ADMIN_ROLE'
			}) &&
			navigate('/iniciar-sesion')
	}, [])

	useEffect(() => {
		useGetAllSuggestions(user.token).then((res) => {
			setSuggestionList(res.suggestions)
			setFilterSuggestionList(res.suggestions)
		})
	}, [])

	const handleOnCLickTabAll = () => {
		setSelectedAll(true)
		setSelectedSave(false)
	}
	const handleOnCLickTabSave = () => {
		setSelectedSave(true)
		setSelectedAll(false)
	}

	const handleOnChangeInputTitlte = () => {
		setFiltro(event.target.value)
		setFilterSuggestionList(
			suggestionList.filter((suggestion) =>
				suggestion.title
					.toLowerCase()
					.trim()
					.includes(event.target.value.toLowerCase().trim())
			)
		)
	}

	return (
		<>
			<StructureLayout>
				<Header admin />
				<Layout>
					<ToastContainer />
					<div className='flex items-center justify-center w-full m-5'>
						<div className='border-b border-gray-200 '>
							<ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 '>
								<li className='mr-2 '>
									<button
										onClick={handleOnCLickTabAll}
										className={selectedAll ? tabSelected : tabNoSelected}
									>
										<IconSuggestions />
										Peticiones
									</button>
								</li>
								<li className='mr-2 '>
									<button
										onClick={handleOnCLickTabSave}
										className={selectedSave ? tabSelected : tabNoSelected}
									>
										<IconSaveSuggestions />
										Archivadas
									</button>
								</li>
							</ul>
						</div>
					</div>
				</Layout>

				<Layout>
					<input
						type='text'
						placeholder='Título o descripcción'
						className='p-1 rounded placeholder:text-center placeholder:text-sm'
						value={filtro}
						onChange={handleOnChangeInputTitlte}
					/>
				</Layout>

				<Layout>
					<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
						{filterSuggestionList.map((sugg) => (
							<article key={sugg.id}>
								<SuggestionCard
									title={sugg.title}
									description={sugg.description}
									time={sugg.createdAt._nanoseconds}
								/>
							</article>
						))}
					</div>
				</Layout>
				<Footer />
			</StructureLayout>
		</>
	)
}

export default AdminisTrarPeticiones
