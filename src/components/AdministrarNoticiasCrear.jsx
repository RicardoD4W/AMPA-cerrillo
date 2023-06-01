import { useState } from 'react'
import { IconAddPublicacion } from './Icons'
import ModalCreatePubli from './ModalCreatePubli'

const AdministrarNoticiasCrear = () => {
	const [open, setOpen] = useState(false)
	return (
		<>
			<button
				className='relative flex items-center justify-center text-white transition-colors rounded cursor-pointer bg-slate-400 w-60 h-80 hover:bg-slate-400/50 active:bg-slate-400 '
				type='button'
				onClick={() => setOpen(true)}
			>
				<IconAddPublicacion />
			</button>
			{open ? (
				<>
					<div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
						<div className='relative w-auto max-w-3xl mx-auto my-6'>
							<div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
								<div className='flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200'>
									<h3 className='text-3xl font-semibold'>Crear Publicación</h3>
									<button
										className='float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none'
										onClick={() => setOpen(false)}
									>
										<span className='block w-6 h-6 text-2xl bg-transparent outline-none opacity-5 focus:outline-none'>
											×
										</span>
									</button>
								</div>

								<div className='relative flex-auto p-6'>
									<p className='my-4 text-lg leading-relaxed text-slate-500'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Pariatur omnis exercitationem odit dicta eligendi
										repudiandae nostrum aliquam asperiores magni esse voluptatem
										earum dignissimos, repellat quisquam temporibus animi at
										quaerat, reprehenderit, incidunt voluptate est ex beatae
										fuga! Nemo minus id molestiae iusto, dignissimos fugiat
										impedit. Labore, aut tenetur unde minima dolorum voluptatum
										magni harum nam quibusdam distinctio. Aut a cum laboriosam?
									</p>
								</div>
								<div className='flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200'>
									<button
										className='px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-400 uppercase transition-all duration-150 ease-linear border-2 border-transparent rounded outline-none hover:border-2 hover:border-red-500 hover:text-red-500 background-transparent focus:outline-none'
										type='button'
										onClick={() => setOpen(false)}
									>
										Cerrar
									</button>
									<button
										className='px-4 py-2 mb-1 mr-1 text-sm font-bold text-blue-400 uppercase transition-all duration-150 ease-linear border-2 border-blue-400 rounded shadow outline-none hover:text-blue-500 hover:border-blue-500 botder-1 hover:shadow-lg focus:outline-none'
										type='button'
										onClick={() => setOpen(false)}
									>
										Publicar
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='fixed inset-0 z-40 bg-black opacity-25'></div>
				</>
			) : null}
		</>
	)
}

export default AdministrarNoticiasCrear
