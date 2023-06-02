import { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Layout from './Layout'
import StructureLayout from './StructureLayout'
import {
	IconAdminNoticeAll,
	IconAdminNoticeCreate,
	IconAdminNoticeDelete,
} from './Icons'
import AdministrarNoticiasAll from './AdministrarNoticiasAll'
import AdministrarNoticiasCrear from './AdministrarNoticiasCrear'
import AdministrarNoticiasEliminar from './AdministrarNoticiasEliminar'
import { useMainStore } from '../stores/mainContext'
import { useNavigate } from 'react-router-dom'

const tabSelected =
	'inline-flex p-3 transition-colors border-b-2 rounded-t-lg border-slate-900 text-slate-900  group'
const tabNoSelected =
	'inline-flex p-3 transition-colors border-b-2 border-transparent rounded-t-lg hover:text-slate-400 hover:border-slate-300 group'

const iconSelected = 'w-5 h-5 mr-2 transition-colors '
const iconNoSelected =
	'w-5 h-5 mr-2 transition-colors group-hover:text-slate-400'
const AdministrarNoticias = () => {
	const user = useMainStore((state) => state.user)
	const navigate = useNavigate()

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'ADMIN_ROLE'
			}) &&
			navigate('/iniciar-sesion')
	}, [])

	const [selectedAll, setSelectedAll] = useState(true)
	const [selectedSave, setSelectedSave] = useState(false)
	const [selectedDelete, setSelectedDelete] = useState(false)

	const handleOnCLickTabAll = () => {
		setSelectedAll(true)
		setSelectedSave(false)
		setSelectedDelete(false)
	}
	const handleOnCLickTabSave = () => {
		setSelectedSave(true)
		setSelectedAll(false)
		setSelectedDelete(false)
	}
	const handleOnCLickTabDelete = () => {
		setSelectedDelete(true)
		setSelectedSave(false)
		setSelectedAll(false)
	}

	return (
		<>
			<StructureLayout>
				<Header admin />
				<Layout>
					<div className='flex items-center justify-center w-full m-5'>
						<div className='border-b border-gray-200 '>
							<ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 '>
								<li className='px-2'>
									<button
										onClick={handleOnCLickTabAll}
										className={selectedAll ? tabSelected : tabNoSelected}
									>
										<IconAdminNoticeAll
											iconState={selectedAll ? iconSelected : iconNoSelected}
										/>
										Noticias
									</button>
								</li>
								<li className='px-2'>
									<button
										onClick={handleOnCLickTabSave}
										className={selectedSave ? tabSelected : tabNoSelected}
									>
										<IconAdminNoticeCreate
											iconState={selectedSave ? iconSelected : iconNoSelected}
										/>
										Crear
									</button>
								</li>
								<li className='px-2'>
									<button
										onClick={handleOnCLickTabDelete}
										className={selectedDelete ? tabSelected : tabNoSelected}
									>
										<IconAdminNoticeDelete
											iconState={selectedDelete ? iconSelected : iconNoSelected}
										/>
										Eliminar
									</button>
								</li>
							</ul>
						</div>
					</div>
				</Layout>

				<Layout>
					{selectedAll && <AdministrarNoticiasAll />}
					{selectedSave && <AdministrarNoticiasCrear />}
					{selectedDelete && <AdministrarNoticiasEliminar />}
				</Layout>
			</StructureLayout>
			<Footer />
		</>
	)
}

export default AdministrarNoticias
