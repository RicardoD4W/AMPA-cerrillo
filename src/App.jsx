import { Link } from 'react-router-dom'

function App() {
	return (
		<>
			<div>
				<div className='h-screen '>
					<p className='absolute top-0 z-10 w-full p-2 font-semibold text-center text-white bg-blue-600'>
						AMPA EL CERRILLO del IES FERNANDO III
					</p>

					<div className='relative items-center h-full bg-gray-700 sm:grid sm:grid-cols-2'>
						<picture
							className='relative flex items-center justify-center w-full h-full bg-[url("./assets/ampa.jpg")]'
							style={{ backgroundSize: '100% 100%' }}
						></picture>

						<div className='  md:flex md:items-center md:justify-center md:m-auto md:relative max-[640px]:absolute max-[640px]:bg-gray-800/60  max-[640px]:top-1/4 max-[640px]:w-full max-[640px]:backdrop-blur-sm '>
							<div className='flex flex-col gap-5 p-20 rounded'>
								<div className='flex flex-col gap-8 text-center text-white '>
									<Link
										to='/iniciar-sesion'
										className='px-4 py-2 font-bold text-white transition-all bg-blue-500 border-b-4 border-blue-700 rounded active:border-b-0 active:bg-blue-600 active:text-gray-300 hover:bg-blue-400 hover:border-blue-500'
									>
										Iniciar Sesión
									</Link>
									<Link
										to='/registrarse'
										className='px-4 py-2 font-bold text-white transition-all bg-blue-500 border-b-4 border-blue-700 rounded active:border-b-0 active:bg-blue-600 active:text-gray-300 hover:bg-blue-400 hover:border-blue-500'
									>
										Registarse
									</Link>
									<Link
										to='/pagina-principal'
										className='px-4 py-2 font-bold text-white transition-all bg-blue-500 border-b-4 border-blue-700 rounded active:border-b-0 active:bg-blue-600 active:text-gray-300 hover:bg-blue-400 hover:border-blue-500'
									>
										Continuar como invitado
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
