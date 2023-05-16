import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMainStore } from '../stores/mainContext'

const Header = () => {
	const [navbar, setNavbar] = useState(false)
	const [role, setRole] = useState('')

	const user = useMainStore((state) => state.user)
	const guest = useMainStore((state) => state.guest)

	const navigate = useNavigate()

	useEffect(() => {
		user.roles?.map((rol) => {
			if (rol === 'ADMIN_ROLE' && user.paid) {
				setRole('ADMIN')
			}
			if (rol === 'USER_ROLE' && user.paid) {
				// redirigir a pag, prioridad baja
				setRole('USUARIO')
			}
		})
	}, [])

	if (guest || (!guest && user.email)) {
		return (
			<nav className='my-6 rounded-lg shadow bg-slate-100'>
				<div className='justify-between px-5 md:items-center md:flex '>
					<div>
						<div
							className={`${
								navbar && 'border-b-2'
							} flex items-center justify-between py-3  border-slate-300 md:py-5 md:block`}
						>
							<Link to='/'>
								<h2 className='font-bold md:text-2xl text-xxl'>
									AMPA EL CERRILLO
								</h2>
							</Link>

							<div className='md:hidden'>
								<button
									className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-6 h-6'
											viewBox='0 0 20 20'
											fill='currentColor'
										>
											<path
												fillRule='evenodd'
												d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
												clipRule='evenodd'
											/>
										</svg>
									) : (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-6 h-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M4 6h16M4 12h16M4 18h16'
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? 'block' : 'hidden'
							}`}
						>
							<ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
								<li className='text-gray-600 hover:text-blue-600'>
									<Link to='/registrarse'>Registrarse</Link>
								</li>
								<li className='text-gray-600 hover:text-blue-600'>
									<Link to='/iniciar-sesion'>Iniciar Sesión</Link>
								</li>
								<li className='pb-5 text-gray-600 md:pb-0 hover:text-blue-600'>
									<Link to='/pagina-principal'>Página principal</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		)
	} else if (role == 'ADMIN') {
		return (
			<nav className='my-6 rounded-lg shadow bg-slate-100'>
				<div className='justify-between px-5 md:items-center md:flex '>
					<div>
						<div
							className={`${
								navbar && 'border-b-2'
							} flex items-center justify-between py-3  border-slate-300 md:py-5 md:block`}
						>
							<Link to='/'>
								<h2 className='font-bold md:text-2xl text-xxl'>
									AMPA EL CERRILLO
								</h2>
							</Link>

							<div className='md:hidden'>
								<button
									className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-6 h-6'
											viewBox='0 0 20 20'
											fill='currentColor'
										>
											<path
												fillRule='evenodd'
												d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
												clipRule='evenodd'
											/>
										</svg>
									) : (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-6 h-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M4 6h16M4 12h16M4 18h16'
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? 'block' : 'hidden'
							}`}
						>
							<ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
								<li className='text-gray-600 hover:text-blue-600'>
									<Link to='/registrarse'>Registrarse</Link>
								</li>
								<li className='text-gray-600 hover:text-blue-600'>
									<Link to='/iniciar-sesion'>Iniciar Sesión</Link>
								</li>
								<li className='pb-5 text-gray-600 md:pb-0 hover:text-blue-600'>
									<Link to='/pagina-principal'>Página principal</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		)
	} else if (role == 'USUARIO') {
		return (
			<nav className='my-6 rounded-lg shadow bg-slate-100'>
				<div className='justify-between px-5 md:items-center md:flex '>
					<div>
						<div
							className={`${
								navbar && 'border-b-2'
							} flex items-center justify-between py-3  border-slate-300 md:py-5 md:block`}
						>
							<Link to='/'>
								<h2 className='font-bold md:text-2xl text-xxl'>
									AMPA EL CERRILLO
								</h2>
							</Link>

							<div className='md:hidden'>
								<button
									className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-6 h-6'
											viewBox='0 0 20 20'
											fill='currentColor'
										>
											<path
												fillRule='evenodd'
												d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
												clipRule='evenodd'
											/>
										</svg>
									) : (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-6 h-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M4 6h16M4 12h16M4 18h16'
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? 'block' : 'hidden'
							}`}
						>
							<ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
								<li className='text-gray-600 hover:text-blue-600'>
									<Link to='/registrarse'>Registrarse</Link>
								</li>
								<li className='text-gray-600 hover:text-blue-600'>
									<Link to='/iniciar-sesion'>Iniciar Sesión</Link>
								</li>
								<li className='pb-5 text-gray-600 md:pb-0 hover:text-blue-600'>
									<Link to='/pagina-principal'>Página principal</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		)
	} else {
		useEffect(() => {
			navigate('/')
		}, [])
	}
}

export default Header
