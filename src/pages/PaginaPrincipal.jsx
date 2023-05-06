import { useMainStore } from '../stores/mainContext'
import { useEffect, useState } from 'react'
import { Watch } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

const PaginaPrincipal = () => {
	const user = useMainStore((state) => state.user)
	const guest = useMainStore((state) => state.guest)

	const navigate = useNavigate()

	if (!guest) {
		useEffect(() => {
			!user.email && navigate('/iniciar-sesion')
			user.roles?.map((rol) => {
				if (rol === 'SUPERADMIN_ROLE' && user.paid) {
					// redirigir a pag,  prioridad mas alto
				}
				if (rol === 'ADMIN_ROLE' && user.paid) {
					// redirigir a pag, prioridad media
					navigate('/pagina-admin')
				}
				if (rol === 'USER_ROLE' && user.paid) {
					// redirigir a pag, prioridad baja
					navigate('/pagina-usuario')
				}
			})
		}, [user.paid, user.roles])

		return (
			<>
				<div className='flex flex-col items-center justify-center h-screen gap-10 bg-slate-200'>
					<Watch
						height='80'
						width='80'
						radius='48'
						color='#48e'
						ariaLabel='watch-loading'
						wrapperStyle={{}}
						wrapperClassName=''
						visible={true}
					/>
					<p className='text-xl font-medium text-center'>
						Por favor espere, el administrador está validando su cuenta.
					</p>
				</div>
			</>
		)
	} else {
		return <>guest page</>
	}
}

export default PaginaPrincipal
