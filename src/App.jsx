import { Link } from 'react-router-dom'
import { useMainStore } from './stores/mainContext'
import { useEffect } from 'react'
import MainButton from './components/MainButton'

function App() {
	const { setGuest, user } = useMainStore()

	useEffect(() => {
		setGuest(false)
	}, [])

	return (
		<>
			<div>
				<div className='h-screen '>
					<p className='absolute top-0 z-10 w-full p-2 font-semibold text-center text-white bg-slate-500'>
						AMPA EL CERRILLO del IES FERNANDO III
					</p>

					<div className='relative items-center h-full bg-slate-300 sm:grid sm:grid-cols-2'>
						<picture
							className='relative flex items-center justify-center w-full h-full bg-[url("./assets/ampa.jpg")]'
							style={{ backgroundSize: '100% 100%' }}
						></picture>

						<div className='  md:flex md:items-center md:justify-center md:m-auto md:relative max-[640px]:absolute max-[640px]:bg-gray-800/60  max-[640px]:top-1/4 max-[640px]:w-full max-[640px]:backdrop-blur-sm '>
							<div className='flex flex-col gap-5 p-20 rounded'>
								<div className='flex flex-col gap-8 text-center text-white '>
									<MainButton
										route={'/iniciar-sesion'}
										title={'Iniciar Sesión'}
									/>

									<MainButton route={'/registrarse'} title={'Registarse'} />

									<MainButton
										acction={() => {
											!user.email && setGuest(true)
										}}
										route={'/pagina-invitado'}
										title={'Continuar como invitado'}
									/>
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
